import { makeOptions } from '../../../support/options'

const optionz = {
  shared_content: {
    name: 'app',
    label: 'Choose your shared content',
    items: [
      { label: 'White Board', value: 'wbo.ophir.dev/boards/anonymous/' },
      { label: 'Snap! coding', value: 'https://app.robotinacan.com/videochat.html' },
      { label: 'Reading', value: 'https://archive.org/stream/TheUltimatePaperPlaneBook?ui=embed#page/n5/mode/2up' }
    ]
  },
  page: {
    name: 'rooms',
    label: 'Number of rooms',
    items: makeOptions(['0', '1', '3', '4', '5'])
  }
}

export { optionz }
