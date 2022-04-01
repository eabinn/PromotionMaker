<template>
  <div class="sidebar">
    <PromoItemDraggable
      v-for="(item, index) in draggablePromoItems"
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
  dragCopyStart(e: DragEvent): void
}

const props = defineProps<IProps>()

const draggablePromoItems = ref<IPromoItemDraggable[]>([
  { type: 'title', name: 'Title' },
  { type: 'summaryOnly', name: 'Summary Only' },
  { type: 'summaryWithImage', name: 'Summary with Image' },
  { type: 'landingButton', name: 'Landing Button' },
  { type: 'packageCards', name: 'Package Cards' },
  { type: 'notes', name: 'Notes' },
  { type: 'profiles', name: 'Profiles' },
  { type: 'profileWithHeader', name: 'One Profile with Header' },
  { type: 'benefits', name: 'Benefits' },
  { type: 'marketingVideo', name: 'Marketing Video' },
])
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
