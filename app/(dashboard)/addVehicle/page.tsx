import ChangePasswordTabContent from "@/app/(dashboard)/addVehicle/components/change-password-tab-content";
import AddVehicleForm from "@/app/(dashboard)/addVehicle/components/edit-profile-tab-content";
import NotificationPasswordTabContent from "@/app/(dashboard)/addVehicle/components/notification-password-tab-content";
import ViewProfileSidebar from "@/app/(dashboard)/addVehicle/components/view-profile-sidebar";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Metadata } from "next";

const metadata: Metadata = {
    title: "View Profile & User Details | WowDash Admin Dashboard",
    description:
        "Access detailed user profiles and personal information in the WowDash Admin Dashboard built with Next.js and Tailwind CSS.",
};

const ViewProfile = () => {
    return (
        <>
            <DashboardBreadcrumb title="Add Vehicle" text="Add Vehicle" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                

                <div className="col-span-12 lg:col-span-8">
                    <Card className="card">
                        <CardContent className="px-0">
                            <Tabs defaultValue="vehicleDetails" className="gap-4">
                                <TabsList className='active-gradient bg-transparent dark:bg-transparent rounded-none h-[50px]'>
                                    <TabsTrigger value="vehicleDetails" className='py-2.5 px-4 font-semibold text-sm inline-flex items-center gap-3 dark:bg-transparent text-neutral-600 hover:text-primary dark:text-white dark:hover:text-blue-500 data-[state=active]:bg-gradient border-0 border-t-2 border-neutral-200 dark:border-neutral-500 data-[state=active]:border-primary dark:data-[state=active]:border-primary rounded-[0] data-[state=active]:shadow-none cursor-pointer'>
                                        Vehicle Details
                                    </TabsTrigger>
                                    <TabsTrigger value="priceDetails" className='py-2.5 px-4 font-semibold text-sm inline-flex items-center gap-3 dark:bg-transparent text-neutral-600 hover:text-primary dark:text-white dark:hover:text-blue-500 data-[state=active]:bg-gradient border-0 border-t-2 border-neutral-200 dark:border-neutral-500 data-[state=active]:border-primary dark:data-[state=active]:border-primary rounded-[0] data-[state=active]:shadow-none cursor-pointer'>
                                        Price Details
                                    </TabsTrigger>
                                    <TabsTrigger value="imageUpload" className='py-2.5 px-4 font-semibold text-sm inline-flex items-center gap-3 dark:bg-transparent text-neutral-600 hover:text-primary dark:text-white dark:hover:text-blue-500 data-[state=active]:bg-gradient border-0 border-t-2 border-neutral-200 dark:border-neutral-500 data-[state=active]:border-primary dark:data-[state=active]:border-primary rounded-[0] data-[state=active]:shadow-none cursor-pointer'>
                                        Image Upload
                                    </TabsTrigger>
                                </TabsList>

                                <TabsContent value="vehicleDetails">
                                    <AddVehicleForm />
                                </TabsContent>
                                <TabsContent value="priceDetails">
                                    <NotificationPasswordTabContent />
                                </TabsContent>
                                <TabsContent value="imageUpload">
                                    <ChangePasswordTabContent />
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>

                </div>
            </div>

        </>
    );
};
export default ViewProfile;
