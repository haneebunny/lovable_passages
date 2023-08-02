"use client";

import React from "react";
import styled from "@emotion/styled";
import { useSession } from "next-auth/react";

export default function GlobalSetting({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = useSession();
  console.log(data);

  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  max-width: 768px;
  background-color: skyblue;
  margin: auto;
`;
