"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import AvatarUpload from "./avatar-upload";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { handleProfileUpdate } from "./actions/handleProfileUpdate";

const EditProfileTabContent = () => {
  return (
    <div>
      <h6 className="text-base text-neutral-600 dark:text-neutral-200 mb-4">
        Profile Image
      </h6>
      <div className="mb-6 mt-4">
        <AvatarUpload />
      </div>

      <form action={handleProfileUpdate}>
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-x-6">
          {/* Full Name */}
          <div className="col-span-12 sm:col-span-6">
            <div className="mb-5">
              <Label
                htmlFor="fullName"
                className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
              >
                Full Name <span className="text-red-600">*</span>
              </Label>
              <Input
                name="fullName"
                type="text"
                id="fullName"
                placeholder="Enter Full Name"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="col-span-12 sm:col-span-6">
            <div className="mb-5">
              <Label
                htmlFor="email"
                className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
              >
                Email <span className="text-red-600">*</span>
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

          {/* Phone */}
          <div className="col-span-12 sm:col-span-6">
            <div className="mb-5">
              <Label
                htmlFor="phone"
                className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
              >
                Phone <span className="text-red-600">*</span>
              </Label>
              <Input
                name="phone"
                type="tel"
                id="phone"
                placeholder="Enter phone number"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="col-span-12 sm:col-span-6">
            <div className="mb-5">
              <Label className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">
                Languages
              </Label>
              <div className="flex gap-6 mt-2">
                <label className="flex items-center gap-2">
                  <Input type="checkbox" name="languages.English" /> English
                </label>
                <label className="flex items-center gap-2">
                  <Input type="checkbox" name="languages.Tamil" /> Tamil
                </label>
                <label className="flex items-center gap-2">
                  <Input type="checkbox" name="languages.Sinhala" /> Sinhala
                </label>
              </div>
            </div>
          </div>

          {/* NIC Number */}
          <div className="col-span-12 sm:col-span-6">
            <div className="mb-5">
              <Label
                htmlFor="nicNumber"
                className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
              >
                NIC Number <span className="text-red-600">*</span>
              </Label>
              <Input
                name="nicNumber"
                type="text"
                id="nicNumber"
                placeholder="Enter NIC Number"
                required
              />
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="col-span-12 sm:col-span-6">
            <div className="mb-5">
              <Label
                htmlFor="emergencyContact"
                className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
              >
                Emergency Contact <span className="text-red-600">*</span>
              </Label>
              <Input
                name="emergencyContact"
                type="tel"
                id="emergencyContact"
                placeholder="Enter Emergency Contact"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div className="col-span-12">
            <div className="mb-5">
              <Label
                htmlFor="desc"
                className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
              >
                Description
              </Label>
              <Textarea
                name="desc"
                id="desc"
                placeholder="Write a short description"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <Button type="submit" className="bg-green-600 hover:bg-green-700">
            Save Profile
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileTabContent;
