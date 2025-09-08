"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { ChevronRight, PlusCircle, Sheet } from "lucide-react";
import Link from "next/link";

const sellingProduct = [
    {
        id: "#526534",
        name: "Kathryn Murphy",
        reference: "Monthly Fee",
        date: "25 Jan 2024",
        amount: "$200.00",
        action: "View More",
    },
    {
        id: "#696589",
        name: "Annette Black",
        reference: "Monthly Fee",
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
        reference: "Monthly Fee",
        date: "10 Feb 2024",
        amount: "$200.00",
        action: "View More",
    },
    {
        id: "#105986",
        name: "Leslie Alexander",
        reference: "Monthly Fee",
        date: "15 Mar 2024",
        amount: "$200.00",
        action: "View More",
    },
];

const PaymentHistory = () => {
    return (
        <>
        <h6>Payment History</h6>
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
            <Link href={"/addPayment"}>
                <button className="my-5 p-2 border rounded-md border-green-600 text-green-600 hover:bg-green-800 hover:text-white inline-flex items-center">
                <PlusCircle className="mr-2" />
                Make New Payment
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
                        Description
                    </TableHead>
                    <TableHead className="px-4 h-12 border-e last:border-e-0 text-center bg-neutral-100 dark:bg-slate-700 border-t border-neutral-200 first:border-s last:border-e dark:border-slate-600">
                        Reference
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
                            
                            {/* name */}
                            <TableCell className="py-4 px-4 border-e last:border-e-0 border-b text-center first:border-s last:border-e border-neutral-200 dark:border-slate-600">
                                {product.reference}
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

export default PaymentHistory;
