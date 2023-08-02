"use client";

import { signIn } from "next-auth/react";

export default function Main() {
  return (
    <div>
      <div>
        <div>
          <p>로그인</p>
          {/* <button onClick={() => signIn("google")}>구글 로그인</button> */}
          <button onClick={() => signIn("kakao")}>카카오 로그인</button>
        </div>
      </div>
    </div>
  );
}
