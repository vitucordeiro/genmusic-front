import ButtonContext from "../../atomics/ButtonContext"

export default function Nav() {
    return(
            <div className="mt-10 flex flex-col items-center md:flex-row md:flex md:items-center md:justify-between justify-center w-2/3">
                <h3 className="font-extrabold text-4xl">genMusic</h3>
                <div className="flex flex-col items-center space-y-5 md:space-y-0 md:space-x-10 md:flex md:flex-row p-4 ">
                    <ButtonContext variant={"ghost"} link="auth/signin" text="login" size="w-32"></ButtonContext>
                    <ButtonContext variant={"default"} link="auth/signup" text="Get started" size="w-40"></ButtonContext>
                </div>
            </div>
        )
} ;
