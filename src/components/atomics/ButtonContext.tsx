import { Button } from "../ui/button"
import Link from "next/link"
import {ButtonVariant} from "@/lib/ButtonContext.types"



export default function ButtonContext ({link, variant, text}:{link:string, variant:ButtonVariant, text:string}){
    return(
        <Button variant={ variant} asChild>
            <Link href={`/${link}`}>{text}</Link>
        </Button>
    )
}