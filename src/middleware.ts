import { clerkMiddleware } from "@clerk/nextjs/server";
import { createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/forum(.*)',
]);
const isPublicRoute = createRouteMatcher([
  '/(.*)',
  '/auth/sign-in(.*)',
  '/auth/sign-up(.*)'

])
export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)){
    const token = auth().userId
    if(!token){ return auth().redirectToSignIn()}
    return console.log(token)

  } 
if(isPublicRoute(req)){
  return console.log("opa")
  
}
  

});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};