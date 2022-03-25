<template>
  <div class="container">
    <div class="content"></div>
    <div class="menu">
      <AComponent />
      <BComponent />
      <CComponent />
    </div>
  </div>
</template>

<script lang="ts" setup>
import AComponent from './components/AComponent.vue'
import BComponent from './components/BComponent.vue'
import CComponent from './components/CComponent.vue'
</script>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.content {
  border: 1px solid black;
  min-height: 80vh;
  width: 100%;
}

.menu {
  display: flex;
  gap: 20px;
  justify-content: center;
}
</style>
