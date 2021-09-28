<template>
  <div>
    <Navigation />
    <p>default layout</p>
    <Nuxt />
  </div>
</template>

<script>
import Navigation from '~/components/navigation'
export default {
  name: 'DefaultLayout',
  components: {
    Navigation
  }
}
</script>
