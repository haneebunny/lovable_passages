/* eslint-disable @next/next/no-img-element */
"use client";

import { UserInfoState } from "@/common/store/atom";
import { signIn, signOut } from "next-auth/react";
import { useRecoilValue } from "recoil";

export default function Header() {
  const userInfo = useRecoilValue(UserInfoState);

  return (
    <header className="pt-3 flex flex-row items-center gap-5 justify-end">
      <img
        alt="userInfoImg"
        className="w-10  rounded-full"
        src={userInfo?.image || ""}
      />
      <span> {userInfo?.name}</span>
      <span> {userInfo?.email}</span>
      {userInfo ? (
        <button onClick={() => signOut()}>로그아웃</button>
      ) : (
        <button onClick={() => signIn("kakao")}>로그인</button>
      )}
    </header>
  );
}
