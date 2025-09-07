"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Car, ChevronRight, PlusCircle, Sheet, Upload } from "lucide-react";
import Link from "next/link";
// import { useRouter } from "next/navigation"

const sellingProduct = [
    {
        id: "#526534",
        name: "Kathryn Murphy",
        date: "25 Jan 2024",
        amount: "$200.00",
        action: "View More",
    },
    {
        id: "#696589",
        name: "Annette Black",
        date: "25 Jan 2024",
        amount: "$200.00",
        action: "View More",
    },
    {
        id: "#256584",
        name: "Kathryn Murphy",
        date: "10 Feb 2024",
        amount: "$200.00",
        action: "View More",
    },
    {
        id: "#526587",
        name: "Eleanor Pena	",
        date: "10 Feb 2024",
        amount: "$200.00",
        action: "View More",
    },
    {
        id: "#105986",
        name: "Leslie Alexander",
        date: "15 Mar 2024",
        amount: "$200.00",
        action: "View More",
    },
];

// const router = useRouter();

const fleetmanagement = () => {
    return (
        <>
        <h6>FLEET MANAGEMENT</h6>
        <div className="flex items-center justify-between bg-gray-900 px-4 my-2 rounded-md">
        {/* Search bar */}
        <div className="flex-1 max-w-sm">
            <input
            type="text"
            placeholder="Search..."
            className="w-full my-5 px-3 py-2 border rounded-md bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    <TableHead className="px-4 h-12 border-e last:border-e-0 text-center bg-neutral-100 dark:bg-slate-700 border-t border-neutral-200 first:border-s last:border-e dark:border-slate-600 rounded-tl-lg">
                        Invoice
                    </TableHead>
                    <TableHead className="px-4 h-12 border-e last:border-e-0 text-center bg-neutral-100 dark:bg-slate-700 border-t border-neutral-200 first:border-s last:border-e dark:border-slate-600">
                        Name
                    </TableHead>
                    <TableHead className="px-4 h-12 border-e last:border-e-0 text-center bg-neutral-100 dark:bg-slate-700 border-t border-neutral-200 first:border-s last:border-e dark:border-slate-600">
                        Issued Date
                    </TableHead>
                    <TableHead className="px-4 h-12 border-e last:border-e-0 text-center bg-neutral-100 dark:bg-slate-700 border-t border-neutral-200 first:border-s last:border-e dark:border-slate-600">
                        Amount
                    </TableHead>
                    <TableHead className="px-4 h-12 border-e last:border-e-0 text-center bg-neutral-100 dark:bg-slate-700 border-t border-neutral-200 first:border-s last:border-e dark:border-slate-600 rounded-tr-lg">
                        Action
                    </TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {sellingProduct.map((product, index) => {
                    const isLast = index === sellingProduct.length - 1;
                    return (
                        <TableRow key={index}>
                            {/* Item */}
                            <TableCell
                                className={`py-4 px-4 border-e last:border-e-0 border-b text-center text-primary first:border-s last:border-e border-neutral-200 dark:border-slate-600 ${isLast ? "rounded-bl-lg" : ""
                                    }`}
                            >
                                {product.id}
                            </TableCell>

                            {/* name */}
                            <TableCell className="py-4 px-4 border-e last:border-e-0 border-b text-center first:border-s last:border-e border-neutral-200 dark:border-slate-600">
                                {product.name}
                            </TableCell>

                            {/* date */}
                            <TableCell className="py-4 px-4 border-e last:border-e-0 border-b text-center first:border-s last:border-e border-neutral-200 dark:border-slate-600">
                                {product.date}
                            </TableCell>

                            {/* amount */}
                            <TableCell className="py-4 px-4 border-e last:border-e-0 border-b text-center first:border-s last:border-e border-neutral-200 dark:border-slate-600">
                                {product.amount}
                            </TableCell>

                            {/* action */}
                            <TableCell className="py-4 px-4 border-e last:border-e-0 border-b text-center text-primary first:border-s last:border-e border-neutral-200 dark:border-slate-600">
                                <Link
                                    href="#"
                                    className="inline-flex items-center gap-1 text-primary dark:text-primary hover:text-blue-400 text-sm"
                                >
                                    {product.action}
                                    <ChevronRight width={16} height={16} />
                                </Link>
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
