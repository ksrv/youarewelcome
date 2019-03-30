<template>
  <li :class="[ 'message-item', { '--me': me, '--e': e }]">
    <span class="message-item__content">{{ text }}</span>
  </li>
</template>


<script>

import { get } from 'vuex-pathify';

export default {
  name: 'Chat-Message',

  props: {
    text: {
      type: String,
      default: ''
    },
    me: {
      type: Boolean,
      default: false
    },
    e: {
      type: Boolean,
      default: false
    }
  }
};

</script>

<style lang="scss">
.message-item {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 0;
  border: 1px solid transparent;
  &__content {
    display: flex;
    max-width: 70%;
    padding: 10px 15px;
    background-color: #cdcdcd;
    word-wrap: break-word;
    text-align: left;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 12px;
  }
  &.--me {
    flex-direction: row-reverse;
    .message-item__content {
      color: #fff;
      background-color: #2d9ee0;
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 0;
    }
  }
  &.--e {
    .message-item__content {
      color: #fff;
      background-color: red;
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 0;
    }
  }
}

</style>
