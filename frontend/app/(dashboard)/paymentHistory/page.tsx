"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ChevronRight,
  Edit,
  Eye,
  PlusCircle,
  Sheet,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import { useGetPayments } from "@/hooks/apiHooks/useGetPayments";
import LoadingSkeleton from "@/components/loading-skeleton";
import { formatDate } from "@/utils/formatDate";
import ErrorMessage from "@/components/error-message";

const PaymentHistory = () => {
  const { payments, loading, error } = useGetPayments();

  if (loading) {
    return <LoadingSkeleton height="h-screen" text="Getting Payments..." />;
  }
  if (error) {
    return <ErrorMessage error={error} page="payment history" />;
  }
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
          <button className="my-5 p-2 border rounded-md bg-blue-400 hover:bg-blue-600 inline-flex items-center">
            <Sheet size={20} className="mr-2" />
            Export to Excel
          </button>
          <Link href={"/addPayment"}>
            <button className="my-5 p-2 border rounded-md border-green-600 text-green-600 hover:bg-green-600 hover:text-white inline-flex items-center">
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
              Invoice ID
            </TableHead>
            <TableHead className="px-4 h-12 border-e last:border-e-0 text-center bg-neutral-100 dark:bg-slate-700 border-t border-neutral-200 first:border-s last:border-e dark:border-slate-600">
              Purpose
            </TableHead>
            <TableHead className="px-4 h-12 border-e last:border-e-0 text-center bg-neutral-100 dark:bg-slate-700 border-t border-neutral-200 first:border-s last:border-e dark:border-slate-600">
              Reference
            </TableHead>
            <TableHead className="px-4 h-12 border-e last:border-e-0 text-center bg-neutral-100 dark:bg-slate-700 border-t border-neutral-200 first:border-s last:border-e dark:border-slate-600">
              Date
            </TableHead>
            <TableHead className="px-4 h-12 border-e last:border-e-0 text-center bg-neutral-100 dark:bg-slate-700 border-t border-neutral-200 first:border-s last:border-e dark:border-slate-600">
              Amount (LKR)
            </TableHead>
            <TableHead className="px-4 h-12 border-e last:border-e-0 text-center bg-neutral-100 dark:bg-slate-700 border-t border-neutral-200 first:border-s last:border-e dark:border-slate-600 rounded-tr-lg">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {payments.map((payment, index) => {
            const isLast = index === payments.length - 1;
            return (
              <TableRow key={index}>
                {/* Item */}
                <TableCell
                  className={`py-4 px-4 border-e last:border-e-0 border-b text-center text-primary first:border-s last:border-e border-neutral-200 dark:border-slate-600 ${
                    isLast ? "rounded-bl-lg" : ""
                  }`}
                >
                  <span className="line-height-1 font-medium text-secondary-light text-sm flex items-center gap-2.5">
                    <span
                      className={`w-2 h-2 rounded-full animate-pulse ${
                        payment.status === "Approved"
                          ? "bg-green-500"
                          : payment.status === "Rejected"
                          ? "bg-red-500"
                          : "bg-yellow-500"
                      }`}
                      title={payment.status}
                    ></span>

                    {payment.paymentId}
                  </span>
                </TableCell>

                {/* name */}
                <TableCell className="py-4 px-4 border-e last:border-e-0 border-b text-center first:border-s last:border-e border-neutral-200 dark:border-slate-600">
                  {payment.paymentType}
                </TableCell>

                {/* name */}
                <TableCell className="py-4 px-4 border-e last:border-e-0 border-b text-center first:border-s last:border-e border-neutral-200 dark:border-slate-600">
                  {payment.reference}
                </TableCell>

                {/* date */}
                <TableCell className="py-4 px-4 border-e last:border-e-0 border-b text-center first:border-s last:border-e border-neutral-200 dark:border-slate-600">
                  {formatDate(payment.paymentDate)}
                </TableCell>

                {/* amount */}
                <TableCell className="py-4 px-4 border-e last:border-e-0 border-b text-center first:border-s last:border-e border-neutral-200 dark:border-slate-600">
                  Rs. {payment.amount.toFixed(2)}
                </TableCell>

                {/* action */}
                {/* action */}
                <TableCell className="py-4 px-4 border-e last:border-e-0 border-b text-center text-primary first:border-s last:border-e border-neutral-200 dark:border-slate-600">
                  <div className="flex justify-center gap-2">
                    {/* View Button */}
                    <Link href="/view/123">
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

export default PaymentHistory;
