import HashMixin from '../support/hash-mixin'
import InputCopy from '../components/input-copy.vue'
import ProgressBar from '../components/progress-bar.vue'
import AvatarImage from '../components/image.vue'
import GeneratorLink from '../components/generator-link.vue'
import { debounce } from 'lodash-es'

// import Vue from 'vue'
// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.min.css'

// Vue.use(VueMaterial)


export default {
  mixins: [HashMixin()],
  components: { InputCopy, ProgressBar, AvatarImage, GeneratorLink },
  data: () => ({
    loading: true
  }),
  props: {
    email: String
  },
  watch: {
    src: 'load'
  },
  methods: {
    load: debounce(function load () {
      this.loading = true
      const img = new Image()

      img.onload = () => {
        this.$nextTick(() => {
          this.loading = false
        })
      }

      img.src = this.src
    }, 600)
  },
  mounted () {
    this.load()
  }
}
