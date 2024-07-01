import Main from "@/components/screen/Main";
import Nav from "@/components/screen/Nav";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-between w-screen " >   
      <Nav/>
      <Main/>
    </div>
  );
}
