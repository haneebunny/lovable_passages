/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { useSession } from "next-auth/react";
import { useSetRecoilState } from "recoil";
import { UserInfoState } from "@/common/store/atom";

export default function GlobalSetting({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();
  const setUserInfoState = useSetRecoilState(UserInfoState);

  console.log("user", session);
  // next-auth 로그인으로 정보 들어오면 전역 변수인 userInfoState에 저장
  useEffect(() => {
    if (session && session.user) {
      setUserInfoState(session.user);
    }
  }, [session]);

  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  max-width: 768px;
  min-height: 100vh;
  background-color: #aabeaa;
  color: #1e1d1f;
  margin: auto;
  position: relative;
  overflow-x: hidden;

  // 전체 폰트
  font-family: "MaruBuri-Regular", serif;
  /* overflow-y: auto; */
`;
