<template>
    <div class="newsHeader">
        <h2 class="newsHeader__heading">Top news in {{country | upperCase }}</h2>
        <p class="newsHeader__date">
            <span class="date-day">{{getDay}}</span>, {{getMonth}} {{getDayNumber}}
        </p>
    </div>
</template>

<script>
export default {
    props: {
            country: String,
    },
    computed: {
        getDay(){
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            var d = new Date();
            var dayName = days[d.getDay()];
            return dayName;
        },
        getMonth() {
            const months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"
            ];
            const d = new Date();
            const monthName = months[d.getMonth()]
            return monthName
        },
        getDayNumber() {
            const d = new Date();
            return d.getDate();
        }
    },
    filters: {
        upperCase(value) {
            return value.toUpperCase()      
  }
}
}
</script>

<style lang="scss" scoped>
    .newsHeader {
        max-width: 120rem;
        margin: 5rem auto;
        display: flex;
        justify-content: space-between;
        border-bottom: 2px solid #999;
        padding-bottom: 3rem;
        &__heading {
            font-size: 3.6rem;
            color: #666;
            font-weight: 700;
        }
        &__date {
            font-size: 3rem;
            color: #666;
        }
        .date-day {
            font-weight: 700;
        }
    }

    @media screen and (max-width: 1200px) {
        .newsHeader {
            justify-content: space-around;
            margin: 5rem 2rem;
        }
    }

    @media screen and (max-width: 992px) {
        .newsHeader {
            &__heading {
                font-size: 2.8rem;
            }
            &__date {
                font-size: 2.4rem;
            }
        }
    }

     @media screen and (max-width: 576px) {
        .newsHeader {
            justify-content: space-between;

            &__heading {
                font-size: 2rem;
            }
            &__date {
                font-size: 1.8rem;
                text-align: right;
            }
        }
    }
</style>
