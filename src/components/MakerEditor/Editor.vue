<template>
  <div class="editor">
    <EditorActions :add-section="props.addSection" :get-result="props.getResult" />

    <EditorSection
      v-for="(section, index) in props.sections"
      :key="index"
      :section="section"
      :section-id="index"
      :edit-section="props.editSection"
      :drag-copy-over="props.dragCopyOver"
      :drag-copy-end="props.dragCopyEnd"
      :delete-section="() => props.deleteSection(index)"
      :modify-item="props.modifyPromoItem"
    />
  </div>
</template>

<script lang="ts" setup>
import { IPromoSection } from '@/interfaces/promo.interfaces'
import EditorActions from './EditorActions.vue'
import EditorSection from './EditorSection.vue'

interface IProps {
  sections: IPromoSection[]
  editSection(sectionId: number): void
  getResult(e: Event): void
  addSection(): void
  deleteSection(id: number): void
  dragCopyEnd(e: DragEvent): void
  dragCopyOver(e: DragEvent): void
  modifyPromoItem(sectionId: number, itemId: number): void
}

const props = defineProps<IProps>()
</script>

<style lang="scss" scoped>
.editor {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  gap: 30px;
  overflow: scroll;
}
</style>
