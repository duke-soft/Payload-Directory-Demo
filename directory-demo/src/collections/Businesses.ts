import { CollectionConfig } from "payload/types";

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
            relationTo: 'media',
            required: true
        }
    ]
}