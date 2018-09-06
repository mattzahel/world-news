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
            articles: [],
            error: false
        }
    },
    watch: {
        category: function () {
            this.update();
        },
        country: function () {
            this.update();
        }
    },
    methods: {
        update() {
            if (this.category === 'all') {
                axios.get(`https://newsapi.org/v2/top-headlines?country=${this.country}&apiKey=d6ad9f633b234ad1966b3e78287a1742`).then((response) => {
                    console.log(response.data.articles)
                    this.articles = [];
                    this.articles = response.data.articles
                }, (error) => {
                    console.log(error)
                })
            } else {
                axios.get(`https://newsapi.org/v2/top-headlines?country=${this.country}&category=${this.category}&apiKey=d6ad9f633b234ad1966b3e78287a1742`)
                    .then((response) => {
                        console.log(response.data.articles)
                        this.articles = [];
                        this.articles = response.data.articles
                    }, (error) => {
                        console.log(error)
                    })
            }
        }
    },
    created() {
        if (this.category === 'all') {
            axios.get(`https://newsapi.org/v2/top-headlines?country=${this.country}&apiKey=d6ad9f633b234ad1966b3e78287a1742`).then((response) => {
                console.log(response.data.articles)
                this.articles = [];
                this.articles = response.data.articles
            }, (error) => {
                console.log(error)
            })
        } else {
            axios.get(`https://newsapi.org/v2/top-headlines?country=${this.country}&category=${this.category}&apiKey=d6ad9f633b234ad1966b3e78287a1742`)
                .then((response) => {
                    console.log(response.data.articles)
                    this.articles = [];
                    this.articles = response.data.articles
                }, (error) => {
                    console.log(error)
                })
        }
    },
}
</script>

<style lang="scss" scoped>

</style>
