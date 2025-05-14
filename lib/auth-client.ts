import { createAuthClient } from "better-auth/react";

export const {
  signIn,
  signUp,
  useSession,
  signOut,
  getSession,
  //   updateUser,
  //   changePassword,
  //   forgetPassword,
  //   resetPassword,
} = createAuthClient({
  baseURL: "http://localhost:3000",
});
