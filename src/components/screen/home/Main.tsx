import ButtonContext from "../../atomics/ButtonContext";

export default function Main(){
    return(
        <div className="mt-28 border border-cyan-200  space-y-6 flex flex-col justify-between w-2/3">
                <h1 className="text-8xl font-extrabold ">Create playlist based on your emotions with IA </h1>
                <span className="text-2xl">Your emotions deserve a soundtrack. Create and listen on your
                Spotify.</span>
                <ButtonContext link="login" text="Create playlist" variant={"default"} size="w-1/4 h-12"></ButtonContext>
        </div>
    )
}