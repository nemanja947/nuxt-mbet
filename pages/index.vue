<template>
  <div>
    <h1>This is home page</h1>
    <h2>Postojece rute:</h2>
    <p>/</p>
    <p>/betting</p>
    <p>/betting/:sport</p>
    <p>/betting/:sport/:competition</p>
    <p>/betting/match/:id</p>
    <p>/live</p>
    <p>/about</p>

    <p>config:</p>
    <p>{{$config.myPublicVariable}}</p>

    <h2>Pokretanje</h2>
    <p>npm install</p>
    <p>npm run dev ili pm2 start ecosystem.config.js</p>

    <p>breakpoints: {{$mq}}</p>

    <client-only>
      <p>Ovaj slider se ucitava samo na client-u:</p>
      <slider></slider>
    </client-only>
  </div>
</template>

<script>

import slider from '~/components/slider'

export default {
  name: 'Home',
  components: {
    slider
  },
  mounted() {
    setTimeout(() => {
      this.$toast.success('Ovo je neka poruka')
    }, 3000)
  }
}
</script>
