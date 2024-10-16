'use client'

import Sidebar from "@/components/_dashboard/Sidebar";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = useAuth();
  const router = useRouter();

  if (!userId) {
      router.push("/");
  }

  return (
    <html lang="en">
      <body>
        <div className="flex">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
