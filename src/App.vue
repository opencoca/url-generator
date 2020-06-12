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
    loadingEmail: true,
    loadingSubject: false
  }),
  methods: {
    randomEmail () {
      this.loadingEmail = true
      randomEmail()
        .then(email => {
          this.email = email
          this.loadingEmail = false
          this.ready = true
        })
    },
    randomSubject () {
      console.log('trying to gen random subject')
      this.loadingSubject = true
      randomSubject()
        .then(subject => {
          this.subject = subject
          this.loadingSubject = false
          this.ready = true
        })
    }
  },
  mounted () {
    this.randomEmail()
    //this.randomSubject()
  }
}
</script>

<template>
  <div id="app" class="container ml-auto mr-auto">
    <div class="flex h-screen w-full flex-wrap">
      <div class="p-2 ml-auto mr-auto">
        <div class="bg-white shadow-md rounded px-4 pt-3 pb-4 mb-4 main-container">
          <router-link :to="{ name: 'meet' }" class="no-underline">
            <h1 class="bg-indigo-darkest text-3xl text-center mb-5 text-white">
              Framr <span class="text-sm">Classroom Generator</span>
            </h1>
          </router-link>
          <div class="mb-4">
            <InputEmail @call:generateEmail="randomEmail" v-bind="{ loadingEmail }" v-model="email" />
          </div>
          <div class="mb-4">
            <InputSubject @call:generateSubject="randomSubject" v-bind="{ loadingSubject }" v-model="subject" />
          </div>
          <Navigation class="mb-4" />
          <div class="mb-4" v-if="ready">
            <router-view v-bind="{ email, subject }" />
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

h1{
  margin: -0.75rem -1rem 0;
  padding: 0.75rem;
}
</style>
