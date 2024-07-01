import ButtonContext from "../atomics/ButtonContext"

export default function Nav() {
    return(
            <div className="border border-cyan-100 mt-10 flex items-center justify-between w-2/3">
                <h3 className="font-extrabold text-4xl">genMusic</h3>
                <div className="p-4 space-x-8">
                    <ButtonContext variant={"ghost"} link="sigin" text="login" size="w-32"></ButtonContext>
                    <ButtonContext variant={"default"} link="singup" text="Get started" size="w-40"></ButtonContext>
                </div>
            </div>
        )
} ;
