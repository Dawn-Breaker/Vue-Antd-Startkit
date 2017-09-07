<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './component/Home'

export default {
  name: 'app',
  components: {
    Home,
  },
}
</script>

<style lang="css">
body {
  margin: 0;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
}

</style>
