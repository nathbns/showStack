import { createAuthClient } from "better-auth/react";

const getBaseUrl = () => {
  let appUrl = process.env.NEXT_PUBLIC_APP_URL;
  if (appUrl) {
    // Remove any scheme (http:// or https://)
    appUrl = appUrl.replace(/^https?:\/\//, "");
    // Remove any trailing slash
    appUrl = appUrl.replace(/\/$/, "");
    return `https://${appUrl}`;
  }
  return "http://localhost:3000";
};

export const {
  signIn,
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
