import { CollectionConfig } from "payload/types";

/**
 * Businesses collection:
 * - Name: text
 * - Type: text
 * - Website: text
 * - Phone: number
 * - Email: email
 * - Description: rich text
 * - Logo: file upload
 */
export const Businesses: CollectionConfig = {
    slug: 'businesses',
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true
        },

        {
            name: 'type',
            type: 'text',
            required: true
        },

        {
            name: 'website',
            type: 'text',
            required: true
        },

        {
            name: 'phone',
            type: 'number',
            required: true
        },

        {
            name: 'email',
            type: 'email',
            required: true
        },

        {
            name: 'description',
            type: 'richText',
        },

        {
            name: 'logo',
            type: 'upload',
            // Uploaded file information will be stored in collection with
            // slug 'media'
            relationTo: 'media',
            required: true
        }
    ]
}