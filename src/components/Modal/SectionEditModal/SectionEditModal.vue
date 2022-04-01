<template>
  <EditModal :close-modal="props.closeModal" :confirm-edit="props.confirmEdit"></EditModal>
</template>

<script lang="ts" setup>
import EditModal from '../common/EditModal.vue'

interface IProps {
  closeModal(): void
  confirmEdit(): void
}

const props = defineProps<IProps>()
</script>

<style lang="scss"></style>
