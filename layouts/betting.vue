<template>
  <div>
    <Navigation />
    <Nuxt />
    <p>ISPOD</p>
  </div>
</template>

<script>
import Navigation from '~/components/navigation'
export default {
  name: 'BettingLayout',
  components: {
    Navigation
  }
}
</script>