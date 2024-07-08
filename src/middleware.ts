import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
const isOnboardingRoute = createRouteMatcher(["/dashboard"])
const isPublicRoute = createRouteMatcher(["/", "/sign-in", "/sign-up"])
import {AuthObject} from '@clerk/backend/internal'
import { useAuth } from "@clerk/nextjs";
export default clerkMiddleware((auth, req: NextRequest) => {
  const a = auth().actor;
  //console.log("info:", a)
  const {sessionClaims, sessionId, userId} = auth()
  console.log( sessionId)
  if(!isPublicRoute){
    if(!userId && !sessionId){
      console.log("!use and !sessionId")
      auth().protect()
    }
    console.log("com acesso ")
    return NextResponse.next();
  }
  return NextResponse.next();

   
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};