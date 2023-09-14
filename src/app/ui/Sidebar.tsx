/* eslint-disable @next/next/no-img-element */

import { userInfo } from "@/common/store/atom";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { signIn, signOut } from "next-auth/react";

interface ISideBarProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  userInfo: userInfo;
}

export default function Sidebar({
  setIsOpen,
  isOpen,
  userInfo,
}: ISideBarProps) {
  const siderbarRef = useRef<HTMLElement>(null);

  const onClickOutside = (event: Event) => {
    if (!siderbarRef.current?.contains(event.target as Node)) {
      return setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", onClickOutside, true);
    return () => {
      document.removeEventListener("click", onClickOutside, true);
    };
  });

  return (
    <menu
      ref={siderbarRef}
      className="bg-white bg-opacity-90 h-full p-5 flex-col"
    >
      {/* 프로필 부분 */}
      <div className="w-full m-auto">
        {/* 프로필 이미지 */}
        <img
          alt="userInfoImg"
          className="w-[10rem] h-[10rem] rounded-full object-cover m-auto"
          src={userInfo?.image || "/img/default/no-user.png"}
        />
        {/* 프로필 정보 */}
        {/* 정해지면 map 돌려서 보여주기 */}
        <div className="p-5 bg-yellow-50">
          <div className="bg-red-50 flex gap-7 items-center mb-3">
            <p className="font-bold text-xl">이름</p>
            <p>{userInfo?.name}</p>
          </div>
          <div className="bg-red-50 flex gap-3 items-center">
            <p className="font-bold text-xl">이메일</p>
            <p>{userInfo?.email}</p>
          </div>
        </div>
      </div>
      {/* 메뉴 부분 */}
      <div className="w-full text-center">
        {userInfo ? (
          <button className="text-2xl" onClick={() => signOut()}>
            로그아웃
          </button>
        ) : (
          <button className="text-2xl" onClick={() => signIn("kakao")}>
            로그인
          </button>
        )}
      </div>
      <a>랄랄라</a>
      <a>랄랄라</a>
      <a>랄랄라</a>
      <a>랄랄라</a>
      <a>랄랄라</a>
    </menu>
  );
}
