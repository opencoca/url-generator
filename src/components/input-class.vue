<script>
export default {
  name: 'input-class',
  props: {
    value: String,
    loading: Boolean
  },
  methods: {
    generateClass () {
      this.$emit('call:generate')
    }
  }
}
</script>

<template>
  <div class="flex items-center">
    <input
      class="bg-transparent focus:outline-none border-none w-full text-grey-darker mr-3 py-2 px-3 text-2xl leading-tight"
      type="class"
      placeholder="Class Name"
      :disabled="loading"
      v-bind="{ value }"
      @input="event => $emit('input', event.target.value)">
    <a class="flex-no-shrink bg-teal hover:bg-teal-dark border-teal hover:border-teal-dark text-sm border-4 text-white py-1 px-2 rounded cursor-pointer"
      title="Generate Class Name"
      @click="generateClass">
      <i class="fas fa-sync-alt" :class="{ spin: loading }"></i>
    </a>
  </div>
</template>

<style scoped>
.spin {
  animation: spin 4s infinite linear
}

@keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
}
</style>
