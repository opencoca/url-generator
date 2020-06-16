<script>
import AvatarImage from '../../components/image.vue'
import Links from './links.vue'

export default {
  name: 'page-about',
  title: 'OpenCo',
  components: { AvatarImage, Links }
}
</script>

<template>
  <div>
    <AvatarImage
      src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=Brown&clotheType=CollarSweater&clotheColor=Black&eyeType=Default&eyebrowType=UpDown&mouthType=Default&skinColor=Light" />

    <p>I am Full-Stack Developer, Educator. </p>
    <p>I love movies, books, manga, comics, games...</p>
    <p>I like more things than I have time to.</p>
    <p>.</p>
    <p>I record videos for fun teaching and work on <a target="_blank" href="https://robotinacan.com">Robot in a Can</a> as an Application Engineer.</p>

    <Links />
  </div>
</template>

<style scoped>
  a {
    color: #000
  }
</style>
