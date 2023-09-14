import { atom } from "recoil";

export type userInfo = {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
} | null;

export const UserInfoState = atom<userInfo>({
  key: "UserInfoState",
  default: null,
});
