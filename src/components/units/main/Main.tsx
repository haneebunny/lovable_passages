/* eslint-disable @next/next/no-img-element */
"use client";

import styled from "@emotion/styled";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function Main() {
  return (
    <Wrapper>
      <div>
        <p className="text-[7rem]">공사 중 ~2023.10.10 </p>
        <p>* 메크리스리마스</p>
        <p>* 공사 기간은 메이플스토리 점검처럼 무한대로 늘어날 수 있습니다.</p>

        <Link href="https://github.com/haneebunny">
          <p> * https://github.com/haneebunny</p>
        </Link>

        <img src="/img/gong.jpeg" alt="메크리스리마스" />
        <ul>
          아마도...
          <li> - react, Next.js(v.13)</li>
          <li> - mongoDB</li>
          <li> - vercel AWS </li>
        </ul>
        <div>
          {/* <button onClick={() => signIn("google")}>구글 로그인</button> */}
          <KakaoLoginButton onClick={() => signIn("kakao")}>
            <KakaoSymbol src="/img/auth/kakaoSymbol.png" alt="kakaoSymbol" />
            <span>카카오 로그인</span>
          </KakaoLoginButton>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  // 별을 쏘아올려
`;
const KakaoLoginButton = styled.button`
  width: 200px;
  height: 50px;
  padding: 10px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;

  // kakao 공식
  background-color: #fee500;
  border-radius: 12px;

  span {
    color: black;
    opacity: 0.85;
  }
`;

const KakaoSymbol = styled.img`
  width: 15px;
  height: 15px;
`;
