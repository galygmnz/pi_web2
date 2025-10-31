"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");
  const isLogin = pathname.startsWith("/auth/login");
  const isRegister = pathname.startsWith("/auth/register");

  // No mostrar Navbar en dashboard, login ni register
  const showNavbar = !isDashboard && !isLogin && !isRegister;

  return (
    <>
      {showNavbar && <Navbar />}
      {children}
    </>
  );
}
