"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface PriceDetailsFormProps {
  data: { [key: string]: number };
  setData: React.Dispatch<React.SetStateAction<{ [key: string]: number }>>;
}


const durations = [
  { id: "1week", days: 7, label: "for 1 week", totalPlaceholder: "Total for 1 Week" },
  { id: "2weeks", days: 14, label: "for 2 weeks", totalPlaceholder: "Total for 2 Weeks" },
  { id: "3weeks", days: 21, label: "for 3 weeks", totalPlaceholder: "Total for 3 Weeks" },
  { id: "1month", days: 30, label: "for 1 month", totalPlaceholder: "Total for 1 Month" },
  { id: "3months", days: 90, label: "for 3 months", totalPlaceholder: "Total for 3 Months" },
  { id: "6months", days: 180, label: "for 6 months & Over", totalPlaceholder: "Total for 6 Months & Over" },
];

const PriceDetailsForm: React.FC<PriceDetailsFormProps> = ({ data, setData }) => {

  const handlePerDayChange = (id: string, value: number) => {
    setData((prev) => ({
      ...prev,
      [id]: value, // store per day rate
    }));
  };

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
                value={data[d.id] || ""}
                onChange={(e) =>
                  handlePerDayChange(d.id, Number(e.target.value))
                }
                required
              />
            </div>

            {/* Total / Per Month Rate */}
            <div className="col-span-6 sm:col-span-5">
              <Input
                type="number"
                name={`${d.id}-total`}
                id={`${d.id}-total`}
                placeholder={d.totalPlaceholder}
                value={data[d.id] ? data[d.id] * d.days : ""}
                readOnly
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceDetailsForm;
