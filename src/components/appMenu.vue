<template>
    <div class="menu" id="menu">
        <ul>
            <li>All</li>
            <li>Business</li>
            <li>Entertainment</li>
            <li>Health</li>
            <li>Science</li>
            <li>Sport</li>
            <li>Technology</li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .menu {
        width: 100vw;
        height: 20rem;
        background-color: #41B883;
        
        & ul {
            list-style-type: none;
            max-width: 120rem;
            height: 100%;
            margin: 0 auto;
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
                justify-content: flex-start;

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
