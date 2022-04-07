<template>
  <div class="sidebar">
    <PromoItemDraggable
      v-for="(item, index) in props.items"
      :key="index"
      :item="item"
      :drag-copy-start="props.dragCopyStart"
    />
  </div>
</template>

<script lang="ts" setup>
import { IPromoItemDraggable } from '@/interfaces/promo.interfaces'
import { ref } from 'vue'
import PromoItemDraggable from './PromoItemDraggable.vue'

interface IProps {
  items: IPromoItemDraggable[]
  dragCopyStart(e: DragEvent): void
}

const props = defineProps<IProps>()
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 10px;
  padding: 10px;
  overflow: scroll;
}
</style>
