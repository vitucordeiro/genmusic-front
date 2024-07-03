import { clerkMiddleware } from "@clerk/nextjs/server";
import { createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from 'next/server';
const isPrivateRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/forum(.*)',
]);
const isPublicRoute = createRouteMatcher([
  '/(.*)',
  '/auth/sign-in(.*)',
  '/auth/sign-up(.*)'

])
export default clerkMiddleware((auth, req) => {
  if(isPrivateRoute(req)){
    if(!auth().sessionId && !auth().sessionId){
      console.log("is not auth")
      return auth().redirectToSignIn()
    }
    console.log("private router") 
    return NextResponse.redirect('/')
  }
  if(isPublicRoute(req)){
    console.log("public router")
    return NextResponse.next();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};