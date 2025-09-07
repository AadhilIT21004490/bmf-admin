"use client";

import { useState } from "react";
import VehicleImageUploader from "@/app/(dashboard)/addVehicle/components/VehicleImageUploader";
import AddVehicleForm from "@/app/(dashboard)/addVehicle/components/addVehicleForm";
import PriceDetailsForm from "@/app/(dashboard)/addVehicle/components/PriceDetailsForm";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowBigLeftDash } from "lucide-react";

const metadata: Metadata = {
  title: "Add a Vehicle Page",
  description:
    "Add a Vehicle page for vendor admin dashboard.",
};

const ViewProfile = () => {
  // Parent state for all tabs
  const [vehicleDetails, setVehicleDetails] = useState<any>({});
  const [priceDetails, setPriceDetails] = useState<any>({});
  const [images, setImages] = useState<File[]>([]);

  // Save all tab data
  const handleSaveAll = () => {
    const payload = {
      vehicleDetails,
      priceDetails,
      images,
    };
    console.log("Saving all data:", payload);
    // TODO: Call your API here to save
  };

  // Reset all data
  const handleReset = () => {
    setVehicleDetails({});
    setPriceDetails({});
    setImages([]);
  };

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-1 gap-4 rounded-md my-2 px-3 bg-gray-700">
        <div >
                <Link href="/fleetManagement">
                  <button
                  className="my-5 p-2 border rounded-md bg-blue-400 hover:bg-blue-900 inline-flex items-center"
                  >
                    <ArrowBigLeftDash/><strong>Back</strong>
                  </button>
                </Link>
        </div>
        <div className="col-span-3 mt-6">
        <DashboardBreadcrumb title="Add Vehicle" text="Add Vehicle" />

        </div>
      </div>          

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <Card className="card">
            <CardContent className="px-0">
              <Tabs defaultValue="vehicleDetails" className="gap-4">
                <TabsList className="active-gradient bg-transparent dark:bg-transparent rounded-none h-[50px]">
                  <TabsTrigger value="vehicleDetails">Vehicle Details</TabsTrigger>
                  <TabsTrigger value="priceDetails">Price Details</TabsTrigger>
                  <TabsTrigger value="imageUpload">Image Upload</TabsTrigger>
                </TabsList>

                <TabsContent value="vehicleDetails">
                  <AddVehicleForm
                    data={vehicleDetails}
                    setData={setVehicleDetails}
                  />
                </TabsContent>

                <TabsContent value="priceDetails">
                  <PriceDetailsForm
                    data={priceDetails}
                    setData={setPriceDetails}
                  />
                </TabsContent>

                <TabsContent value="imageUpload">
                  <VehicleImageUploader images={images} setImages={setImages} />
                </TabsContent>
              </Tabs>

              {/* Parent Buttons */}
              <div className="flex justify-end mt-6 gap-3">
                <button
                  onClick={handleReset}
                  className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
                >
                  Reset
                </button>
                <button
                  onClick={handleSaveAll}
                  className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
                >
                  Save All
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
export default ViewProfile;
