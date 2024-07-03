"use client"
import { Protect, SignedIn, SignedOut } from "@clerk/nextjs"
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { SignOutButton } from "@clerk/nextjs";
export default function Dashboard(){
    const {isLoaded, userId, sessionId, getToken  } = useAuth()
    if(!isLoaded || !userId){return null;}

    return(
        <>
        <Protect>
            <SignedIn>
                    <div className="flex flex-row justify-between items-center h-screen w-screen">
                        <div>
                            <p>session ID: {sessionId}</p>
                            <p>user ID: {userId}</p>
                        </div>
                        <div>
                            
                                <Button size="icon">
                                    <ChevronLeft className="h-4 w-4"> <SignOutButton/></ChevronLeft>
                                </Button>
                            
                        </div>
                    </div>

            </SignedIn>
        </Protect>
        </>
    )
}