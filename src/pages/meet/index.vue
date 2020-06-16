<script>
import Base from '../base'
import Options from './options/index.vue'

import Vue from 'vue'
import VueFriendlyIframe from 'vue-friendly-iframe'

Vue.use(VueFriendlyIframe)

export default {
  name: 'page-meet',
  title: 'Meeting Gen',
  extends: Base,
  components: { Options },
  data: () => ({
    subject: 'Robot-in-a-Can',
    count: '3',
    rooms: '3',
    app: 'app.robotinacan.com/snap/snapEmbed/',
    frame: 'https://app.robotinacan.com/videochat.html'
  }),
  computed: {
    src () {
      const { frame, rooms, subject, hash, app, count } = this
      return `${frame}?meet=${subject}&rooms=${rooms}&app=${app}&count=${count}`
    }
  }
}
</script>

<template>
  <div class="max-w-full relative">

    <Options
      :count.sync="count"
      :rooms.sync="rooms"
      :app.sync="app" />

    <InputCopy class="mb-5" :value="src" />

  </div>
</template>

<style>

</style>
