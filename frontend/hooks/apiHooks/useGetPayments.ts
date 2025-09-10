"use client";
import { useEffect, useState } from "react";
import { payment } from "@/types/payment";

export const useGetPayments = () => {
  const [payments, setPayments] = useState<payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_FRONTEND_URL}/v/payment`,
          {
            credentials: "include",
          }
        );
        const data = await res.json();
        setPayments(data.payments);
      } catch (err: any) {
        setError(err.message || "Failed to fetch payments");
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  return { payments, loading, error };
};
