<template>
  <div class="sport">
    <h2>Sport: {{ sport.name }}</h2>
    <div v-for="comp in competitions" :key="comp.id"> {{ comp.name }} </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.sport.name}`
    }
  },
  data() {
    return {
      competitions: [
        { id: 1, name: 'Comp 1' },
        { id: 2, name: 'Comp 2' },
        { id: 3, name: 'Comp 3' }
      ]
    }
  },
  async asyncData({$axios, params}) {
    let response = await $axios.get(`/betting/sports/${params.sport}`)
    let sport = response.data

    return {
      sport
    }

  }
}
</script>

<style>

</style>