"use client"
import { Button } from "../ui/button"
import Link from 'next/link'
import ButtonContext from "../atomics/ButtonContext"


export default function Nav() {
    return(
        <div className="flex  flex-col items-center justify-between w-screen h-screen ">
            <div className="border border-cyan-100 mt-10 flex items-center justify-between w-2/3">
                <h3 className="font-extrabold text-lg">genMusic</h3>
                <div className="p-4">
                    <ButtonContext variant={"ghost"} link="sigin" text="login"></ButtonContext>
                    <ButtonContext variant={"default"} link="singup" text="Get started"></ButtonContext>
                </div>
            </div>




        </div>)
} ;
