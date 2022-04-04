<template>
  <div class="modal title-edit-modal" :class="{ visible: props.isVisible }">
    <div class="modal-content">
      <div class="form">
        <slot />
      </div>
      <div class="actions">
        <button class="btn btn-default" @click="props.closeModal">취소</button>
        <button class="btn btn-primary" @click="props.confirmEdit">수정</button>
      </div>
    </div>

    <div class="modal-shadow" />
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  isVisible: boolean
  closeModal(): void
  confirmEdit(): void
}

const props = defineProps<IProps>()
</script>

<style lang="scss">
@import '@/assets/scss/modal/modal';
</style>
