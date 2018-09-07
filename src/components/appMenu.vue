<template>
    <div class="menu" id="menu">
        <div class="container">
            <ul>
                <li v-for="category in categories" class="category-item" @click='changeCategory' :key="category.index">{{category}}</li>
            </ul>
            <div class="country-select">
                <select @change='changeCountry' id="country-input">
                    <option v-for="country in countries" :key="country.index" :value="country.value">
                        {{country.fullVal | firstCapital}}
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        country: String,
        category: String
    },
    data() {
        return {
            categories: ['All', 'Business', 'Entertainment', 'Health', 'Science', 'Sport', 'Technology'],
            countries: [
                {value: 'pl', fullVal: 'Poland'},
                {value: 'us', fullVal: 'United States'},
                {value: 'gb', fullVal: 'Great Britain'},
                {value: 'ca', fullVal: 'Canada'},
                {value: 'mx', fullVal: 'Mexico'},
                {value: 'fr', fullVal: 'France'},
                {value: 'de', fullVal: 'Germany'},
                {value: 'nl', fullVal: 'Netherland'},
                {value: 'be', fullVal: 'Belgium'},
                {value: 'it', fullVal: 'Italy'},
                {value: 'ie', fullVal: 'India'},
                {value: 'ru', fullVal: 'Russia'}
            ]
        }
    },
    methods: {
            changeCountry() {
                this.$emit('changeCountry',
                    document.querySelector('#country-input').value)
            },
            changeCategory(e) {
                this.$emit('changeCategory', e.target.innerText.toLowerCase())

                var categories = document.querySelectorAll('.category-item');
                for (var i = 0; i < categories.length; i++) {
                    categories[i].classList.remove('active')

                    e.target.classList.add('active')
                }
            },
        },
        filters: {
            firstCapital(str) {
                return str.replace(/\w\S*/g, function (txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                });

            }
        }
    }
</script>

<style lang="scss" scoped>
    .menu {
        width: 100vw;
        height: 20rem;
        background-color: #41B883;
        .container {
            max-width: 120rem;
            height: 20rem;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        & ul {
            list-style-type: none;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 2rem;
            color: #fff;
            & li {
                cursor: pointer;
                transition: all .2s ease-in-out;
                border-bottom: .2rem solid transparent;
                margin: 2rem;
                &:hover {
                    border-bottom: .2rem solid #fff;
                }
            }
        }
        .country-select select {
            min-height: 3rem;
            background-color: transparent;
            border: 1px solid #fff;
            color: #fff;
            font-size: 2rem;
            margin-left: 3rem;
            padding: 0 1rem;
            & option {
                color: #000;
            }
        }
        .active {
            font-weight: 700;
            border-bottom: .2rem solid #fff;
        }
    }
    @media screen and (max-width: 1200px) {
        .menu {
            .container {
                justify-content: space-around;
                padding: 0 6rem;
                box-sizing: border-box;
            }

            .country-select select {
                max-width: 12rem;
            }
        }
    }

    @media screen and (max-width: 992px) {
        .menu {
            display: none;
            max-width: 30vw;
            height: calc(100vh - 120px);
            position: absolute;
            right: 0;
            z-index: 5;
            box-shadow: -3px 3px 5px #ddd;
            & ul {
                flex-direction: column;
                height: auto;
            }
            .container {
                height: 100%;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                box-sizing: border-box;
                padding-bottom: 1rem;
            }
            .country-select select {
                margin-left: 0;
                max-width: none;
            }
        }
    }
    @media screen and (max-width: 576px) {
        .menu {
            max-width: 20rem;
            height: calc(100vh - 70px);
        }
    }
    @media screen and (orientation: landscape) {
        .menu {
            height: auto;
            .container {
                height: auto;
            }
        }
    }
</style>
