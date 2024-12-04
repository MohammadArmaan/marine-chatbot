import { getAuth } from "@clerk/nextjs/server";

export function validateUserSession(req) {
  const { userId } = getAuth(req);
  return userId;
}