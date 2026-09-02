import { defineArrayMember, defineField, defineType } from 'sanity'
import { FolderIcon } from '@sanity/icons/Folder'

export const moduleType = defineType({
  name: 'module',
  title: 'Module',
  type: 'object',
  icon: FolderIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Module Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Module Summary',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'lessons',
      title: 'Lessons',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'lesson' }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      summary: 'summary',
    },
    prepare({ title, summary }) {
      return {
        title: title || 'Untitled Module',
        subtitle: summary || 'No summary provided',
      }
    },
  },
})
