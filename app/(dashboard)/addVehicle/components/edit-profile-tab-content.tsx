"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const AddVehicleForm = () => {
  return (
    <div>
      <h6 className="text-base text-neutral-600 dark:text-neutral-200 mb-4">
        Add Vehicle
      </h6>

      <form action="/api/vehicles/add" method="POST">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-x-6">
          {/* Model */}
          <div className="col-span-12 sm:col-span-6">
            <div className="mb-5">
              <Label
                htmlFor="model"
                className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
              >
                Model <span className="text-red-600">*</span>
              </Label>
              <Input
                name="model"
                id="model"
                placeholder="Enter Model"
                required
              />
            </div>
          </div>

          {/* Manufacturer */}
          <div className="col-span-12 sm:col-span-6">
            <div className="mb-5">
              <Label
                htmlFor="manufacturer"
                className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
              >
                Manufacturer <span className="text-red-600">*</span>
              </Label>
              <Input
                name="manufacturer"
                id="manufacturer"
                placeholder="Enter Manufacturer"
                required
              />
            </div>
          </div>

          {/* Year Of Manufacture */}
          <div className="col-span-12 sm:col-span-6">
            <div className="mb-5">
              <Label
                htmlFor="year"
                className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
              >
                Year of Manufacture <span className="text-red-600">*</span>
              </Label>
              <Input
                name="year"
                id="year"
                type="number"
                placeholder="e.g. 2022"
                required
              />
            </div>
          </div>

          {/* Vehicle Type */}
          <div className="col-span-12 sm:col-span-6">
            <div className="mb-5">
              <Label
                htmlFor="vehicleType"
                className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
              >
                Vehicle Type <span className="text-red-600">*</span>
              </Label>
              <Select name="vehicleType" required>
                <SelectTrigger id="vehicleType">
                  <SelectValue placeholder="Select Vehicle Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="SUV">SUV</SelectItem>
                  <SelectItem value="Sedan">Sedan</SelectItem>
                  <SelectItem value="Hatchback">Hatchback</SelectItem>
                  <SelectItem value="Mini Van">Mini Van</SelectItem>
                  <SelectItem value="Compact">Compact</SelectItem>
                  <SelectItem value="Pickup">Pickup</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Transmission */}
          <div className="col-span-12 sm:col-span-6">
            <div className="mb-5">
              <Label
                htmlFor="transmission"
                className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
              >
                Transmission <span className="text-red-600">*</span>
              </Label>
              <Select name="transmission" required>
                <SelectTrigger id="transmission">
                  <SelectValue placeholder="Select Transmission" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Automatic">Automatic</SelectItem>
                  <SelectItem value="Manual">Manual</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Fuel Type */}
          <div className="col-span-12 sm:col-span-6">
            <div className="mb-5">
              <Label
                htmlFor="fuelType"
                className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
              >
                Fuel Type <span className="text-red-600">*</span>
              </Label>
              <Select name="fuelType" required>
                <SelectTrigger id="fuelType">
                  <SelectValue placeholder="Select Fuel Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Petrol">Petrol</SelectItem>
                  <SelectItem value="Diesel">Diesel</SelectItem>
                  <SelectItem value="Hybrid">Hybrid</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Description */}
          <div className="col-span-12">
            <div className="mb-5">
              <Label
                htmlFor="description"
                className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
              >
                Description
              </Label>
              <Textarea
                name="description"
                id="description"
                placeholder="Write Description"
              />
            </div>
          </div>

          {/* Doors */}
          <div className="col-span-12 sm:col-span-6">
            <div className="mb-5">
              <Label
                htmlFor="doors"
                className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
              >
                Doors
              </Label>
              <Input
                name="doors"
                id="doors"
                type="number"
                placeholder="Number of doors"
              />
            </div>
          </div>

          {/* Seats */}
          <div className="col-span-12 sm:col-span-6">
            <div className="mb-5">
              <Label
                htmlFor="seats"
                className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
              >
                Seats
              </Label>
              <Input
                name="seats"
                id="seats"
                type="number"
                placeholder="Number of seats"
              />
            </div>
          </div>

          {/* Km/Day */}
          <div className="col-span-12 sm:col-span-6">
            <div className="mb-5">
              <Label
                htmlFor="kmPerDay"
                className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
              >
                Km/Day
              </Label>
              <Input
                name="kmPerDay"
                id="kmPerDay"
                type="number"
                placeholder="Allowed km per day"
              />
            </div>
          </div>

          {/* Luggage Capacity */}
          <div className="col-span-12 sm:col-span-6">
            <div className="mb-5">
              <Label
                htmlFor="luggageCapacity"
                className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2"
              >
                Luggage Capacity
              </Label>
              <div className="grid grid-cols-2 gap-3">
                <Input
                  name="largeLuggage"
                  type="number"
                  placeholder="Large"
                  min={0}
                />
                <Input
                  name="handLuggage"
                  type="number"
                  placeholder="Hand Luggage"
                  min={0}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-3 mt-6">
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
            Save Vehicle
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddVehicleForm;
