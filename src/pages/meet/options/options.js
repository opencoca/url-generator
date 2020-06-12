import { makeOptions } from '../../../support/options'

const optionz = {
  shared_content:{
    name: 'content',
    label: 'Choose your shared content',
    items: makeOptions([
      'Whiteboard', 
      'Snap! coding', 
      'Reading'
      ])
  },
  page: {
    name: 'page',
    label: 'Number of rooms',
    items: makeOptions(['1', '3', '5', '8'])
  }
}

const old_optionz = {
  fallbacks: {
    name: 'fallback',
    label: 'kind',
    items: makeOptions([
      '404', 'mp', 'identicon', 'monsterid', 'wavatar', 'retro', 'robohash', 'blank'
    ])
  },
  ratings: {
    name: 'rating',
    label: 'rating',
    items: makeOptions(['g', 'pg', 'r', 'x'])
  },
  sizes: {
    name: 'size',
    label: 'size',
    items: makeOptions([
      '200', '400','600', '800'
      ])
  }
}


export { optionz }
