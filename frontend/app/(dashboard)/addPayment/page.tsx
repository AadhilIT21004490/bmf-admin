"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
// import AvatarUpload from './avatar-upload';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import Link from "next/link";
import { ArrowBigLeftDash } from "lucide-react";
import { DatePicker } from "@/components/shared/date-picker";
import Dropzone from "react-dropzone";
// import { handleProfileUpdate } from './actions/handleProfileUpdate';

const addPayment = () => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <div>
      <div className="grid grid-cols-4 grid-rows-1 gap-4 rounded-md my-2 px-3 bg-white dark:bg-[#273142]">
        <div>
          <Link href="/paymentHistory">
            <button className="my-5 p-2 border rounded-md bg-blue-400 hover:bg-blue-900 inline-flex items-center">
              <ArrowBigLeftDash />
              <strong>Back</strong>
            </button>
          </Link>
        </div>
        <div className="col-span-3 mt-6">
          <DashboardBreadcrumb
            title="Make New Payment"
            text="Make New Payment"
          />
        </div>
      </div>
      <h6 className="text-base text-neutral-600 dark:text-neutral-200 my-6">
        Make a New Payment
      </h6>
      {/* <div className="mb-6 mt-4">
                <AvatarUpload />
            </div> */}

      <form>
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-x-6">
          <div className="col-span-12 sm:col-span-6">
            <div className="mb-5">
              <Label
                htmlFor="name"
                className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
              >
                Reference <span className="text-red-600">*</span>
              </Label>
              <Input
                name="name"
                type="text"
                id="name"
                placeholder="Enter Full Name"
                required
              />
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6">
            <div className="mb-5">
              <Label
                htmlFor="email"
                className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
              >
                Description <span className="text-red-600">*</span>
              </Label>
              <Input
                name="email"
                type="email"
                id="email"
                placeholder="Enter email address"
                required
              />
            </div>
          </div>

          <div className="col-span-12 sm:col-span-6">
            <div className="mb-5">
              <Label
                htmlFor="department"
                className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
              >
                Date
              </Label>
              <DatePicker />
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6">
            <div className="mb-5">
              <Label
                htmlFor="number"
                className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
              >
                Amount
              </Label>
              <Input
                name="number"
                type="tel"
                id="number"
                placeholder="Enter phone number"
              />
            </div>
          </div>

          <div className="col-span-12">
            <div className="mb-5">
              <label className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">
                Upload Files <span className="text-red-600">*</span>
              </label>

              {/* Dropzone */}
              <Dropzone
                accept={{
                  "image/*": [],
                  "application/pdf": [],
                }}
                multiple
                onDrop={(acceptedFiles) => {
                  setFiles((prev) => [...prev, ...acceptedFiles]);
                }}
              >
                {({ getRootProps, getInputProps }) => (
                  <div
                    {...getRootProps()}
                    className="cursor-pointer border-2 border-dashed border-gray-400 p-6 text-center rounded-lg mb-4"
                  >
                    <input {...getInputProps()} />
                    <p className="text-neutral-600 dark:text-neutral-200">
                      Drag & drop files here, or click to select
                    </p>
                    <p className="text-sm text-gray-500">
                      (Max 2 images/files recommended)
                    </p>
                  </div>
                )}
              </Dropzone>

              {/* Preview */}
              {files.length > 0 && (
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {files.map((file, idx) => (
                    <div
                      key={idx}
                      className="relative border border-gray-500 rounded-md"
                    >
                      {file.type === "application/pdf" ? (
                        <div className="w-full h-32 flex items-center justify-center bg-gray-200 rounded-lg">
                          <span className="text-red-600 font-semibold">
                            📄 {file.name}
                          </span>
                        </div>
                      ) : (
                        <img
                          src={URL.createObjectURL(file)}
                          alt={file.name}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      )}
                      <button
                        type="button"
                        onClick={() =>
                          setFiles((prev) => prev.filter((_, i) => i !== idx))
                        }
                        className="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Button
            type="reset"
            variant="outline"
            className="h-[48px] border border-red-600 bg-transparent hover:bg-red-600/20 text-red-600 text-base px-14 py-[11px] rounded-lg"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="h-[48px] text-base px-14 py-3 rounded-lg"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default addPayment;
