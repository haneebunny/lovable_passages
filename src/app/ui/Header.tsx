/* eslint-disable @next/next/no-img-element */
"use client";

import { userInfoState } from "@/common/store/atom";
import { signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import Sidebar from "./Sidebar";
import styled from "@emotion/styled";
import Link from "next/link";

export default function Header() {
  const userInfo = useRecoilValue(userInfoState);

  const [isSidebarOpen, setIsSiderbarOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <header className="w-full py-2 px-3 flex flex-row items-center gap-5 justify-end ">
        {userInfo ? (
          <div
            onClick={() => setIsSiderbarOpen(true)}
            className="flex flex-row items-center gap-5 cursor-pointer"
          >
            <img
              alt="userInfoImg"
              className="w-10 h-10 rounded-full object-cover"
              src={userInfo?.image || ""}
            />
            {/* userInfoImg없을 때 디폴트 이미지 넣기 */}
          </div>
        ) : (
          <button onClick={() => signIn("kakao")}>입장</button>
        )}

        <SidebarWrapper isOpen={isSidebarOpen}>
          <Sidebar
            setIsOpen={setIsSiderbarOpen}
            isOpen={isSidebarOpen}
            userInfo={userInfo}
          />
        </SidebarWrapper>
      </header>
      <div className="flex justify-center items-center h-[100px] font-santokki text-5xl tracking-widest">
        <Link href="/">책과 깡과 총</Link>
      </div>
    </div>
  );
}

const SidebarWrapper = styled.menu`
  width: fit-content;
  height: 100vh;
  position: absolute;
  z-index: 2;
  top: 0;
  right: ${(props: { isOpen: boolean }) => (props.isOpen ? "0" : "-300px")};
  opacity: ${(props: { isOpen: boolean }) => (props.isOpen ? "100" : "0")};

  /* pointer-events: none; */
  transition: all 0.2s;
`;
