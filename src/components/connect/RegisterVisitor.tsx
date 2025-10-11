"use client";

import { useEffect } from "react";
import { registerVisitor } from "@/services/connectService"; // adjust import path if needed
import { getUserGeoLocationDetails } from "@/utils/geoLocationUtils";

export default function RegisterVisitor() {
  const fetchGeoLocation = async () => {
    const response = await getUserGeoLocationDetails();
    return response;
  };

  useEffect(() => {
    const saved =
      typeof window !== "undefined" && localStorage.getItem("client_id");

    if (saved) {
      return;
    }

    // otherwise, call API
    const fetchVisitor = async () => {
      try {
        const geoLocation = await fetchGeoLocation();
        let registerPayload: any = {};
        if (geoLocation?.status) {
          const geoData: any = geoLocation?.data;
          registerPayload = {
            ip: geoData?.ip || "",
            country_name: geoData?.country_name || "",
            city: geoData?.city || "",
          };
        }
        const data: any = await registerVisitor(registerPayload);
        if (data?.success && data?.client_id) {
          localStorage.setItem("client_id", data.client_id);
          //   console.log("Registered visitor, saved client_id:", data.client_id);
        } else {
          //   console.warn("registerVisitor returned no client_id", data);
        }
      } catch (error) {
        console.error("Failed to register visitor:", error);
      }
    };

    fetchVisitor();
  }, []);

  return null;
}
