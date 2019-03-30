<template>
  <button type="button" class="close-button" @click="$emit('close')">
    <svg-close class="icon" />
  </button>
</template>

<script>
import SvgClose from '@/components/icons/Close';

export default {
  name: 'Close-Button',

  components: {
    SvgClose,
  }
}
</script>


<style lang="scss">
.chat {
  .close-button {
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-width: 2px;
    border-style: solid;
    border-color: #2d9ee0;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    top: -30px;
    right: -30px;
    cursor: pointer;

    &:hover, &:focus {
      background-color: rgba(#2d9ee0, 0.3);
    }

    &:focus {
      outline: none;
    }

    .icon {
      width: 12px;
      height: 12px;
    }
  }
  &.collapsed {
    .close-button {
      display: none;
    }
  }
}
</style>


