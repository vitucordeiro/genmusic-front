import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function Nav({isLogged}:{isLogged:boolean}) {
    return(
            <div className="mt-10 flex flex-col items-center md:flex-row md:flex md:items-center md:justify-between justify-center w-2/3">
                <h3 className="font-extrabold text-4xl">genMusic</h3>
                <div className="flex flex-col items-center space-y-5 md:space-y-0 md:space-x-10 md:flex md:flex-row p-4 ">
                    {isLogged === true ? ( 
                        <UserButton />
                    ) : (
                        <Link href="/">
                            <Button size="icon">
                            <ChevronLeft className="h-4 w-4" />
                            </Button>
                        </Link>
                        )}
                </div>
            </div>
        )
} ;
