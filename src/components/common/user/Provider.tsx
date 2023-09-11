"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";
import { RecoilRoot } from "recoil";

export default function MySessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <RecoilRoot>{children}</RecoilRoot>
    </SessionProvider>
  );
}
