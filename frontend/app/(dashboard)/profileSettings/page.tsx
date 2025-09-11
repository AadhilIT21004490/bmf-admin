"use client";
import ChangePasswordTabContent from "./components/change-password-tab-content";
import EditProfileTabContent from "./components/edit-profile-tab-content";
import DocumentSubmit from "./components/documentSubmit";
import ViewProfileSidebar from "./components/view-profile-sidebar";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetProfile } from "@/hooks/apiHooks/useGetProfile";
import BusinessDetailsForm from "./components/business-profile";
import LoadingSkeleton from "@/components/loading-skeleton";
import ErrorMessage from "@/components/error-message";

const ViewProfile = () => {
  const { profile, loading, error } = useGetProfile();

  if (loading) {
    return <LoadingSkeleton height="h-screen" text="Getting Profile..." />;
  }
  if (error) {
    return <ErrorMessage error={error} page="Profile" />;
  }
  return (
    <>
      <DashboardBreadcrumb title="View Profile" text="View Profile" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-4">
          <ViewProfileSidebar profile={profile} />
        </div>

        <div className="col-span-12 lg:col-span-8">
          <Card className="card">
            <CardContent className="px-0">
              <Tabs defaultValue="editProfile" className="gap-4">
                <TabsList className="active-gradient bg-transparent dark:bg-transparent rounded-none h-[50px] flex flex-wrap justify-start">
                  {[
                    { value: "editProfile", label: "Edit Profile" },
                    { value: "businessProfile", label: "Business Details" },
                    { value: "documentSumbit", label: "Documents" },
                    { value: "changePassword", label: "Change Password" },
                  ].map(({ value, label }) => (
                    <TabsTrigger
                      key={value}
                      value={value}
                      className="py-2 px-3 sm:py-2.5 sm:px-4 font-semibold text-xs sm:text-sm inline-flex items-center gap-2 sm:gap-3 dark:bg-transparent text-neutral-600 hover:text-primary dark:text-white dark:hover:text-blue-500 data-[state=active]:bg-gradient border-0 border-t-2 border-neutral-200 dark:border-neutral-500 data-[state=active]:border-primary dark:data-[state=active]:border-primary rounded-none data-[state=active]:shadow-none cursor-pointer whitespace-nowrap"
                    >
                      {label}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <div className="mt-8">
                  <TabsContent value="editProfile">
                    <EditProfileTabContent />
                  </TabsContent>

                  <TabsContent value="businessProfile">
                    <BusinessDetailsForm />
                  </TabsContent>

                  <TabsContent value="changePassword">
                    <ChangePasswordTabContent />
                  </TabsContent>

                  <TabsContent value="documentSumbit">
                    <DocumentSubmit />
                    {/* <div className="flex items-center justify-center gap-3">
                                        <Button type="reset" variant="outline" className="h-[48px] border border-red-600 bg-transparent hover:bg-red-600/20 text-red-600 text-base px-14 py-[11px] rounded-lg">
                                            Cancel
                                        </Button>
                                        <Button type="submit" className="h-[48px] text-base px-14 py-3 rounded-lg">
                                            Save
                                        </Button>
                                    </div> */}
                  </TabsContent>
                </div>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
export default ViewProfile;
