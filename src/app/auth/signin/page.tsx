import Nav from "@/components/screen/auth/Nav-auth";
import Footer from "@/components/screen/home/Footer";

export default function SignIn(){
    return(
        <div className="flex flex-col items-center justify-between w-screen h-screen">
            <Nav/>
            <Footer/>
        </div>
    )
}