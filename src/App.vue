<template>
  <div id="nav">Hi</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
</script>

<style lang="scss">
@import 'style.scss';

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
