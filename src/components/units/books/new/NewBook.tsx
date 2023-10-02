"use client";

import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";

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
    const response = await axios.post("/books/api", {
      data: "hi",
    });

    console.log(response);
  };

  const onSubmitForm: SubmitHandler<FormData> = (data: FormData) => {
    // event.preventDefault(); // react-hook-form 에선 필요없는 듯...

    console.log("data::", data);

    // 저장하는 api
  };

  return (
    <div>
      <p>Register Book Page</p>
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
        <button onClick={tempFunction}>rrrr</button>
      </div>
    </div>
  );
}
