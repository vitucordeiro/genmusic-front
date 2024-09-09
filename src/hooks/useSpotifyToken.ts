"use server"
import { clerkClient, auth } from '@clerk/nextjs/server';

export async function getAccessTokenSpotify(){
    const { userId} = auth();
    const provider = "oauth_spotify";
    const clerkResponse = await clerkClient().users.getUserOauthAccessToken(
        userId || '',
        provider
      )
    return clerkResponse.data[0]?.token
}