<script>
import VSelect from '../../../components/v-select.vue'
import { optionz } from './options'

export default {
  name: 'meeting-options',
  components: { VSelect },
  optionz
}
</script>

<template>
  <div class="w-full">
    <v-select v-for="option in $options.optionz"
      class="w-full"
      :options="option.items"
      :label="option.label"
      :key="option.label"
      :value="option.name"
      :name="option.name"
      @input="value => $emit('update:' + option.name, value)"
      />
  </div>
</template>
