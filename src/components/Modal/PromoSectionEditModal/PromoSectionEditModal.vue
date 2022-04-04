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
    />
  </EditModal>
</template>

<script lang="ts" setup>
import { IPromoSection } from '@/interfaces/promo.interfaces'
import EditModal from '../common/EditModal.vue'
import EditSection from './EditSection.vue'

interface IProps {
  isVisible: boolean
  closeModal(): void
  confirmEdit(sectionsOrder: number[], sectionItemsOrder: number[]): void
  editedSection: IPromoSection
  sectionsOrder: { originalId: number; isCurrent: boolean }[]
  sectionItemsOrder: { originalId: number }[]
}

const props = defineProps<IProps>()

let sectionsOrder: number[] = []
let sectionItemsOrder: number[] = []

const updateSectionsOrder = (order: number[]) => (sectionsOrder = order)

const updateSectionItemsOrder = (order: number[]) => (sectionItemsOrder = order)

const confirmSectionEdit = () => {
  props.confirmEdit(sectionsOrder, sectionItemsOrder)
}
</script>

<style lang="scss"></style>
