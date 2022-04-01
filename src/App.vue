<template>
  <div class="content">
    <Header />

    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts" setup>
import Header from './components/Header/Header.vue'
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

main {
  overflow: scroll;
}
</style>
