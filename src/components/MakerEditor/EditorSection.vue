<template>
  <section class="editor-section">
    <EditorSectionActions
      :section-id="props.sectionId"
      :edit-section="props.editSection"
      :drag-copy-over="props.dragCopyOver"
      :drag-copy-end="props.dragCopyEnd"
      :delete-section="props.deleteSection"
    />

    <div class="editor-section-content" :style="{ backgroundColor: props.section.color }">
      <div class="content-layout">
        <div class="container">
          <PromoItem
            v-for="(item, index) in props.section.items"
            :key="index"
            :item="item"
            class="edited-item"
            @click="() => props.modifyItem(props.sectionId, index)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { IPromoSection } from '@/interfaces/promo.interfaces'
import EditorSectionActions from './EditorSectionActions.vue'
import PromoItem from './PromoItem.vue'

interface IProps {
  sectionId: number
  section: IPromoSection
  editSection(sectionId: number): void
  deleteSection(): void
  modifyItem(sectionId: number, itemId: number): void
  dragCopyEnd(e: DragEvent): void
  dragCopyOver(e: DragEvent): void
}

const props = defineProps<IProps>()
</script>

<style lang="scss" scoped>
.editor-section {
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #000000;
}

.editor-section-content {
  padding: 50px 0 70px;
}

.edited-item {
  cursor: pointer;
  transition: background-color 200ms ease;

  &:hover {
    background-color: rgba(#000000, 0.5);
  }
}
</style>
