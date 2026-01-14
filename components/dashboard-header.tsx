"use client";

import React from "react";

export default function DashboardHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <header className="flex items-center justify-start gap-5 p-2 border-b w-full">
      <h1 className="text-2xl">John Doe&apos;s Org</h1>
      {children}
    </header>
  );
}
