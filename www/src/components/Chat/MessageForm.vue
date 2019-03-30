<template>
  <form 
    ref="form"
    @submit.prevent="send"
    class="message-form"
    >
    <input
      ref="Input"
      v-model="message"
      @input="$emit('input', $event.target.value)"
      type="text" 
      placeholder="Напишите сообщение"
      required="true"
      class="message-input" 
      />
    <button
      type="submit"
      class="send-button"
      >
      <Svg-Send />
    </button>
  </form>
</template>


<script>
import { call } from 'vuex-pathify';
import SvgSend from '@/components/icons/Send';

export default {
  name: 'Chat-Message-Form',

  components: {
    SvgSend,
  },

  data: () => ({
    message: ''
  }),
  
  methods: {
    callSend: call('Chat/send'),

    async send () {
      await this.callSend(this.message);
      this.message = '';
      this.$refs.Input.focus();
      this.$bus.emit('scroll');
    }
  }
};
</script>


<style lang="scss">
.chat {
  .message-form {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    min-height: 50px;
    padding: 0;
    background-color: #2d9ee0;
    border-top-width: 2px;
    border-top-style: solid;
    border-top-color: transparent;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  &.collapsed {
    .message-form {
      display: none;
    }
  }
  .message-input {
    border-width: 0;
    border-bottom-left-radius: 8px;
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    height: 48px;
    padding: 16px 0;
    color: #838383;
    font-size: 16px;
    padding: 0 15px;

    &:focus {
      outline: none;
    }
  }
  .send-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-width: 0;
    height: 48px;
    width: 50px;
    background-color: #fff;
    border-left-width: 2px;
    border-left-color: transparent;
    border-left-color: #2d9ee0;
    border-bottom-right-radius: 8px;
    transition: all 0.3s;
    cursor: pointer;

    &:hover, &:focus {
      background-color: rgba(255,255,255, 0.3);
    }

    &:focus {
      outline: none;
    }
  }
}
</style>
