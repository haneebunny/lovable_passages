import UnderlineInput from "@/components/common/input/UnderlineInput";
import styled from "@emotion/styled";

export default function NewBookForm() {
  return (
    <div className="flex flex-row gap-5 p-10">
      <div className="bg-blue-100 shadow w-56 h-80"></div>
      <div className="flex flex-col items-center min-w-[400px]">
        <span className="text-4xl font-bold tracking-widest">제목</span>
        <span className="text-xl italic tracking-tight">한 줄 소개입니다.</span>
        <div className="flex flex-col w-full gap-5 p-3">
          <InputWrapper>
            <span>작가</span>
            <UnderlineInput width="200px" />
          </InputWrapper>
          <InputWrapper>
            <span>출판사</span>
            <UnderlineInput width="200px" />
          </InputWrapper>
          <InputWrapper>
            <span>출판일</span>
            <UnderlineInput width="200px" />
          </InputWrapper>
        </div>
      </div>
    </div>
  );
}

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
