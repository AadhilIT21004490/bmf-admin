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

interface AddVehicleFormProps {
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
}

const AddVehicleForm: React.FC<AddVehicleFormProps> = ({ data, setData }) => {

  const handleChange = (key: string, value: any) => {
    setData((prev: any) => ({ ...prev, [key]: value }));
  };

  return (
    <div>
      <h6 className="text-base text-neutral-600 dark:text-neutral-200 mb-4">
        Add Vehicle
      </h6>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-x-6">
        {/* Model */}
        <div className="col-span-12 sm:col-span-6 mb-5">
          <Label htmlFor="model" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">
            Model <span className="text-red-600">*</span>
          </Label>
          <Input
            id="model"
            value={data.model || ""}
            onChange={(e) => handleChange("model", e.target.value)}
            placeholder="Enter Model"
            required
          />
        </div>

        {/* Manufacturer */}
        <div className="col-span-12 sm:col-span-6 mb-5">
          <Label htmlFor="manufacturer" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">
            Manufacturer <span className="text-red-600">*</span>
          </Label>
          <Input
            id="manufacturer"
            value={data.manufacturer || ""}
            onChange={(e) => handleChange("manufacturer", e.target.value)}
            placeholder="Enter Manufacturer"
            required
          />
        </div>

        {/* Year of Manufacture */}
        <div className="col-span-12 sm:col-span-6 mb-5">
          <Label htmlFor="year" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">
            Year of Manufacture <span className="text-red-600">*</span>
          </Label>
          <Input
            id="year"
            type="number"
            value={data.year || ""}
            onChange={(e) => handleChange("year", e.target.value)}
            placeholder="e.g. 2022"
            required
          />
        </div>

        {/* Vehicle Type */}
        <div className="col-span-12 sm:col-span-6 mb-5">
          <Label htmlFor="vehicleType" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">
            Vehicle Type <span className="text-red-600">*</span>
          </Label>
          <Select
            value={data.vehicleType || ""}
            onValueChange={(val) => handleChange("vehicleType", val)}
            required
          >
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

        {/* Transmission */}
        <div className="col-span-12 sm:col-span-6 mb-5">
          <Label htmlFor="transmission" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">
            Transmission <span className="text-red-600">*</span>
          </Label>
          <Select
            value={data.transmission || ""}
            onValueChange={(val) => handleChange("transmission", val)}
            required
          >
            <SelectTrigger id="transmission">
              <SelectValue placeholder="Select Transmission" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Automatic">Automatic</SelectItem>
              <SelectItem value="Manual">Manual</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Fuel Type */}
        <div className="col-span-12 sm:col-span-6 mb-5">
          <Label htmlFor="fuelType" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">
            Fuel Type <span className="text-red-600">*</span>
          </Label>
          <Select
            value={data.fuelType || ""}
            onValueChange={(val) => handleChange("fuelType", val)}
            required
          >
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

        {/* Description */}
        <div className="col-span-12 mb-5">
          <Label htmlFor="description" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">
            Description
          </Label>
          <Textarea
            id="description"
            value={data.description || ""}
            onChange={(e) => handleChange("description", e.target.value)}
            placeholder="Write Description"
          />
        </div>

        {/* Doors */}
        <div className="col-span-12 sm:col-span-6 mb-5">
          <Label htmlFor="doors" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">
            Doors
          </Label>
          <Input
            id="doors"
            type="number"
            value={data.doors || ""}
            onChange={(e) => handleChange("doors", e.target.value)}
            placeholder="Number of doors"
          />
        </div>

        {/* Seats */}
        <div className="col-span-12 sm:col-span-6 mb-5">
          <Label htmlFor="seats" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">
            Seats
          </Label>
          <Input
            id="seats"
            type="number"
            value={data.seats || ""}
            onChange={(e) => handleChange("seats", e.target.value)}
            placeholder="Number of seats"
          />
        </div>

        {/* Km/Day */}
        <div className="col-span-12 sm:col-span-6 mb-5">
          <Label htmlFor="kmPerDay" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">
            Km/Day
          </Label>
          <Input
            id="kmPerDay"
            type="number"
            value={data.kmPerDay || ""}
            onChange={(e) => handleChange("kmPerDay", e.target.value)}
            placeholder="Allowed km per day"
          />
        </div>

        {/* Luggage Capacity */}
        <div className="col-span-12 sm:col-span-6 mb-5">
          <Label htmlFor="luggageCapacity" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">
            Luggage Capacity
          </Label>
          <div className="grid grid-cols-2 gap-3">
            <Input
              value={data.largeLuggage || ""}
              onChange={(e) => handleChange("largeLuggage", e.target.value)}
              type="number"
              placeholder="Large"
              min={0}
            />
            <Input
              value={data.handLuggage || ""}
              onChange={(e) => handleChange("handLuggage", e.target.value)}
              type="number"
              placeholder="Hand Luggage"
              min={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVehicleForm;
