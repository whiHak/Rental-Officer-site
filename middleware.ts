export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/((?!api/uploadthing|auth/signIn).*)", // Allow /api/uploadthing and /auth/signin to bypass auth
  ],
};