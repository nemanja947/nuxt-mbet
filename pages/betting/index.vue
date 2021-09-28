<template>
  <div>
    <h1>{{$t('betting')}}</h1>
    <div v-for="sport in $store.state.betting.sports" :key="sport.id">
      <nuxt-link :to="localePath({name: 'betting-sport', params: {sport: sport.id}})">{{ sport.name }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BettingMain',
  data () {
    return {
    }
  },
  async fetch({$axios, store}) {
    let response = await $axios.get('/betting/sports')
    let sports = response.data

    store.commit('betting/SET_SPORTS', sports)
  }
}
</script>

<style>

</style>
