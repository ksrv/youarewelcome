<template>
  <button @click="$emit('show')" type="button" class="show-button">
    <svg-plus class="icon" />
  </button>
</template>


<script>
import SvgPlus from '@/components/icons/Plus';

export default {
  name: 'Show-Button',

  components: {
    SvgPlus,
  }
}
</script>


<style lang="scss">
.chat {
  .show-button {
    display: none;
  }
  &.collapsed {
    .show-button {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 0;
      border-radius: 18px;
      background-color: #2d9ee0;
      width: 100%;
      height: 100%;
      padding: 0;
      .icon {
        width: 24px;
        height: 24px;
      }
    }
  }
}
</style>
