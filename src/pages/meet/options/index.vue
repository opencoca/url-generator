<script>
import VSelect from '../../../components/v-select.vue'
import { fallbacks, sizes, ratings, optionz } from './options'

export default {
  name: 'gravatar-options',
  components: { VSelect },
  fallbacks,
  sizes,
  ratings,
  props: ['rating', 'size', 'fallback'],
  optionz
}
</script>

<template>
  <div class="flex flex-wrap -mx-3 mb-2">
    <v-select v-for="option in $options.optionz" 
      class="w-full md:w-1/3 px-3 mb-6 md:mb-0"
      :options="option.items"
      :label="option.label"
      :key="option.label"
      :value="option.name"
      :name="option.name"
      @input="value => $emit('update:' + option.name, value)"
      />
  </div>
</template>
