'use client'
import { Protect, SignedIn, SignedOut, UserButton, UserProfile } from "@clerk/nextjs";
import Link  from "next/link";

export default function Home() {

 


 return (
    <div>

        <SignedIn>
        <Protect>
            
        <UserButton></UserButton>
        <UserProfile></UserProfile>

        </Protect>
        </SignedIn>
        <SignedOut >
            <Link href="/sign-in">sign-in</Link>
        </SignedOut>
    </div>
 )
}