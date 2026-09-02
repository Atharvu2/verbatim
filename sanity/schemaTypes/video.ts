import { defineArrayMember, defineField, defineType } from 'sanity'
import { PlayIcon } from '@sanity/icons/Play'

export const video = defineType({
  name: 'video',
  title: 'Video Document',
  type: 'document',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'id',
      title: 'Video ID',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Video URL',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'channel',
      title: 'Channel',
      type: 'string',
    }),
    defineField({
      name: 'duration',
      title: 'Duration (seconds)',
      type: 'number',
    }),
    defineField({
      name: 'query',
      title: 'Query',
      type: 'string',
    }),
    defineField({
      name: 'chapters',
      title: 'Chapters (Table of Contents)',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'chapter',
          fields: [
            defineField({ name: 'startSeconds', type: 'number', title: 'Start Seconds' }),
            defineField({ name: 'label', type: 'string', title: 'Chapter Label' }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'chunks',
      title: 'Transcript Chunks',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'chunk',
          fields: [
            defineField({ name: 'startSeconds', type: 'number', title: 'Start Seconds' }),
            defineField({ name: 'text', type: 'text', title: 'Transcript Text' }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'channel',
    },
  },
})
