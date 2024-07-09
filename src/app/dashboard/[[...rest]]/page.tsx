'use client'
import NavDashboard from "@/components/screen/dashboard/Nav-dashboard";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Protect, SignedIn, SignedOut, UserButton, UserProfile } from "@clerk/nextjs";
import Link  from "next/link";

import * as zod from 'zod';
import {useForm} from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from "@/components/ui/input";
import Footer from "@/components/screen/home/Footer";
import { Button } from "@/components/ui/button";
import { SelectItem, SelectTrigger, SelectValue, SelectContent } from "@/components/ui/select";
import { Select } from "@radix-ui/react-select";

const formSchema = zod.object({ 
    playlistEmotions:zod.string(),
    playlistDate:zod.enum(["Date is not a question","1950", "1960", "1970", "1980", "1990", "2000", "2010", "2020"])
})
export default function Home() {

 
    const form = useForm<zod.infer<typeof formSchema>>({
        resolver:zodResolver(formSchema),
        defaultValues: {
            playlistEmotions:"",
            playlistDate:"Date is not a question"
        }
    })
    const handleSubmit = (values:zod.infer<typeof formSchema>) =>{
        console.log({values})
    }

 return (
    <div>

        <SignedIn>
        <Protect>
            <div className="flex flex-col h-screen w-screen items-center justify-between">
                <NavDashboard/>

                <div className="">
                    <Form
                        {...form}
                        >
                        <form
                            className="max-w-md w-full flex flex-col items-center justify-center gap-4"
                            onSubmit={form.handleSubmit(handleSubmit)}    
                            >
                                <FormField control={form.control} name="playlistEmotions" render={({field})=>{
                                    return(
                                        <FormItem className="flex flex-col justify-center items-center gap-3">
                                            <FormLabel>Desbribe your emotions</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="what do you imagine?"
                                                    type="text"
                                                    {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )
                                }} />
                        <FormField control={form.control} name="playlistDate" render={({field})=>{
                                    return(
                                        <FormItem className="flex flex-col justify-center items-center gap-3">
                                            <FormLabel> filter musics by decade.</FormLabel>
                                            <Select onValueChange={field.onChange}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select decade that you want listen." />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="default">Date is not a question</SelectItem>
                                                    <SelectItem value="1950">1950</SelectItem>
                                                    <SelectItem value="1960">1960</SelectItem>
                                                    <SelectItem value="1970">1970</SelectItem>
                                                    <SelectItem value="1980">1980</SelectItem>
                                                    <SelectItem value="1990">1990</SelectItem>
                                                    <SelectItem value="2000">2000</SelectItem>
                                                    <SelectItem value="2010">2010</SelectItem>
                                                    <SelectItem value="2020">2020</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage/>
                                        </FormItem>
                                    )
                                }} />
                        <Button
                            type="submit"
                            className="w-full"
                            >
                                create playlist
                        </Button>

                        </form>
                    </Form>
                </div>
                <Footer/>

            </div>

        </Protect>
        </SignedIn>
        <SignedOut >
            <Link href="/sign-in">sign-in</Link>
        </SignedOut>
    </div>
 )
}