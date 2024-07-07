import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
const isOnboardingRoute = createRouteMatcher(["/dashboard"])
const isPublicRoute = createRouteMatcher(["/public-route-example"])

export default clerkMiddleware((auth, req: NextRequest) => {
  const {sessionClaims, sessionId} = auth()
  const user = auth().userId;
  console.log(sessionClaims, sessionId, user)
  return NextResponse.next();
   
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};