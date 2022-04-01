<template>
  <div
    :id="props.item.type"
    class="promo-item-draggable"
    :draggable="true"
    @dragstart="props.dragCopyStart"
  >
    <span class="text">{{ props.item.name }}</span>
  </div>
</template>

<script lang="ts" setup>
import { IPromoItemDraggable } from '@/interfaces/promo.interfaces'

interface IProps {
  item: IPromoItemDraggable
  dragCopyStart(e: DragEvent): void
}

const props = defineProps<IProps>()
</script>

<style lang="scss" scoped>
.promo-item-draggable {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  min-height: 130px;
  border: 1px solid #000000;

  .text {
    font-weight: bold;
  }
}
</style>
