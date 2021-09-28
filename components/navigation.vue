<template>
  <nav class="navbar">
    <div class="left">
      <NuxtLink :to="localePath('index')">Home</NuxtLink> |
      <NuxtLink :to="localePath('betting')">Betting</NuxtLink> |
      <NuxtLink :to="localePath('live')">Live</NuxtLink> |
      <NuxtLink :to="localePath('about')">About</NuxtLink> |
    </div>
    <div class="right">
      <langSwitcher />
    </div>
  </nav>
</template>

<script>
import langSwitcher from './langSwitcher'
export default {
  components: {
    langSwitcher
  }
}
</script>

<style lang="scss">
 .navbar {
    height: 40px;
    width: 100%;
    background-color: #0e1c42;

    display: flex;
    justify-content: space-between;
    align-items: center;

   a {
     color: #fff;
     text-decoration: none;
   }
 }
</style>