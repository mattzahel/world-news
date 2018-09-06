<template>
  <div id="app">
    <app-topbar/>
    <app-menu
      :country="country" :category="category"
      v-on:changeCountry="updateCountry($event)"
      v-on:changeCategory="updateCategory($event)"
     />
    <news-header :country="country"/>
    <show-news :country="country" :category="category"/>
  </div>
</template>

<script>
import appTopbar from './components/appTopbar'
import appMenu from './components/appMenu'
import newsHeader from './components/newsHeader'
import showNews from './components/showNews'

export default {
  name: 'app',
    components: {
    appTopbar,
    appMenu,
    newsHeader,
    showNews
    },
    data() {
      return {
        country: 'pl',
        category: ''
      }
    },
    methods: {
      updateCountry(updatedCountry) {
        this.country = updatedCountry
      },
      updateCategory(updatedCategory) {
        this.category = updatedCategory
      }
    },
  }
</script>

<style lang="scss">
  *, *::after, *::before {
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
  }

</style>
