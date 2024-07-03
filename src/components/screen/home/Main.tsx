import ButtonContext from "../../atomics/ButtonContext";

export default function Main(){
    return(
        <div className="space-y-1 md:space-y-5 lg:space-y-10 flex flex-col justify-between w-2/3">
                <h1 className="text-2xl md:text-6xl lg:text-8xl font-extrabold ">Create playlist based on your emotions with IA </h1>
                <span className="text-lg">Your emotions deserve a soundtrack. Create and listen on your
                Spotify.</span>
                <ButtonContext link="auth/sign-in" text="Create playlist" variant={"default"} size="md:w-1/4 md:min-w-1/4 h-12 w-full"></ButtonContext>
        </div>
    )
}