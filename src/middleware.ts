import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
const isPublicRoute = createRouteMatcher(["/", "/sign-in", "/sign-up"])

export default clerkMiddleware((auth, req: NextRequest) => {
  const a = auth().actor;
  const {sessionClaims, sessionId, userId} = auth()
  if(!isPublicRoute){
    if(!userId && !sessionId){
      auth().protect()
    }
    return NextResponse.next();
  }
  return NextResponse.next();

   
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};