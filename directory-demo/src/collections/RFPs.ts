import { CollectionConfig } from "payload/types";

/**
 * RFPs collection:
 * - Title: text
 * - Description: rich text
 */
export const RFPs: CollectionConfig = {
    slug: 'rfps',
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true
        },

        {
            name: 'description',
            type: 'richText',
            required: true
        }
    ]
}