import Nav from '@/components/screen/404/Nav-404'
import Footer from '@/components/screen/home/Footer'
import { Button } from '@/components/ui/button'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import Link from 'next/link'
import { MoveLeft} from 'lucide-react'

export default function NotFound() {
  return (
  <div>
    <SignedIn>
        <div className='flex flex-col justify-between items-center h-screen w-screen'>  
          <Nav isLogged={true}/>
          <div className='flex flex-col items-center space-y-5'>
            <h1 className='font-black from-neutral-800 text-7xl'>Ooops!</h1>
            <span className='text-3xl from-neutral-600'>We couln&apos;t find the page you were looking for</span>
            <Link href={'/'}>
              <Button 
                className='flex items-center px-4 py-2 rounded text-base font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-sm' 
                variant={'link'}>
                <MoveLeft className="mr-2"/> go to home
              </Button>
            </Link>
          </div>
          <Footer/>
        </div>
    </SignedIn>
    <SignedOut>
      <div className='flex flex-col justify-between items-center h-screen w-screen'>
        <Nav isLogged={false}/>
        <div className='flex flex-col items-center space-y-5'>
            <h1 className='font-black from-neutral-800 text-7xl'>Ooops!</h1>
            <span className='text-3xl from-neutral-600'>We couln&apos;t find the page you were looking for</span>
            <Link href={'/'}>
              <Button 
                className='flex items-center px-4 py-2 rounded text-base font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-sm' 
                variant={'link'}>
                <MoveLeft className="mr-2"/> go to home
              </Button>
            </Link>
          </div>
          <Footer/>
      </div>
    </SignedOut>
  </div>
  )
}
