import styled from "@emotion/styled";
import { useState } from "react";

type InputContainerProps = {
  width?: string;
  isFocused: boolean;
};

export default function UnderlineInput(props: { width?: string }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <InputContainer width={props.width} isFocused={isFocused}>
      <input
        type="text"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </InputContainer>
  );
}

const InputContainer = styled.div`
  position: relative;
  display: inline-block;
  width: ${(props) => props?.width || "100%"};
  height: fit-content;
  input {
    padding: 3px;
    background-color: #a6c27d1e;
    border: 1px solid #a6c27d7b;
    border-radius: 3px;
    width: 100%;
    box-sizing: border-box;

    &:focus {
      outline: none;
    }
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 1px;
    width: ${(props: InputContainerProps) =>
      props.isFocused ? "98%" : "0%"}; // 포커스 상태에 따라 너비 조정
    height: 1px;
    background-color: green;
    transition: width 0.3s ease;
  }
`;
