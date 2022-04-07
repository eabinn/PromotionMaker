<template>
  <form>
    <slot />
  </form>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}
</style>
