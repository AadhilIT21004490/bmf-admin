"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { handleProfileUpdate } from './actions/handleProfileUpdate';


const EditDocumentsTabContent = () => {
  return (
    <div>
      <h6 className="text-base text-neutral-600 dark:text-neutral-200 mb-4">
        Documents Upload
      </h6>

      <form action={handleProfileUpdate}>
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-x-6">
          {/* NIC Picture */}
          <div className="col-span-12 sm:col-span-6">
            <div className="mb-5">
              <Label
                htmlFor="nicPicture"
                className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
              >
                NIC Picture <span className="text-red-600">*</span>
              </Label>
              <Input
                type="file"
                id="nicPicture"
                name="nicPicture"
                accept="image/*,.pdf"
                required
              />
            </div>
          </div>

          {/* Business Registration Document */}
          <div className="col-span-12 sm:col-span-6">
            <div className="mb-5">
              <Label
                htmlFor="brDocument"
                className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
              >
                Business Registration Document
              </Label>
              <Input
                type="file"
                id="brDocument"
                name="brDocument"
                accept="image/*,.pdf"
              />
            </div>
          </div>

          {/* Proof of Address */}
          <div className="col-span-12 sm:col-span-6">
            <div className="mb-5">
              <Label
                htmlFor="proofOfAddress"
                className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
              >
                Proof of Address
              </Label>
              <Input
                type="file"
                id="proofOfAddress"
                name="proofOfAddress"
                accept="image/*,.pdf"
              />
            </div>
          </div>

          {/* Rental Agreement */}
          <div className="col-span-12 sm:col-span-6">
            <div className="mb-5">
              <Label
                htmlFor="rentalAgreement"
                className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
              >
                Rental Agreement
              </Label>
              <Input
                type="file"
                id="rentalAgreement"
                name="rentalAgreement"
                accept="image/*,.pdf"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
            Save Documents
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditDocumentsTabContent;
