"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const durations = [
  { id: "1week", label: "for 1 week" },
  { id: "2weeks", label: "for 2 weeks" },
  { id: "3weeks", label: "for 3 weeks" },
  { id: "1month", label: "for 1 month" },
  { id: "3months", label: "for 3 months" },
  { id: "6months", label: "for 6 months & Over" },
];

const PriceDetailsForm = () => {
  return (
    <div>
      <h6 className="text-base text-neutral-600 dark:text-neutral-200 mb-4">
        Price Details
      </h6>

      <div className="space-y-6">
        {durations.map((d) => (
          <div
            key={d.id}
            className="grid grid-cols-1 sm:grid-cols-12 gap-x-6 items-center"
          >
            {/* Duration Label */}
            <div className="col-span-12 sm:col-span-3">
              <Label
                htmlFor={`${d.id}-day`}
                className="font-semibold text-neutral-600 dark:text-neutral-200 text-sm"
              >
                {d.label} <span className="text-red-600">*</span>
              </Label>
            </div>

            {/* Per Day Rate */}
            <div className="col-span-6 sm:col-span-4">
              <Input
                type="number"
                name={`${d.id}-day`}
                id={`${d.id}-day`}
                placeholder="Per Day Rate"
                required
              />
            </div>

            {/* Per Month / Total Rate */}
            <div className="col-span-6 sm:col-span-5">
              <Input
                type="number"
                name={`${d.id}-month`}
                id={`${d.id}-month`}
                placeholder="Total / Per Month Rate"
                required
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceDetailsForm;
