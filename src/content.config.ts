import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
    loader: glob({pattern: '**/[^_]*.md', base: './src/content/blog'}),
    schema: z.object({
        title: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        description: z.string(),
        tags: z.array(z.string()),
        category: z.enum(['Opinión', 'Programación', 'Inteligencia Artificial']),
        image: z.string().optional(),
    })
});



export const collections = {blog}