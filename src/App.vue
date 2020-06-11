<script>
import InputEmail from  './components/input-email.vue'
import InputSubject from  './components/input-subject.vue'
import PageFooter from  './components/footer.vue'
import randomEmail from './support/random-email'
import randomSubject from './support/random-subject'
import Navigation from  './components/navigation.vue'


export default {
  name: 'root',
  components: { InputEmail, InputSubject, Navigation, PageFooter },

  data: () => ({
    email: '',
    subject: '',
    ready: false,
    loading: true
  }),
  methods: {
    randomEmail () {
      this.loading = true
      randomEmail()
        .then(email => {
          this.email = email
          this.loading = false
          this.ready = true
        })
    },
    randomSubject () {
      this.loading = true
      randomSubject()
        .then(subject => {
          this.subject = subject
          this.loading = false
          this.ready = true
        })
    }
  },
  mounted () {
    this.randomEmail()
    this.randomSubject()
  }
}
</script>

<template>
  <div id="app" class="container ml-auto mr-auto">
    <div class="flex h-screen w-full flex-wrap">
      <div class="p-2 ml-auto mr-auto">
        <div class="bg-white shadow-md rounded px-4 pt-3 pb-4 mb-4 main-container">
          <h1 class="text-3xl text-center mb-5 text-indigo-darkest">
            Framr <span class="text-sm">Classroom Generator</span>
          </h1>
          <div class="mb-4">
            <InputEmail @call:generate="randomEmail" v-bind="{ loading }" v-model="email" />
          </div>
          .
          <div class="mb-4">
            <InputSubject @call:generate="randomSubject" v-bind="{ loading }" v-model="subject" />
          </div>
          <Navigation class="mb-4" />
          <div class="mb-4" v-if="ready">
            <router-view v-bind="{ email }" />
          </div>
        </div>
        <PageFooter class="text-center text-white text-xs mb-5" />
      </div>
    </div>
  </div>
</template>

<style>
:root {
  --color-blue: #2196F3;
  --color-green: #009586;
  --color-dark: #121128;
}
body {
  background-color: var(--color-blue);
  font-family: 'Lato', sans-serif;
}
.main-container {
  max-width: 600px;
}
</style>
