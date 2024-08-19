import { clerkMiddleware, createRouteMatcher, clerkClient } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { useAuth } from "@clerk/nextjs" 
import { getAccessTokenSpotify } from "@/hooks/useSpotifyToken"
const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"])

const isPublicRoute = createRouteMatcher(["/sign-in(.*), /sign-up(.*), /(.*), "])

export default clerkMiddleware((auth, req) => {
  // Temporarily disable authentication logic
  const {sessionClaims, sessionId, userId} = auth()
  if(!isPublicRoute){
     auth().protect()
   }
  return NextResponse.next();});


export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};




