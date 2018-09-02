<template>
    <div class="menu" id="menu">
        <div class="container">
            <ul>
                <li>All</li>
                <li>Business</li>
                <li>Entertainment</li>
                <li>Health</li>
                <li>Science</li>
                <li>Sport</li>
                <li>Technology</li>
            </ul>
            <div class="country-select">
                <select  v-model="country">
                    <option value="poland">
                        PL
                    </option>
                    <option value="us">US</option>
                </select>
            </div>
        </div>
       
    </div>
</template>

<script>
export default {
    data() {
        return {
            country: 'poland'
        }
    }
}
</script>

<style lang="scss" scoped>
    .menu {
        width: 100vw;
        height: 20rem;
        background-color: #41B883;

        .container  {
            max-width: 120rem;  
            height: 20rem;
            margin: 0 auto;
            display: flex;
            justify-content: center;
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
                font-weight: 700;
                border-bottom: .2rem solid #fff;
                }
            }
        }
    .country-select select{
            height: 3rem;
            background-color: transparent;
            border: 1px solid #fff;
            color: #fff;
            font-size: 2rem;
            margin-left: 3rem;

            & option {
                color: #000;
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
                justify-content: space-between;
                align-items: center;
                box-sizing: border-box;
                padding-bottom: 1rem;
            }
            .country-select select {
            margin-left: 0;
            }
        }
    }

    @media screen and (max-width: 576px) {
        .menu {
            max-width: 20rem;
            height: calc(100vh - 70px);
        }
    }
</style>
