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
import { amenitiesOptions } from "@/data/index";
import { Textarea } from "@/components/ui/textarea";

interface AddVehicleFormProps {
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
}

const AddVehicleForm: React.FC<AddVehicleFormProps> = ({ data, setData }) => {
  const handleChange = (key: string, value: any) => {
    if (key === "largeLuggage" || key === "handLuggage") {
      setData((prev: any) => ({
        ...prev,
        luggageCapacity: {
          ...prev.luggageCapacity,
          [key]: Number(value),
        },
      }));
    } else {
      setData((prev: any) => ({ ...prev, [key]: value }));
    }
  };

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    setData((prev: any) => {
      const currentAmenities = prev.amenities || [];
      return {
        ...prev,
        amenities: checked
          ? [...currentAmenities, amenity]
          : currentAmenities.filter((a: string) => a !== amenity),
      };
    });
  };

  return (
    <div>
      <h6 className="text-base text-neutral-600 dark:text-neutral-200 mb-4">
        Add Vehicle
      </h6>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-x-6">
        {/* Model */}
        <div className="col-span-12 sm:col-span-6 mb-5">
          <Label htmlFor="model" className="mb-2">
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
          <Label htmlFor="manufacturer" className="mb-2">
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

        {/* Year */}
        <div className="col-span-12 sm:col-span-6 mb-5">
          <Label htmlFor="year" className="mb-2">
            Year of Manufacture <span className="text-red-600">*</span>
          </Label>
          <Input
            id="yom"
            type="number"
            value={data.yom || ""}
            onChange={(e) => handleChange("yom", e.target.value)}
            placeholder="e.g. 2022"
            required
          />
        </div>

        {/* Vehicle Type */}
        <div className="col-span-12 sm:col-span-6 mb-5">
          <Label htmlFor="vehicleType" className="mb-2">
            Vehicle Type <span className="text-red-600">*</span>
          </Label>
          <Select
            value={data.vehicleType || ""}
            onValueChange={(val) => handleChange("vehicleType", val)}
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
          <Label htmlFor="transmission" className="mb-2">
            Transmission <span className="text-red-600">*</span>
          </Label>
          <Select
            value={data.transmission || ""}
            onValueChange={(val) => handleChange("transmission", val)}
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
          <Label htmlFor="fuelType" className="mb-2">
            Fuel Type <span className="text-red-600">*</span>
          </Label>
          <Select
            value={data.fuelType || ""}
            onValueChange={(val) => handleChange("fuelType", val)}
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
          <Label htmlFor="description" className="mb-2">
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
          <Label htmlFor="doors" className="mb-2">
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
          <Label htmlFor="seats" className="mb-2">
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
          <Label htmlFor="kmPerDay" className="mb-2">
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
          <Label htmlFor="luggageCapacity">Luggage Capacity</Label>
          <div className="grid grid-cols-2 gap-3 mt-2">
            <Input
              value={data.luggageCapacity?.largeLuggage ?? ""}
              onChange={(e) => handleChange("largeLuggage", e.target.value)}
              type="number"
              placeholder="Large Luggage"
              min={0}
            />
            <Input
              value={data.luggageCapacity?.handLuggage ?? ""}
              onChange={(e) => handleChange("handLuggage", e.target.value)}
              type="number"
              placeholder="Hand Luggage"
              min={0}
            />
          </div>
        </div>

        {/* Amenities */}
        <div className="col-span-12 mb-5">
          <Label className="block mb-2">Amenities</Label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {amenitiesOptions.map((item) => (
              <label key={item} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={data.amenities?.includes(item) || false}
                  onChange={(e) => handleAmenityChange(item, e.target.checked)}
                  className="h-4 w-4"
                />
                <span className="text-sm text-neutral-700 dark:text-neutral-300">
                  {item}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVehicleForm;
