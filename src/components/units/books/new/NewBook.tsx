"use client";
import axios from "axios";
import styled from "@emotion/styled";
import { useForm, SubmitHandler } from "react-hook-form";
import NewBookForm from "./NewBookForm";

type FormData = {
  name: string;
  writer: string;
};

export default function NewBook() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const tempFunction = async () => {
    console.log("함수");
    const response = await axios.get("/api/books/search", {
      params: {
        query: "모순",
      },
    });

    console.log(response?.data?.data?.documents);
  };

  const onSubmitForm: SubmitHandler<FormData> = (data: FormData) => {
    // event.preventDefault(); // react-hook-form 에선 필요없는 듯...

    console.log("data::", data);

    // 저장하는 api
  };

  return (
    <div className="flex flex-col items-center">
      <NewBookForm />
      <div>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <input
            {...register("name")}
            // className=" "
            placeholder="책 이름"
          />

          <input {...register("writer")} placeholder="저자" />
          <button>저장</button>
        </form>
        <Button>
          <span>저장</span>
        </Button>
        <button onClick={tempFunction}>rrrr</button>
      </div>
      <AddButton
        onClick={() => {
          tempFunction();
        }}
      >
        +
      </AddButton>
    </div>
  );
}

const AddButton = styled.button`
  width: 50%;
  height: 50px;
  border-radius: 8px;
  background-color: green;
`;

const Button = styled.button`
  width: 150px;
  background-color: #0b6143;
  line-height: 42px;
  padding: 0;
  border: none;
  position: relative;
  height: 42px; // 버튼의 높이를 지정해주세요
  border-radius: 8px;
  &:before,
  &:after {
    position: absolute;
    content: "";
    right: 0;
    bottom: 0;
    background: #ffffff;
    transition: all 0.3s ease;
  }

  &:before {
    height: 0%;
    width: 2px;
  }

  &:after {
    width: 0%;
    height: 2px;
  }

  &:hover:before {
    height: 100%;
  }

  &:hover:after {
    width: 100%;
  }

  &:hover {
    background: transparent;
    opacity: 0.8;
    /* background-image: linear-gradient(315deg, #3a9260 0%, #199b83 74%); */
  }

  span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    color: white;
    &:before,
    &:after {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      background: white;
      transition: all 0.3s ease;
    }

    &:before {
      width: 2px;
      height: 0%;
    }

    &:after {
      height: 2px;
      width: 0%;
    }

    &:hover:before {
      height: 100%;
    }

    &:hover:after {
      width: 100%;
    }

    &:hover {
      color: #09764b;
    }
  }
`;
