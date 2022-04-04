<template>
  <div class="editor-actions">
    <button @click="props.getResult($event)">에디터 결과</button>
    <button class="btn btn-primary" @click="props.addSection">섹션 추가</button>
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  getResult(e: Event): void
  addSection(): void
}

const props = defineProps<IProps>()
</script>

<style lang="scss" scoped>
.editor-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}
</style>
