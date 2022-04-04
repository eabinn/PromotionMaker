<template>
  <EditModal
    :is-visible="props.isVisible"
    :close-modal="props.closeModal"
    :confirm-edit="confirmSectionEdit"
  >
    <EditSection
      :item="props.editedSection!"
      :sections-order="props.sectionsOrder"
      :section-items-order="props.sectionItemsOrder"
      :update-sections-order="updateSectionsOrder"
      :update-section-items-order="updateSectionItemsOrder"
      :section-id="props.sectionId"
    />
  </EditModal>
</template>

<script lang="ts" setup>
import { IPromoSection } from '@/interfaces/promo.interfaces'
import { ref } from 'vue'
import EditModal from '../common/EditModal.vue'
import EditSection from './EditSection.vue'

interface IProps {
  isVisible: boolean
  closeModal(): void
  confirmEdit(sectionsOrder: number[], sectionItemsOrder: number[]): void
  editedSection: IPromoSection
  sectionsOrder: { originalId: number; isCurrent: boolean; id: number }[]
  sectionItemsOrder: { originalId: number; id: number }[]
  sectionId: number
}

const props = defineProps<IProps>()

const sectionsOrder = ref<number[]>([])
const sectionItemsOrder = ref<number[]>([])

const updateSectionsOrder = (order: number[]) => {
  sectionsOrder.value = order
}

const updateSectionItemsOrder = (order: number[]) => {
  sectionItemsOrder.value = order
}

const confirmSectionEdit = () => {
  props.confirmEdit(sectionsOrder.value, sectionItemsOrder.value)
}
</script>

<style lang="scss"></style>
