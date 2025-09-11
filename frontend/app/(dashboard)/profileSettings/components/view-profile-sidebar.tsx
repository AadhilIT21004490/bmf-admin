import { formatDate } from "@/utils/formatDate";
import React from "react";

const ViewProfileSidebar = ({ profile }: any) => {
  return (
    <div className="user-grid-card relative border border-slate-200 dark:border-slate-600 rounded-2xl overflow-hidden bg-white dark:bg-[#273142] h-full">
      <img
        src="assets/images/user-grid/user-grid-bg1.png"
        alt=""
        className="w-full object-fit-cover"
      />
      <div className="pb-6 ms-6 mb-6 me-6 -mt-[100px]">
        <div className="text-center border-b border-slate-200 dark:border-slate-600">
          <img
            src="assets/images/user-grid/user-grid-img14.png"
            alt=""
            className="border br-white border-width-2-px w-200-px h-[200px] rounded-full object-fit-cover mx-auto"
          />
          <h6 className="mb-0 mt-4">{profile?.businessName}</h6>
          <span className="text-secondary-light mb-4">{profile?.email}</span>
        </div>
        <div className="mt-6">
          <h6 className="text-xl mb-4">Personal Info</h6>
          <ul>
            <li className="flex items-center gap-1 mb-3">
              <span className="w-[30%] text-base font-semibold text-neutral-600 dark:text-neutral-200">
                Full Name
              </span>
              <span className="w-[70%] text-secondary-light font-medium">
                : {profile?.fullName}
              </span>
            </li>
            <li className="flex items-center gap-1 mb-3">
              <span className="w-[30%] text-base font-semibold text-neutral-600 dark:text-neutral-200">
                {" "}
                Vendor Id
              </span>
              <span className="w-[70%] text-secondary-light font-medium">
                : {profile?.vendorId}
              </span>
            </li>
            <li className="flex items-center gap-1 mb-3">
              <span className="w-[30%] text-base font-semibold text-neutral-600 dark:text-neutral-200">
                {" "}
                Phone Number
              </span>
              <span className="w-[70%] text-secondary-light font-medium">
                : {profile?.phone}
              </span>
            </li>
            <li className="flex items-center gap-1 mb-3">
              <span className="w-[30%] text-base font-semibold text-neutral-600 dark:text-neutral-200">
                {" "}
                Emergency Number
              </span>
              <span className="w-[70%] text-secondary-light font-medium">
                : {profile?.emergencyContact}
              </span>
            </li>
            {/* <li className="flex items-center gap-1 mb-3">
              <span className="w-[30%] text-base font-semibold text-neutral-600 dark:text-neutral-200">
                {" "}
                Location
              </span>
              <span className="w-[70%] text-secondary-light font-medium">
                : Akkaraipattu
              </span>
            </li> */}
            <li className="flex items-center gap-1 mb-3">
              <span className="w-[30%] text-base font-semibold text-neutral-600 dark:text-neutral-200">
                {" "}
                NIC
              </span>
              <span className="w-[70%] text-secondary-light font-medium">
                : {profile?.nicNumber}
              </span>
            </li>
            {/* <li className="flex items-center gap-1 mb-3">
              <span className="w-[30%] text-base font-semibold text-neutral-600 dark:text-neutral-200">
                {" "}
                Business Type
              </span>
              <span className="w-[70%] text-secondary-light font-medium">
                : {profile.businessType}
              </span>
            </li> */}
            <li className="flex items-center gap-1 mb-3">
              <span className="w-[30%] text-base font-semibold text-neutral-600 dark:text-neutral-200">
                {" "}
                Languages
              </span>
              <span className="w-[70%] text-secondary-light font-medium">
                :{" "}
                {Object.keys(profile?.languages || {})
                  .filter((lang) => profile?.languages[lang])
                  .join(", ")}
              </span>
            </li>
            <li className="flex items-center gap-1 mb-3">
              <span className="w-[30%] text-base font-semibold text-neutral-600 dark:text-neutral-200">
                {" "}
                Partner Since
              </span>
              <span className="w-[70%] text-secondary-light font-medium">
                : {formatDate(profile?.approvedOn)}
              </span>
            </li>
            {/* <li className="flex items-center gap-1 mb-3">
              <span className="w-[30%] text-base font-semibold text-neutral-600 dark:text-neutral-200">
                {" "}
                Fleet Count
              </span>
              <span className="w-[70%] text-secondary-light font-medium">
                : {profile?.fleets.length}
              </span>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ViewProfileSidebar;
