<template>
  <div id="app">
    <chat />
  </div>
</template>

<script>
import Chat from '@/components/Chat';

export default {
  name: 'App',

  components: {
    Chat,
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
ul, ol {
  padding: 0;
  margin: 0;
  list-style: none;
}
#app {
  position: fixed;
  right: 0;
  bottom: 30px;
  z-index: 10000;
  background-color: transparent;
  border-radius: 10px;
  padding-top: 30px;
  padding-right: 30px;
  overflow: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
