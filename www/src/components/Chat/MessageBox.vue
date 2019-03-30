<template>
  <div class="message-box">
    <transition-group
      ref="Messages"
      name="list"
      mode="out-in"
      appear
      tag="ul"
      class="message-list"
      >
      <message-item
        v-for="(message, index) in messages"
        v-bind="message"
        :key="`key-${ index }`"
        />
    </transition-group>
  </div>
</template>


<script>
import { get } from 'vuex-pathify';
import MessageItem from './MessageItem';

export default {
  name: 'Chat-Message-Box',

  components: {
    MessageItem,
  },

  computed: {
    messages: get('Chat/messages'),
  },

  methods: {
    scroll () {
      this.$refs.Messages.$el.scrollTop = this.$refs.Messages.$el.scrollHeight;
    },
  },

  watch: {
    'messages.length' () {
      setTimeout(this.scroll, 100);
    }
  }
};
</script>


<style lang="scss">
.chat {
  .message-box {
    height: calc(100% - 50px);
    border: none;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    background-color: #fff;
    padding-top: 10px;
  }
  &.collapsed {
    .message-box {
      display: none;
    }
  }
  .message-list {
    display: flex;
    flex-flow: column nowrap;
    height: 100%;
    padding: 0 5px;
    scroll-behavior: smooth;
    overflow-x: hidden;
    overflow-y: auto;

    & > :first-child {
      margin-top: auto !important;      
    }
  }
}
</style>
