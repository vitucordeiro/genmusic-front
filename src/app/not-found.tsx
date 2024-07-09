import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

export default function NotFound() {
  return (
  <div>
    <SignedIn>
        <div className='flex flex-'>
            <h1>The page wasnt not found</h1>
        </div>


    </SignedIn>
    <SignedOut>
    <h1>The page wasnt not found</h1>

    </SignedOut>
  </div>
  )
}
