"use client";

import styled from "@emotion/styled";
import { signIn } from "next-auth/react";

export default function Main() {
  return (
    <Wrapper>
      <div>
        <div>
          <p>로그인</p>
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
