"use server";
import { z } from "zod";

export const schemaFormPlaylist = z.object({
    textBase: z.string().min(3, { message: 'Minimum of 3 characters' }),
})

export type schemaFormPlaylistType = z.infer<typeof schemaFormPlaylist>
