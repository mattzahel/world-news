<template>
    <div class="topbar">
        <div class="logo">
            <img class="vue-logo" alt="Vue logo" src="../assets/logo.png"> 
            <h1>World News</h1>
        </div>
        <div class="menu-toggle">
            <font-awesome-icon 
                icon="bars" 
                v-if="opened === false" 
                @click="openMenu"/>
            <font-awesome-icon 
                icon="times" 
                v-if="opened === true" 
                @click="closeMenu"/>
        </div>
         
    </div>
</template>

<script>
export default {
    data() {
        return {
            opened: false
        }
    },
    methods: {
        openMenu() {
           this.opened=true;
            document.querySelector('#menu').style.display="block";
        },
        closeMenu() {
            this.opened=false;
            document.querySelector('#menu').style.display="none";
        }
    }
}
</script>

<style lang="scss" scoped>

    .topbar {
        width: 100vw;
        height: 20rem;
        background-color: #fff;
        font-family: 'Montserrat', sans-serif;
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

        .menu-toggle {
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

            .menu-toggle {
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
