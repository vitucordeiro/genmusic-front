
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'

export default function Sign(){
    return(
        <div>
            <SignedOut>       
                <SignInButton/>        
            </SignedOut> 

            <SignedIn>          
                <UserButton />        
            </SignedIn>
        </div>
    )
}