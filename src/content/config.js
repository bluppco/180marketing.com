import { defineCollection, z } from "astro:content"

const headerCollection = defineCollection({

    schema: z.object({

        title: z.string(),
        order: z.number(),
        link: z.string(),
        live: z.boolean(),

    })
    
})

const footerCollection = defineCollection({

    schema: z.object({

        title: z.string(),
        order: z.number(),
        link: z.string(),
        live: z.boolean(),

    })
    
})

export const collections = {

	"header": headerCollection,
    "footer": footerCollection,

}
