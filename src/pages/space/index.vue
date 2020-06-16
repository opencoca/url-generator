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

<div id="header">

      <div id="instructionsClick">
        <div id="logo" style="height: 37px; padding: 6px 6px 6px 6px;" ></div>
      </div>

      
    </div>



<div id="open" style="right: 1%;">
  <a><img onclick="openWindowSide()" src="tv.png" style="height:40px;"></a>
  <a href="https://meet.jit.si/Robot-in-a-Can" target="meeting_iframe" class="dot" style="background-color: #FF0000;" id="dot1"></a>
  <a href="https://meet.jit.si/Robot-in-a-Can-2" target="meeting_iframe" class="dot" style="background-color: #00FF00" id="dot2"></a>
  <a href="https://meet.jit.si/Robot-in-a-Can-3" target="meeting_iframe" class="dot" style="background-color: #0000FF;" id="dot3"></a>
</div>

<div class="window">
<iframe allow="microphone; camera" style="width: 0%; height: calc(100% - 50px); border: none;" src="https://app.robotinacan.com/snap/snapEmbed/" id="snap" name="app_iframe"></iframe>

<iframe allow="microphone; camera" style="min-width: 526px; width: 100%; height: calc(100% - 50px); left: 0%;" src="https://meet.jit.si/Robot-in-a-Can" id="jitsi" name="meeting_iframe">
  <p>Your browser does not support iframes.</p>
</iframe>

</div>
<Links />
</div>
</template>

<style scoped>
  a {
    color: #000
  }
</style>
