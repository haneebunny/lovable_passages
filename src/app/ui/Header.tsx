/* eslint-disable @next/next/no-img-element */
"use client";

import { UserInfoState } from "@/common/store/atom";
import { signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import Sidebar from "./Sidebar";

export default function Header() {
  const userInfo = useRecoilValue(UserInfoState);

  const [isSidebarOpen, setIsSiderbarOpen] = useState(false);

  return (
    <header className="w-full relative pt-3 px-3 flex flex-row items-center gap-5 justify-end">
      {userInfo && (
        <div className="flex flex-row items-center gap-5">
          <img
            alt="userInfoImg"
            className="w-10 h-10 rounded-full object-cover"
            src={userInfo?.image || ""}
          />
          {/* userInfoImg없을 때 디폴트 이미지 넣기 */}
          {/* <span> {userInfo?.name}</span>
          <span> {userInfo?.email}</span> */}
        </div>
      )}

      {userInfo ? (
        <button className="text-sm" onClick={() => signOut()}>
          로그아웃
        </button>
      ) : (
        <button onClick={() => signIn("kakao")}>로그인</button>
      )}
      <header className="w-3/4 h-screen fixed top-0 right-0 bg-blue-500">
        <Sidebar isOpen={isSidebarOpen} />
      </header>
    </header>
  );
}
