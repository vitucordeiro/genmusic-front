'use client'

import NavDashboard from "@/components/screen/dashboard/Nav-dashboard";
import Footer from "@/components/screen/home/Footer";
import {Form} from "@/components/screen/dashboard/form";

export default function dashboard() {

 return (
    <div className="flex flex-col items-center justify-between w-screen h-screen">
      <NavDashboard/>
      <Form></Form>
      <Footer/>
    </div>
 )
}