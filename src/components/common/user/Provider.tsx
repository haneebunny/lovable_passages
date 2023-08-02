"use client";

import { SessionProvider } from "next-auth/react";

export default function MySessionProvider({ children }) {
  //   const { data } = useSession();

  return <SessionProvider>{children}</SessionProvider>;
}
