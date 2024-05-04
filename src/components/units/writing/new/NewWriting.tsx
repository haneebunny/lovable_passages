"use client";

import { Editor } from "@toast-ui/react-editor";
import dynamic from "next/dynamic";
import { createRef } from "react";

const ToastEditor = dynamic(() => import("@/components/common/editor/Toast"), {
  ssr: false,
});

export default function NewWriting() {
  const editorRef = createRef<Editor>();

  const onChangeContent = () => {
    const inputs = editorRef.current?.getInstance().getHTML();
  };

  return (
    <div className="w-3/4 mx-auto flex-col gap-5">
      <div>
        <p>제목</p>
        <input />
      </div>
      <div>
        <p>내용</p>
        <div className="w-full h-full">
          <ToastEditor
            defaultValue="hahaha"
            onChangeContent={onChangeContent}
            editorRef={editorRef}
          />
        </div>
      </div>
      <div></div>

      <div>
        <button>글쓰기</button>
      </div>
    </div>
  );
}
