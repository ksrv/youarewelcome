<template>
  <div :class="[ 'chat', { collapsed } ]">
    <close-button @close="close" />
    <show-button @show="show" />
    <message-box />
    <message-form />
  </div>
</template>

<script>
import CloseButton from './CloseButton';
import ShowButton from './ShowButton';
import MessageBox from './MessageBox';
import MessageForm from './MessageForm';

export default {
  name: 'Chat',

  components: {
    CloseButton,
    ShowButton,
    MessageBox,
    MessageForm,
  },

  data: () => ({
    collapsed: true
  }),

  methods: {
    close () {
      this.collapsed = true;
    },

    show () {
      this.collapsed = false;
    }
  }
};
</script>


<style lang="scss">
.chat {
  display: block;
  position: relative;
  background-color: #2d9ee0;
  border-radius: 10px;
  border-width: 2px;
  border-style: solid;
  border-color: transparent;
  width: 300px;
  height: 500px;
  max-height: 500px;
  transition: all 0.5s;
  &.collapsed {
    width: 100px;
    height: 50px;
  }
}

</style>
