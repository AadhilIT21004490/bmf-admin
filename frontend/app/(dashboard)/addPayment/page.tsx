"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/shared/date-picker";
import Dropzone from "react-dropzone";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { ArrowBigLeftDash } from "lucide-react";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AddPayment = () => {
  const [file, setFile] = useState<File | null>(null);
  const [reference, setReference] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentDate, setPaymentDate] = useState<Date | null>(new Date());
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      toast.error("Please upload a payment proof file");
      return;
    }

    if (!reference || !paymentType || !amount) {
      toast.error("Please fill in all required fields");
      return;
    }

    const formData = new FormData();
    formData.append("reference", reference);
    formData.append("paymentType", paymentType);
    formData.append("amount", amount);
    formData.append(
      "paymentDate",
      paymentDate ? paymentDate.toISOString() : new Date().toISOString()
    );
    formData.append("proofDocument", file);

    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_FRONTEND_URL}/v/payment`,
        {
          method: "POST",
          body: formData,
          credentials: "include",
        }
      );

      const data = await res.json();
      if (data.success) {
        toast.success("Payment added successfully");
        setReference("");
        setPaymentType("");
        setAmount("");
        setPaymentDate(new Date());
        setFile(null);
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (err: any) {
      console.error(err);
      toast.error(err.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      {/* Header / Breadcrumb */}
      <div className="grid grid-cols-4 gap-4 mb-6 bg-white dark:bg-[#273142] rounded-md px-4 py-3 items-center">
        <div>
          <Link href="/paymentHistory">
            <button className="flex items-center gap-2 px-3 py-2 bg-blue-400 hover:bg-blue-900 text-white rounded-md">
              <ArrowBigLeftDash />
              <strong>Back</strong>
            </button>
          </Link>
        </div>
        <div className="col-span-3">
          <DashboardBreadcrumb
            title="Make New Payment"
            text="Make New Payment"
          />
        </div>
      </div>

      <h6 className="text-base text-neutral-600 dark:text-neutral-200 mb-6">
        Make a New Payment
      </h6>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-12 gap-x-6 gap-y-6 bg-white dark:bg-[#273142] p-6 rounded-md"
      >
        {/* Reference */}
        <div className="col-span-12 sm:col-span-6">
          <Label className="mb-2">
            Reference <span className="text-red-600">*</span>
          </Label>
          <Input
            type="text"
            placeholder="NIC number or any unique reference"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            required
          />
        </div>

        {/* Payment Type */}
        <div className="col-span-12 sm:col-span-6">
          <Label className="mb-2">
            Payment Type <span className="text-red-600">*</span>
          </Label>
          <Select
            value={paymentType}
            onValueChange={(value) => setPaymentType(value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select payment type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Monthly Subscription">
                Monthly Subscription
              </SelectItem>
              <SelectItem value="Prime Membership">Prime Membership</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Amount */}
        <div className="col-span-12 sm:col-span-6">
          <Label className="mb-2">
            Amount (LKR) <span className="text-red-600">*</span>
          </Label>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        {/* Date */}
        <div className="col-span-12 sm:col-span-6">
          <Label className="mb-2">
            Date <span className="text-red-600">*</span>
          </Label>
          <DatePicker />
        </div>

        {/* File Upload */}
        <div className="col-span-12">
          <Label className="mb-2">
            Upload Proof Document <span className="text-red-600">*</span>
          </Label>
          <Dropzone
            multiple={false}
            accept={{ "image/*": [], "application/pdf": [] }}
            onDrop={(acceptedFiles) => setFile(acceptedFiles[0])}
          >
            {({ getRootProps, getInputProps }) => (
              <div
                {...getRootProps()}
                className="cursor-pointer border-2 border-dashed border-gray-400 p-6 text-center rounded-lg"
              >
                <input {...getInputProps()} />
                {file ? (
                  <p>{file.name}</p>
                ) : (
                  <p>Drag & drop a file here, or click to select</p>
                )}
              </div>
            )}
          </Dropzone>

          {/* Preview */}
          {file && file.type !== "application/pdf" && (
            <img
              src={URL.createObjectURL(file)}
              alt="Preview"
              className="mt-4 w-48 h-32 object-cover rounded-md"
            />
          )}
        </div>

        {/* Buttons */}
        <div className="col-span-12 flex justify-center gap-3 mt-4">
          {/* <Button
            type="reset"
            variant="outline"
            className="h-[48px] border border-red-600 text-red-600 px-14 rounded-lg hover:bg-red-600/20"
            onClick={() => {
              setReference("");
              setPaymentType("");
              setAmount("");
              setPaymentDate(new Date());
              setFile(null);
            }}
          >
            Cancel
          </Button> */}
          <Button
            type="submit"
            className="h-[48px] px-14 rounded-lg"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Payment"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddPayment;
