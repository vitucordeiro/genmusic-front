import {  User } from "@prisma/client";
import prisma from '@/lib/prisma';
export async function createUser(data:User) {

    try{
        const existingUser = await prisma.user.findUnique({
            where: 
            { 
                clerkUserId: data.clerkUserId,
                email: data.email
            }
        })
        if(existingUser){
            return { error: "A user exists"}
        }
        const user = await prisma.user.upsert({
          where: { clerkUserId: data.clerkUserId},
          update:data,
          create:data
        });
        return { user }
    }   catch(error){
        return { error: `CREATE USER ERROR: ${error}` }
    }
}
export async function getUserById({id, clerkUserId} : User){
    try{
        if(!id && !clerkUserId) throw new Error("Error ocurred -- id and clerkUserId is required")
        const query = id ? { id } : { clerkUserId }
        const user = await prisma.user.findUnique({where:query})
        return {user}
    }   catch (error){
        return {error}
    }
}
export async function updateUser(id:string, data: Partial<User>) {
    try{
        const user = await prisma.user.update({
            where:{
                id
            },
            data
        })
        return { user }
    }   catch (error){
        return {error}
    }
}