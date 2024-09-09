import Nav from "@/components/screen/auth/Nav-auth";
import Footer from "@/components/screen/home/Footer";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-between w-screen h-screen  ">
      <Nav/>
      <SignIn afterSignOutUrl={'/dashboard'}></SignIn>
      <Footer/>
    </div>
  );
}