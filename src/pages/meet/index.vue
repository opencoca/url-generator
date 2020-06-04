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
    frame: 'https://archive.org/stream/TheUltimatePaperPlaneBook?ui=embed#mode/2up?ui=embed'
  }),
  computed: {
    src () {
      const { frame, hash, fallback, size, rating } = this
      return `${frame}#${hash}?s=${size}&d=${fallback}&r=${rating}`
    }
  }
}
</script>

<template>
  <div class="max-w-full relative">

    <input v-model="frame" placeholder="https://archive.org/stream/TheUltimatePaperPlaneBook?ui=embed#mode/2up?ui=embed">
    <vue-friendly-iframe :src="frame" @load="onLoad" v-bind="frame"></vue-friendly-iframe>

    <InputCopy class="mb-5" :value="src" />

    <Options
      :fallback.sync="fallback"
      :size.sync="size"
      :rating.sync="rating" />
  </div>
</template>

<style>
iframe{
      min-height: 500px;
      min-width: 500px;
}

input, iframe {width:100%}
</style>
