<template>
  <Heading msg="Résumé Generator"/>
  <SplitVue />
  <ToolbarVue />
</template>

<script>
import Heading from './components/Heading.vue'
import SplitVue from './components/SplitVue.vue'
import ToolbarVue from './components/ToolbarVue.vue'

export default {
  name: 'App',
  components: {
    Heading,
    SplitVue,
    ToolbarVue
  }
}
</script>

<style lang="scss">
@import '@/assets/_variables.scss';
body {
  margin: 0;
  background-color: $gris;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $darkish;
  margin-top: 30px;
  height: calc(100vh - 30px);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
