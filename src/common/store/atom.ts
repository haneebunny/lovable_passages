import { IBook } from "@/components/units/books/bookTypes";
import { atom } from "recoil";

export type userInfo = {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
} | null;

export const userInfoState = atom<userInfo>({
  key: "userInfoState",
  default: null,
});

export const selectedBooksState = atom<IBook[]>({
  key: "selectedBooksState",
  default: [],
});
