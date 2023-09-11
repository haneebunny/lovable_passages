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
        className="w-10 h-10 rounded-full object-cover"
        src={userInfo?.image || ""}
      />
      {/* userInfoImg없을 때 디폴트 이미지 넣기 */}
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
