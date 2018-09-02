<template>
  <div id="app">
    <appTopbar />
  </div>
</template>

<script>
import appTopbar from './components/appTopbar'

export default {
  name: 'app',
  components: {
   appTopbar
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
    font-family: 'Lato';
  }

</style>
