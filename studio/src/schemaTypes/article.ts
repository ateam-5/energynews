export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['needs_review', 'approved', 'published'],
      },
      initialValue: 'needs_review',
    },
    {
      name: 'summary',
      title: 'AI Summary',
      type: 'text',
    },
    {
      name: 'sourceUrl',
      title: 'Original Article URL',
      type: 'url',
    },
    {
      name: 'sourcePublication',
      title: 'Source Publication',
      type: 'string',
    },
    {
      name: 'relevanceScore',
      title: 'AI Relevance Score (1-10)',
      type: 'number',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['Spine', 'Orthopedics', 'Surgery', 'Research', 'Industry News'],
      },
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
  ],
}