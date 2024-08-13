'use client'
import { Protect, SignedIn, UserButton, UserProfile } from "@clerk/nextjs";
import Link  from "next/link";
import { useAuth } from '@clerk/nextjs';
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { schemaFormPlaylistType, schemaFormPlaylist } from "@/validations/form-playlist-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import NavDashboard from "@/components/screen/dashboard/Nav-dashboard";
import Footer from "@/components/screen/home/Footer";
import {Form} from "@/components/screen/dashboard/form";

export default function dashboard() {


    const onSubmit = () => {
      console.log("data")
    }
 return (
    <div className="flex flex-col items-center justify-between w-screen h-screen">
      <NavDashboard/>
      <Form/>
      <Footer/>
    </div>
 )
}