const {
  makeSlug,
  blockContentToMarkdown,
  normalizeSocial,
  normalizeMetaSocial
} = require('./resolvers')

module.exports = {
  makeSlug: {
    name: 'makeSlug',
    description: 'Generates slug for the node.',
    extend: (args, fieldConfig) => ({
      resolve: makeSlug(args, fieldConfig)
    })
  },

  blockContentToMarkdown: {
    name: 'blockContentToMarkdown',
    description: 'Converts Sanity Block Content to Markdown.',
    extend: (args, fieldConfig) => ({
      resolve: blockContentToMarkdown(args, fieldConfig)
    })
  },

  normalizeSocial: {
    name: 'normalizeSocial',
    description: 'Normalize social links object.',
    extend: (args, fieldConfig) => ({
      resolve: normalizeSocial(args, fieldConfig)
    })
  },

  normalizeMetaSocial: {
    name: 'normalizeMetaSocial',
    description: 'Normalize meta social object.',
    extend: (args, fieldConfig) => ({
      resolve: normalizeMetaSocial(args, fieldConfig)
    })
  }
}
