import { clerkMiddleware, createRouteMatcher, clerkClient } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { useAuth } from "@clerk/nextjs" 
import { redirect } from 'next/navigation'

import { use } from "react";
const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"])
const isFormSubmission = createRouteMatcher(["/api/form-submission(.*)"])




export default clerkMiddleware(async (auth, req: NextRequest) => {
  const provider = "oauth_spotify";
  const { sessionId, userId } = auth()
  
  const clerkResponse = await clerkClient.users.getUserOauthAccessToken(
    userId || '',
    provider
  )

  const accessToken = clerkResponse.data[0]?.token
  console.log(accessToken);
  if(!userId && !sessionId && isProtectedRoute(req)){
    return auth().redirectToSignIn();
  }
 
  return NextResponse.next()
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};