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
  const { data: userSession, loading } = useSession();
  const setUserInfoState = useSetRecoilState(UserInfoState);

  // next-auth 로그인으로 정보 들어오면 전역 변수인 userInfoState에 저장
  useEffect(() => {
    if (userSession && userSession.user) {
      setUserInfoState(userSession.user);
    }
  }, [userSession]);

  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  max-width: 768px;
  /* background-color: skyblue; */
  margin: auto;
`;
