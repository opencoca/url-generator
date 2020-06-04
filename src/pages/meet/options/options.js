import { makeOptions } from '../../../support/options'

const optionz = {
  page: {
    label: 'page',
    name: 'page',
    items: makeOptions(['1', '3', '5', '8'])
  },
  fallbacks: {
    label: 'kind',
    name: 'fallback',
    items: makeOptions([
      '404', 'mp', 'identicon', 'monsterid', 'wavatar', 'retro', 'robohash', 'blank'
    ])
  },
  ratings: {
    label: 'rating',
    name: 'rating',
    items: makeOptions(['g', 'pg', 'r', 'x'])
  },
  sizes: {
    label: 'size',
    name: 'size',
    items: makeOptions([
      '200', '400','600', '800'
      ])
  }
}

export { optionz }
