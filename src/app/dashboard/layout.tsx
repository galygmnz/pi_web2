"use client"

import { Sidebar } from "../components/sidebar"
import { BreadcrumbDashboard } from "@/components/Breadcrumb-dashboard"
import { AuthProvider } from "../context/AuthContext";



export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <AuthProvider>
    <div className="flex min-h-screen bg-[#008c9a]  ">
      <Sidebar />
      <main className="flex-1 p-6  space-y-10">
         
        <BreadcrumbDashboard />

        
        <div className="bg-white rounded-3xl shadow-lg p-6 min-h-[85vh]">
          {children}
        </div>
      </main>
    </div>
    </AuthProvider>
  );
}
