export { default } from "next-auth/middleware";


export const config = {
    matcher: ["/((?!api/uploadthing).*)"], // Allow /api/uploadthing to bypass auth
  };