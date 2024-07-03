import { clerkMiddleware } from "@clerk/nextjs/server";
import { createRouteMatcher } from "@clerk/nextjs/server";


const isPrivateRoute = createRouteMatcher([
  '/dashboard(.*)',
]);
const isPublicRoute = createRouteMatcher([
  '/(.*)',
  '/auth/sign-in(.*)',
  '/auth/sign-up(.*)'

])
export default clerkMiddleware((auth, req) => {
  return console.log(auth().getToken())
},{ debug:true});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};