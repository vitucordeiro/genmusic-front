
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
                <UserButton>user button</UserButton>
                <SignIn/>
            </SignedOut>
        </div>
    )
}