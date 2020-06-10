<script>
import Base from '../base'
import Options from './options/index.vue'

import Vue from 'vue';
import VueFriendlyIframe from 'vue-friendly-iframe';

Vue.use(VueFriendlyIframe);

export default {
  name: 'page-meet',
  title: 'Meeting Gen',
  extends: Base,
  components: { Options },
  data: () => ({
    fallback: 'robohash',
    rating: 'x',
    size: '800',
    page: '1',
    frame: 'https://archive.org/stream/TheUltimatePaperPlaneBook?ui=embed#page/n'
  }),
  computed: {
    src () {
      const { frame, page ,hash, fallback, size, rating } = this
      return `${frame}${page}/mode/2up&${hash}?s=${size}&d=${fallback}&r=${rating}`
    }
  }
}
</script>

<template>
  <div class="max-w-full relative">

    <Options
      :page.sync="page"
      :fallback.sync="fallback"
      :size.sync="size"
      :rating.sync="rating" />

    <InputCopy class="mb-5" :value="src" />

  </div>
</template>

<style>
iframe{
      min-height: 400px;
      min-width: 400px;
}

input, iframe {width:100%}
</style>
