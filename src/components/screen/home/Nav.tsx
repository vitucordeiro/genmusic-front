import ButtonContext from "../../atomics/ButtonContext"

export default function Nav() {
    return(
            <div className="border border-cyan-100 mt-10 flex flex-col items-center md:flex-row md:flex md:items-center md:justify-between justify-center w-2/3">
                <h3 className="font-extrabold text-4xl">genMusic</h3>
                <div className="border border-cyan-700 flex flex-col items-center md:justify-center space-y-5 md:space-y-0 md:space-x-10 md:flex md:flex-row p-4 ">
                    <ButtonContext variant={"ghost"} link="sigin" text="login" size="w-32"></ButtonContext>
                    <ButtonContext variant={"default"} link="singup" text="Get started" size="w-40"></ButtonContext>
                </div>
            </div>
        )
} ;
