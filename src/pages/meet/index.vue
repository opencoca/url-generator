<script>
import Base from '../base'
import Options from './options/index.vue'

export default {
  name: 'page-meet',
  title: 'Meeting Gen',
  extends: Base,
  components: { Options },
  data: () => ({
    fallback: 'robohash',
    rating: 'x',
    size: '800'
  }),
  computed: {
    src () {
      const { hash, fallback, size, rating } = this
      return `https://gravatar.com/avatar/${hash}?s=${size}&d=${fallback}&r=${rating}`
    }
  }
}
</script>

<template>
  <div class="max-w-full relative">
    <ProgressBar v-if="loading" />
    <AvatarImage v-bind="{ src, email }" />
    <InputCopy class="mb-5" :value="src" />

    <Options
      :fallback.sync="fallback"
      :size.sync="size"
      :rating.sync="rating" />
  </div>
</template>
