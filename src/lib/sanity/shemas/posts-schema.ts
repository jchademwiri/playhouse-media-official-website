const post = {
  name: 'post',
  title: 'Posts',
  type: 'document',
  initialValue: {
    publishedAt: new Date().toISOString(),
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Keep titles short!',
      type: 'string',
    },
    {
      name: 'exempt',
      title: 'Exempt',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative Text',
            },
          ],
        },
      ],
    },
  ],
};

export default post;
