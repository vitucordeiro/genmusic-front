'use client'
import { useAuth, useClerk, useUser } from "@clerk/nextjs";

export default function Home() {
 const { userId, sessionId } = useAuth();
 const { isSignedIn, user } = useUser();
 console.log(userId, sessionId, isSignedIn, user)
 const clerk = useClerk();
 
 console.log("Clerk object:", clerk);
 console.log("Is loaded:", clerk.loaded);
 console.log("User:", clerk.user);

 return (
 <p>Home Page</p>
 )
}