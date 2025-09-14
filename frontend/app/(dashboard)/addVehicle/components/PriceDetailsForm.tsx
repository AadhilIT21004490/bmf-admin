"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface PriceDetailsFormProps {
  data: { [key: string]: number };
  setData: React.Dispatch<React.SetStateAction<{ [key: string]: number }>>;
}

const durations = [
  {
    id: "oneWeekandBelow",
    days: 7,
    label: "For 1 Week",
    totalPlaceholder: "Total for 1 Week",
  },
  {
    id: "twoWeeks",
    days: 14,
    label: "For 2 Weeks",
    totalPlaceholder: "Total for 2 Weeks",
  },
  {
    id: "threeWeeks",
    days: 21,
    label: "For 3 Weeks",
    totalPlaceholder: "Total for 3 Weeks",
  },
  {
    id: "oneMonth",
    days: 30,
    label: "For 1 Month",
    totalPlaceholder: "Total for 1 Month",
  },
  {
    id: "threeMonths",
    days: 90,
    label: "For 3 Months",
    totalPlaceholder: "Total for 3 Months",
  },
  {
    id: "sixMonthsAndAbove",
    days: 180,
    label: "For 6 Months & Over",
    totalPlaceholder: "Total for 6 Months & Over",
  },
];

const PriceDetailsForm: React.FC<PriceDetailsFormProps> = ({
  data,
  setData,
}) => {
  const handleChange = (id: string, value: number) => {
    setData((prev) => ({
      ...prev,
      [id]: value, // store per-day rate
    }));
  };

  return (
    <div>
      <h6 className="text-base text-neutral-600 dark:text-neutral-200 mb-4">
        Price Details
      </h6>

      <div className="space-y-6">
        {durations.map((d) => {
          const perDayRate = data[d.id] || "";
          const total = data[d.id] ? data[d.id] * d.days : "";

          return (
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
                  id={`${d.id}-day`}
                  placeholder="Per Day Rate"
                  value={perDayRate}
                  onChange={(e) => handleChange(d.id, Number(e.target.value))}
                  min={0}
                  required
                />
              </div>

              {/* Total */}
              <div className="col-span-6 sm:col-span-5">
                <Input
                  type="number"
                  id={`${d.id}-total`}
                  placeholder={d.totalPlaceholder}
                  value={total}
                  readOnly
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PriceDetailsForm;
