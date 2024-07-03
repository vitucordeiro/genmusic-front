
import {
    SignOutButton,
    SignInButton,
    SignedIn,
    SignedOut,
    SignUp,
    SignIn,
    UserButton,
    
  } from '@clerk/nextjs'
export default function Sign(){
    return(
        <div>
            <SignedOut>
                <UserButton/>
                <SignIn/>
            </SignedOut>
        </div>
    )
}