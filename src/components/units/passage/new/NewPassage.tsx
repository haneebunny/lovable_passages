"use client";

import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  page: number;
  passage: string;
};

export default function NewPassage() {
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
      <p>SaveParagraph Page</p>
      <div>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <input
            {...register("page")}
            // className=" "
            type="number"
            placeholder="쪽수"
          />

          <input {...register("passage")} placeholder="적어두고 싶은 구절" />
          <button>저장</button>
        </form>
        <button onClick={tempFunction}>rrrr</button>
      </div>
    </div>
  );
}
