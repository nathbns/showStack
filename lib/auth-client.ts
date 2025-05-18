import { createAuthClient } from "better-auth/react";

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return `https://${process.env.NEXT_PUBLIC_APP_URL}`;
  }
  return "http://localhost:3000";
};

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
  baseURL: getBaseUrl(),
});
