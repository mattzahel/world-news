<template>
    <footer>
        <p>&copy; {{copyrightYear}} Copyright Vue World News</p>
        <a href="https://github.com/mattzahel" target="_blank">Mateusz Zahel</a>
        <br>
        <p>Powered by <a href="https://newsapi.org" target="_blank">NewsAPI.org</a> </p>
    </footer>
</template>

<script>
export default {
    computed: {
        copyrightYear() {
            var date = new Date();
            return date.getFullYear();
        }
    }
}
</script>

<style lang="scss" scoped>
    footer {
        height: 18rem;
        background-color: #41B883;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1.4rem;

        a {
            color: #fff;
            cursor: pointer;
        }
    }
</style>
