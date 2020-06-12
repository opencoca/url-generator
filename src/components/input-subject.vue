<script>
export default {
  name: 'input-subject',
  props: {
    value: String,
    loadingSubject: Boolean
  },
  methods: {
    generateSubject() {
      this.$emit('call:generateSubject')
    }
  }
}
</script>

<template>
  <div class="flex items-center rounded  outline-blue border">
    <input
      class="bg-transparent outline-blue border-none w-full text-grey-darker mr-3 py-2 px-3 text-2xl leading-tight"
      type="text"
      placeholder="Subject Name"
      :disabled="loadingSubject"
      v-bind="{ value }"
      @input="event => $emit('input', event.target.value)">
    <a class="flex-no-shrink bg-transparent border-transparent text-sm border-4 hover:text-blue-600 text-blue  py-1 px-2 rounded cursor-pointer"
      title="Generate Subject Name"
      @click="generateSubject">
      <i class="fas fa-sync-alt" :class="{ spin: loadingSubject }"></i>
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
