import { CollectionConfig } from "payload/types";

/**
 * Media collection:
 * - No fields
 * - Used for storing uploaded files, in this case company logos
 */
export const Media: CollectionConfig = {
    slug: 'media',
    upload: {
        // Relative URL to store file at
        staticURL: '/media',
        // Local directory to store file at
        staticDir: 'media',
        // Type of file to accept
        mimeTypes: ['image/*']
    },
    fields: []
}