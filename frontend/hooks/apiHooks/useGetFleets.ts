"use client";
import { useEffect, useState } from "react";
import { Fleet } from "@/types/fleet";
export const useGetFleets = () => {
  const [fleets, setFleets] = useState<Fleet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFleets = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_FRONTEND_URL}/v/fleet`,
          {
            credentials: "include",
          }
        );
        const data = await res.json();
        setFleets(data.fleets);
      } catch (err: any) {
        setError(err.response?.data?.message || "Failed to fetch fleets");
      } finally {
        setLoading(false);
      }
    };

    fetchFleets();
  }, []);

  return { fleets, loading, error };
};
