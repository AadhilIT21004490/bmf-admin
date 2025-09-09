import React from 'react';

const ViewProfileSidebar = () => {
    return (
        <div className="user-grid-card relative border border-slate-200 dark:border-slate-600 rounded-2xl overflow-hidden bg-white dark:bg-[#273142] h-full">
            <img src="assets/images/user-grid/user-grid-bg1.png" alt="" className="w-full object-fit-cover" />
            <div className="pb-6 ms-6 mb-6 me-6 -mt-[100px]">
                <div className="text-center border-b border-slate-200 dark:border-slate-600">
                    <img src="assets/images/user-grid/user-grid-img14.png" alt="" className="border br-white border-width-2-px w-200-px h-[200px] rounded-full object-fit-cover mx-auto" />
                    <h6 className="mb-0 mt-4">Dilka Rent A Car</h6>
                    <span className="text-secondary-light mb-4">dilka@gmail.com</span>
                </div>
                <div className="mt-6">
                    <h6 className="text-xl mb-4">Personal Info</h6>
                    <ul>
                        <li className="flex items-center gap-1 mb-3">
                            <span className="w-[30%] text-base font-semibold text-neutral-600 dark:text-neutral-200">Full Name</span>
                            <span className="w-[70%] text-secondary-light font-medium">: Dilka Ameen</span>
                        </li>
                        <li className="flex items-center gap-1 mb-3">
                            <span className="w-[30%] text-base font-semibold text-neutral-600 dark:text-neutral-200"> Email</span>
                            <span className="w-[70%] text-secondary-light font-medium">: dilka@gmail.com</span>
                        </li>
                        <li className="flex items-center gap-1 mb-3">
                            <span className="w-[30%] text-base font-semibold text-neutral-600 dark:text-neutral-200"> Phone Number</span>
                            <span className="w-[70%] text-secondary-light font-medium">: +9475 334 9575</span>
                        </li>
                        <li className="flex items-center gap-1 mb-3">
                            <span className="w-[30%] text-base font-semibold text-neutral-600 dark:text-neutral-200"> Location</span>
                            <span className="w-[70%] text-secondary-light font-medium">: Akkaraipattu</span>
                        </li>
                        <li className="flex items-center gap-1 mb-3">
                            <span className="w-[30%] text-base font-semibold text-neutral-600 dark:text-neutral-200"> NIC</span>
                            <span className="w-[70%] text-secondary-light font-medium">: 852073766V</span>
                        </li>
                        <li className="flex items-center gap-1 mb-3">
                            <span className="w-[30%] text-base font-semibold text-neutral-600 dark:text-neutral-200"> Business Type</span>
                            <span className="w-[70%] text-secondary-light font-medium">: Registered Company</span>
                        </li>
                        <li className="flex items-center gap-1 mb-3">
                            <span className="w-[30%] text-base font-semibold text-neutral-600 dark:text-neutral-200"> Joined Date</span>
                            <span className="w-[70%] text-secondary-light font-medium">: 15/05/2025</span>
                        </li>
                        <li className="flex items-center gap-1 mb-3">
                            <span className="w-[30%] text-base font-semibold text-neutral-600 dark:text-neutral-200"> Fleet Count</span>
                            <span className="w-[70%] text-secondary-light font-medium">: 06</span>
                        </li>
                        <li className="flex items-center gap-1">
                            <span className="w-[30%] text-base font-semibold text-neutral-600 dark:text-neutral-200"> Bio</span>
                            <span className="w-[70%] text-secondary-light font-medium">: One of the reasonable rent a car service in Eastern Province, DILKA RENT A CAR</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ViewProfileSidebar;