<template>
  <div id="app">
    <app-topbar/>
    <app-menu 
      :country="country" :category="category"
      v-on:changeCountry="updateCountry($event)"
      v-on:changeCategory="updateCategory($event)"
     />
    <news-header :country="country"/>
  </div>
</template>

<script>
import axios from 'axios';
import appTopbar from './components/appTopbar'
import appMenu from './components/appMenu'
import newsHeader from './components/newsHeader'

export default {
  name: 'app',
    components: {
    appTopbar,
    appMenu,
    newsHeader
    },
    data() {
      return {
        country: 'pl',
        category: '',
        articles: []
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
    created() {
      axios.get(`https://newsapi.org/v2/top-headlines?country=${this.country}&category=${this.category}&apiKey=18a6eb6a466f47dbaaee83a6a5b2f5c9`)
      .then((response)  =>  {
        console.log(response.data.articles)
        this.articles = response.data.articles
      }, (error)  =>  {
        console.log(error)
      })
    },
    beforeUpdate() {
     axios.get(`https://newsapi.org/v2/top-headlines?country=${this.country}&category=${this.category}&apiKey=18a6eb6a466f47dbaaee83a6a5b2f5c9`)
      .then((response)  =>  {
        console.log(response.data.articles)
        this.articles = response.data.articles
      }, (error)  =>  {
        console.log(error)
      })
      
    }
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
