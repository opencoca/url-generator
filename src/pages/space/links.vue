<script>
export default {
  name: 'about-links'
}
</script>

<template>
  <div class="about-links">
    <div class="flex">
      <a target="_blank" href="https://twitter.com/openco" class="flex-1 text-center text-white font-bold py-2 px-4 rounded-l">
        Twitter
      </a>
      <a target="_blank" href="https://github.com/opencoca/" class="flex-1 text-center text-white font-bold py-2 px-4">
        Github
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .about-links {
    margin-top: 10px;
  }
  a {
    background-color: var(--color-blue);
    text-decoration: none;
    &:hover {
      background-color: var(--color-green);
    }
  }
</style>
