import mongoose, { Schema } from "mongoose";

const authorSchema = new Schema({
  name: String,
});

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    authors: [authorSchema],
    publishedDate: Date,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// 스키마를 모델로 변환하고 내보내기
const Book = mongoose.models?.Book || mongoose.model("Book", bookSchema);
export default Book;
