import Footer from "@/components/screen/home/Footer";
import Main from "@/components/screen/home/Main";
import Nav from "@/components/screen/home/Nav";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-between w-screen h-screen " >   
      <Nav/>
      <Main/>
      <Footer/>
    </div>
  );
}
