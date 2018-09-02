<template>
  <div id="app">
    <appTopbar/>
    <appMenu />
  </div>
</template>

<script>
import appTopbar from './components/appTopbar'
import appMenu from './components/appMenu'

export default {
  name: 'app',
  components: {
   appTopbar,
   appMenu
  }
}
</script>

<style lang="scss">
  *, *::after, *::before {
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
  }

</style>
