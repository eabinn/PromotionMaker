<template>
  <div class="modal alert-modal" :class="{ visible: props.isVisible }">
    <div class="modal-content">
      <div class="content">{{ props.content }}</div>
      <div class="actions">
        <button class="btn btn-primary" @click="props.closeModal">확인</button>
      </div>
    </div>

    <div class="modal-shadow" />
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  isVisible: boolean
  content: string
  closeModal(): void
}

const props = defineProps<IProps>()
</script>

<style lang="scss">
@import '@/assets/scss/modal/modal';
</style>
