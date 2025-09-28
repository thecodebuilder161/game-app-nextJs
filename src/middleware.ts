import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "@/app/lib/sessions";

const protectedRoutes = ["/games"];
const publicRoutes = ["/login", "/"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // if (path === "/" && session?.userId) {
  //   return NextResponse.redirect(new URL("/games", req.nextUrl));
  // }
  // if (path === "/login" && session?.userId) {
  //   return NextResponse.redirect(new URL("/games", req.nextUrl));
  // }
  if (isPublicRoute && session?.userId) {
    return NextResponse.redirect(new URL("/games", req.nextUrl));
  }

  return NextResponse.next();
}