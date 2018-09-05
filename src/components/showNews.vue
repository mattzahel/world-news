<template>
    <div class="news-wrapper">
        <div class="single-news" v-for="article in articles" :key="article.index">
            {{article.title}}
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: {
        country: String,
        category: String
    },
    data() {
        return {
            articles: []
        }
    },
    //uruchamiane przy włączeniu aplikacji
     created() {
      if(this.category==='all') {
        axios.get(`https://newsapi.org/v2/top-headlines?country=${this.country}&apiKey=18a6eb6a466f47dbaaee83a6a5b2f5c9`).then((response)  =>  {
        console.log(response.data.articles)
        this.articles = response.data.articles
      }, (error)  =>  {
        console.log(error)
      })
    } else {
       axios.get(`https://newsapi.org/v2/top-headlines?country=${this.country}&category=${this.category}&apiKey=18a6eb6a466f47dbaaee83a6a5b2f5c9`)
      .then((response)  =>  {
        console.log(response.data.articles)
        this.articles = response.data.articles
      }, (error)  =>  {
        console.log(error)
      })
    }
    },
    
    //uruchamiane przy zmianie kategorii lub państwa
    beforeUpdate() {
      if(this.category==='all') {
        axios.get(`https://newsapi.org/v2/top-headlines?country=${this.country}&apiKey=18a6eb6a466f47dbaaee83a6a5b2f5c9`).then((response)  =>  {
        console.log(response.data.articles)
        this.articles = response.data.articles
      }, (error)  =>  {
        console.log(error)
      })
    } else {
       axios.get(`https://newsapi.org/v2/top-headlines?country=${this.country}&category=${this.category}&apiKey=18a6eb6a466f47dbaaee83a6a5b2f5c9`)
      .then((response)  =>  {
        console.log(response.data.articles)
        this.articles = response.data.articles
      }, (error)  =>  {
        console.log(error)
      })
    }
  },    
}
</script>

<style lang="scss" scoped>

</style>
