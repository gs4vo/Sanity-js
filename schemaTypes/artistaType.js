import {defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
        name: 'idade',
        type: 'date',
      }),
      defineField({
        name: 'foto',
        type: 'image',
      }),
  ],
})