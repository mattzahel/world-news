<template>
<div class="news-container">
    <div class="news" v-for="article in articles" :key="article.index">
        <div class="news__image" :style="{ backgroundImage: `url('${article.urlToImage}')` }" v-if="article.urlToImage!==null">
        </div>
        <div class="news__image--error" v-if="article.urlToImage===null">
        </div>
        <div class="news__text">
            <div class="news__text__info">
                <span class="article-date">{{article.publishedAt.slice(0,10)}} | {{article.publishedAt.slice(11,16)}}</span>
                <span class="article-source">{{article.source.name}}</span>
            </div>
            <h2 class="news__text__heading">
                {{article.title}}
            </h2>
            <p class="news__text__desc">
                {{article.description}}
            </p>
            <div class="news__text__footer">
                <a :href="article.url" target="_blank">Read more</a>
                <span class="article-author" v-if="article.author!=null">Author: {{article.author}}</span>
            </div>
        </div>
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
                        this.articles = [];
                        this.articles = response.data.articles
                    }, (error) => {
                        console.log(error)
                    })
                } else {
                    axios.get(`https://newsapi.org/v2/top-headlines?country=${this.country}&category=${this.category}&apiKey=d6ad9f633b234ad1966b3e78287a1742`)
                        .then((response) => {
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
                    this.articles = [];
                    this.articles = response.data.articles
                }, (error) => {
                    console.log(error)
                })
            } else {
                axios.get(`https://newsapi.org/v2/top-headlines?country=${this.country}&category=${this.category}&apiKey=d6ad9f633b234ad1966b3e78287a1742`)
                    .then((response) => {
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
    .news-container {
        max-width: 120rem;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 0 2rem;
    }

    .news {
        max-width: 100%;
        min-height: 20rem;
        padding: 5rem 0;
        display: flex;

        &__image {
            min-width: 40rem;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            margin-right: 2rem;
        }

        &__image--error {
            min-width: 40rem;
            background-image: url(../assets/newsImg.png);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            margin-right: 2rem;
        }

        &__text {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            &__info {
                display: flex;
                justify-content: space-between;
                font-size: 1.6rem;
                .article-date {
                    color: #41B883;
                }
                .article-source {
                    color: #666;
                    text-align: right;
                }
            }
            &__heading {
                font-size: 2.4rem;
                padding: 1rem 0;
            }
            &__desc {
                font-size: 1.8rem;
            }
            &__footer {
                font-size: 1.6rem;
                display: flex;
                justify-content: space-between;
                padding-top: 1rem;
                & a {
                    color: #41B883;
                }
                .article-author {
                    color: #666;
                    text-align: right;
                    max-width: 60%;
                    word-wrap: break-word;
                }
            }
        }
    }
    .news:not(:last-child) {
        border-bottom: 2px solid #f3f3f3;
    }
    @media screen and (max-width: 992px) {
        .news {
            flex-direction: column;
            &__image,
            &__image--error {
                width: 100%;
                height: auto;
                min-height: 25rem;
                min-width: 0;
            }
            &__text {
                &__info {
                    padding-top: 1rem;
                }
                &__heading {
                    word-wrap: break-word;
                }
                &__footer {
                    padding-top: 1rem;
                }
            }
        }
        .news:first-child {
            padding-top: 0;
        }
    }

    @media screen and (max-width: 992px) and (min-width: 768px) {
        .news {

            &__image,
            &__image--error {
                min-height: 35rem;
                min-width: 0;
            }
        }
    }
</style>
