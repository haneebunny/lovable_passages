import mongoose, { Schema } from "mongoose";

const authorSchema = new Schema({
  name: String,
});

export const bookSchema = new Schema({
  title: String,
  authors: [authorSchema],
  publishedDate: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// 스키마를 모델로 변환하고 다른 파일에서 불러와서 사용할 수 있도록 내보내기
// 파라미터 : (스키마 이름, 스키마 객체)
