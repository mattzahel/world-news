<template>
    <div class="topbar">
        <div class="logo">
            <img class="vue-logo" alt="Vue logo" src="../assets/logo.png"> 
            <h1>World News</h1>
        </div>
        <div class="menu" @click="openMenu">
            <font-awesome-icon icon="bars" />
        </div>
         
    </div>
</template>

<script>
export default {
    methods: {
        openMenu() {
            alert('menu opened!')
        }
    }
}
</script>

<style lang="scss" scoped>

    .topbar {
        width: 100vw;
        height: 20rem;
        background-color: #fff;
        font-family: 'Lato';
        font-weight: 700;
        display: flex;
        justify-content: center;
        padding: 2rem;
        box-sizing: border-box;
       .logo {
            display: flex;
            justify-content: center;
            align-items: center;
       }

        & h1 {
            font-size: 5.4rem;
            color: #41B883;
        }
        .vue-logo {
            max-width: 5rem;
            margin-right: 10px;
        }

        .menu {
            display: none;

            & svg {
                width: 2.5rem;
                height: 2.5rem;
                color: #666;
                cursor: pointer;
            }
        }

       
    }

    @media screen and (max-width: 992px) {
        .topbar {
            justify-content: space-between;
            height: 12rem;

            & h1 {
                font-size: 3.4rem;
            }

            .menu {
            display: flex;
            justify-content: center;
            align-items: center;
            }
        }
        
    }

    @media screen and (max-width: 576px) {
        .topbar {
            height: 7rem;

            & h1 {
                font-size: 2.8rem;
            }
        }
    }
</style>
