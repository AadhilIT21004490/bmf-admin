"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { handleProfileUpdate } from './actions/handleProfileUpdate';


const EditBusinessTabContent = () => {
  return (
    <div>
      

      <form action={handleProfileUpdate}>
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-x-6">
          {/* Business Name */}
          <div className="col-span-12 sm:col-span-6">
            <div className="mb-5">
              <Label
                htmlFor="businessName"
                className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
              >
                Business Name <span className="text-red-600">*</span>
              </Label>
              <Input
                name="businessName"
                type="text"
                id="businessName"
                placeholder="Enter Business Name"
                required
              />
            </div>
          </div>

          {/* Business Type */}
          <div className="col-span-12 sm:col-span-6">
            <div className="mb-5">
              <Label
                htmlFor="businessType"
                className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
              >
                Business Type <span className="text-red-600">*</span>
              </Label>
              <Select name="businessType" defaultValue="Individual">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Business Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Individual">Individual</SelectItem>
                  <SelectItem value="Registered Company">
                    Registered Company
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Business Reg Number */}
          <div className="col-span-12 sm:col-span-6">
            <div className="mb-5">
              <Label
                htmlFor="businessRegNumber"
                className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
              >
                Business Registration Number
              </Label>
              <Input
                name="businessRegNumber"
                type="text"
                id="businessRegNumber"
                placeholder="Enter Registration Number (if any)"
              />
            </div>
          </div>

          {/* Operating City */}
          <div className="col-span-12 sm:col-span-6">
            <div className="mb-5">
              <Label
                htmlFor="operatingCity"
                className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
              >
                Operating City <span className="text-red-600">*</span>
              </Label>
              <Input
                name="operatingCity"
                type="text"
                id="operatingCity"
                placeholder="Enter City"
                required
              />
            </div>
          </div>

          {/* Office Address */}
          <div className="col-span-12">
            <div className="mb-5">
              <Label
                htmlFor="officeAddress"
                className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
              >
                Office Address <span className="text-red-600">*</span>
              </Label>
              <Textarea
                name="officeAddress"
                id="officeAddress"
                placeholder="Enter Office Address"
                required
              />
            </div>
          </div>

          {/* Office Contact */}
          <div className="col-span-12 sm:col-span-6">
            <div className="mb-5">
              <Label
                htmlFor="officeContact"
                className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
              >
                Office Contact <span className="text-red-600">*</span>
              </Label>
              <Input
                name="officeContact"
                type="tel"
                id="officeContact"
                placeholder="Enter Office Contact Number"
                required
              />
            </div>
          </div>

          {/* Business Overview */}
          <div className="col-span-12">
            <div className="mb-5">
              <Label
                htmlFor="businessOverview"
                className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
              >
                Business Overview
              </Label>
              <Textarea
                name="businessOverview"
                id="businessOverview"
                placeholder="Write a short overview about your business"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
            Save Business Details
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditBusinessTabContent;
