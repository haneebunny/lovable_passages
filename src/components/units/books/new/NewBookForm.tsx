import UnderlineInput from "@/components/common/input/UnderlineInput";
import styled from "@emotion/styled";
import SearchModal from "../search/SearchModal";

export default function NewBookForm() {
  return (
    <div className="flex flex-row gap-5 p-10">
      <SearchModal />
      <div className="shadow-lg w-56 h-80">
        <img
          src="https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788998441074.jpg"
          alt="책 표지"
        />
      </div>
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
