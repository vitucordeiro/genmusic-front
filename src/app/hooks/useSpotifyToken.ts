import { useAuth } from '@clerk/nextjs';
import { clerkClient } from '@clerk/nextjs/server';

async function getAccessTokenSpotify(): Promise<string>{
    const {userId} = useAuth();
    const provider = "oauth_spotify";
    const clerkResponse = await clerkClient().users.getUserOauthAccessToken(
        userId || '',
        provider
      )
    return clerkResponse.data[0]?.token
}