"use client";

import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PlusCircle, Sheet, Eye, Edit, Trash2, CircleX } from "lucide-react";
import Link from "next/link";

import { useGetFleets } from "@/hooks/apiHooks/useGetFleets";
import LoadingSkeleton from "@/components/loading-skeleton";
import ErrorMessage from "@/components/error-message";
// import { useRouter } from "next/navigation"

// const sellingProduct = [

//     {
//         fleetCode:"BMF4568",
//         model:"Land Cruiser Prado",
//         menufacturer:"Toyota",
//         type:"SUV",
//         yom:"2022"
//     },
//     {
//         fleetCode:"BMF4568",
//         model:"Land Cruiser Prado",
//         menufacturer:"Toyota",
//         type:"SUV",
//         yom:"2022"
//     },
//     {
//         fleetCode:"BMF4568",
//         model:"Land Cruiser Prado",
//         menufacturer:"Toyota",
//         type:"SUV",
//         yom:"2022"
//     },
//     {
//         fleetCode:"BMF4568",
//         model:"Land Cruiser Prado",
//         menufacturer:"Toyota",
//         type:"SUV",
//         yom:"2022"
//     },
//     {
//         fleetCode:"BMF4568",
//         model:"Land Cruiser Prado",
//         menufacturer:"Toyota",
//         type:"SUV",
//         yom:"2022"
//     },

// ];

// const router = useRouter();

const fleetmanagement = () => {
  const { fleets, loading, error } = useGetFleets();

  if (loading) {
    return <LoadingSkeleton height="h-screen" text="Getting Fleets..." />;
  }
  if (error) {
    return <ErrorMessage error={error} page="fleet management" />;
  }
  return (
    <>
      <h6>FLEET MANAGEMENT</h6>
      <div className="flex items-center justify-between px-4 my-2 rounded-md bg-white dark:bg-[#273142]">
        {/* Search bar */}
        <div className="flex-1 max-w-sm">
          <input
            type="text"
            placeholder="Search..."
            className="w-full my-5 px-3 py-2 border rounded-md bg-white dark:bg-[#273142] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Buttons aligned right */}
        <div className="flex space-x-4">
          <button className="my-5 p-2 border rounded-md bg-blue-400 hover:bg-blue-900 inline-flex items-center">
            <Sheet size={20} className="mr-2" />
            Export to Excel
          </button>
          <Link href={"/addVehicle"}>
            <button className="my-5 p-2 border rounded-md border-green-600 text-green-600 hover:bg-green-800 hover:text-white inline-flex items-center">
              <PlusCircle className="mr-2" />
              Add a vehicle
            </button>
          </Link>
        </div>
      </div>
      <Table className="table-auto border-spacing-0 border-separate">
        <TableHeader>
          <TableRow className="border-0">
            <TableHead className="px-4 h-12 border-e last:border-e-0 text-center bg-neutral-100 dark:bg-slate-700 border-t border-neutral-200 first:border-s dark:border-slate-600 rounded-tl-lg">
              Fleet Code
            </TableHead>
            <TableHead className="px-4 h-12 border-e last:border-e-0 text-center bg-neutral-100 dark:bg-slate-700 border-t border-neutral-200 first:border-s dark:border-slate-600">
              Model
            </TableHead>
            <TableHead className="px-4 h-12 border-e last:border-e-0 text-center bg-neutral-100 dark:bg-slate-700 border-t border-neutral-200 first:border-s dark:border-slate-600">
              Menufacturer
            </TableHead>
            <TableHead className="px-4 h-12 border-e last:border-e-0 text-center bg-neutral-100 dark:bg-slate-700 border-t border-neutral-200 first:border-s dark:border-slate-600">
              Vehicle Type
            </TableHead>
            <TableHead className="px-4 h-12 border-e last:border-e-0 text-center bg-neutral-100 dark:bg-slate-700 border-t border-neutral-200 first:border-s dark:border-slate-600">
              YOM
            </TableHead>
            <TableHead className="px-4 h-12 border-e last:border-e-0 text-center bg-neutral-100 dark:bg-slate-700 border-t border-neutral-200 first:border-s dark:border-slate-600">
              Views
            </TableHead>
            <TableHead className="px-4 h-12 border-e last:border-e-0 text-center bg-neutral-100 dark:bg-slate-700 border-t border-neutral-200 first:border-s dark:border-slate-600">
              Availability
            </TableHead>

            <TableHead className="px-4 h-12 border-e last:border-e-0 text-center bg-neutral-100 dark:bg-slate-700 border-t border-neutral-200 first:border-s dark:border-slate-600 rounded-tr-lg">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {fleets.map((fleet, index) => {
            const isLast = index === fleets.length - 1;
            return (
              <TableRow key={index}>
                {/* fleetcode */}
                <TableCell
                  className={`py-4 px-4 border-e last:border-e-0 border-b text-center text-primary first:border-s border-neutral-200 dark:border-slate-600 ${
                    isLast ? "rounded-bl-lg" : ""
                  }`}
                >
                  <span className="line-height-1 font-medium text-secondary-light text-sm flex items-center gap-2.5">
                    <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                    {fleet.fleetId}
                  </span>
                </TableCell>

                {/* model */}
                <TableCell className="py-4 px-4 border-e last:border-e-0 border-b text-center first:border-s border-neutral-200 dark:border-slate-600">
                  {fleet.model}
                </TableCell>

                {/* menufacturer */}
                <TableCell className="py-4 px-4 border-e last:border-e-0 border-b text-center first:border-s border-neutral-200 dark:border-slate-600">
                  {fleet.manufacturer}
                </TableCell>

                {/* type */}
                <TableCell className="py-4 px-4 border-e last:border-e-0 border-b text-center first:border-s border-neutral-200 dark:border-slate-600">
                  {fleet.vehicleType}
                </TableCell>
                {/* yom */}
                <TableCell className="py-4 px-4 border-e last:border-e-0 border-b text-center first:border-s border-neutral-200 dark:border-slate-600">
                  {fleet.yom}
                </TableCell>
                {/* views */}
                <TableCell className="py-4 px-4 border-e last:border-e-0 border-b text-center first:border-s border-neutral-200 dark:border-slate-600">
                  {fleet.views}
                </TableCell>
                {/* availability */}
                <TableCell className="py-4 px-4 border-e last:border-e-0 border-b text-center first:border-s border-neutral-200 dark:border-slate-600">
                  <Switch id="availability" />
                </TableCell>

                {/* action */}
                <TableCell className="py-4 px-4 border-e last:border-e-0 border-b text-center text-primary first:border-s border-neutral-200 dark:border-slate-600">
                  <div className="flex justify-center gap-2">
                    {/* View Button */}
                    <Link href={`/view/${fleet._id}`}>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-blue-600 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-600"
                      >
                        <Eye className="h-5 w-5" />
                      </Button>
                    </Link>

                    {/* Edit Button */}
                    <Link href="/edit/123">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-green-600 hover:text-white hover:bg-green-600 dark:hover:bg-green-600"
                      >
                        <Edit className="h-5 w-5" />
                      </Button>
                    </Link>

                    {/* Delete Button */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-600 hover:text-white hover:bg-red-600 dark:hover:bg-red-600"
                      onClick={() => console.log("Delete action")}
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default fleetmanagement;
