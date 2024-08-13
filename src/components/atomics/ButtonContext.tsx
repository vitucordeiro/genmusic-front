import { Button } from "../ui/button"
import Link from "next/link"
import {ButtonVariant} from "@/lib/ButtonContext.types"



export default function ButtonContext ({link, variant, text, size}:{link?:string, variant:ButtonVariant, text:string, size?:string}){
    return(
        <Button className={size} variant={ variant} asChild>
            <Link href={`/${link}`}>{text}</Link>
        </Button>
    )
}