<template>
  <div class="maker-view">
    <Sidebar :drag-copy-start="dragItemCopyStart" />

    <Editor
      :sections="sections"
      :get-result="getResult"
      :add-section="addSection"
      :delete-section="deleteSection"
      :drag-copy-end="dragItemCopyEnd"
      :drag-copy-over="dragItemCopyOver"
      :modify-promo-item="modifyItem"
    />
  </div>

  <PromotionItemEditModal
    v-if="editedItem"
    :is-visible="isEditModalVisible"
    :close-modal="closeEditModal"
    :confirm-edit="confirmEdit"
    :edited-item="editedItem"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Sidebar from '@/components/MakerSidebar/Sidebar.vue'
import Editor from '@/components/MakerEditor/Editor.vue'
import PromotionItemEditModal from '@/components/Modal/PromotionItemEditModal/PromotionItemEditModal.vue'
import { IPromoSection, IPromoItem, PromoItemType } from '@/interfaces/promo.interfaces'
import { defaultPromoData } from '@/mockupDatas/promoData'

const DRAGGING_ITEM_ID = 'itemType'
const DRAGGING_ITEM_EFFECT = 'move'

const isEditModalVisible = ref(false)
const sections = ref<IPromoSection[]>([])
const editedItem = ref<IPromoItem>()
const editedItemInfo = {
  sectionId: 0,
  itemId: 0,
}

const getResult = (e: Event) => {
  e.stopPropagation()
}

const closeEditModal = () => {
  isEditModalVisible.value = false
}

const openEditModal = () => {
  isEditModalVisible.value = true
}

const modifyItem = (sectionId: number, itemId: number) => {
  editedItemInfo.sectionId = sectionId
  editedItemInfo.itemId = itemId

  const section = sections.value[sectionId]
  const modifyItem = section.items[itemId]

  editedItem.value = JSON.parse(JSON.stringify(modifyItem)) as IPromoItem

  openEditModal()
}

const confirmEdit = () => {
  const section = sections.value[editedItemInfo.sectionId]

  if (editedItem.value) {
    section.items[editedItemInfo.itemId] = editedItem.value
  }

  closeEditModal()
}

const addSection = () => {
  sections.value.push(JSON.parse(JSON.stringify(defaultPromoData.section)))
}

const deleteSection = (id: number) => {
  sections.value = [
    ...sections.value.slice(0, id),
    ...sections.value.slice(id + 1, sections.value.length),
  ]
}

const dragItemCopyStart = (e: DragEvent) => {
  if (e.dataTransfer) {
    const copyItem = e.target as HTMLElement
    e.dataTransfer.setData(DRAGGING_ITEM_ID, copyItem.id)
    e.dataTransfer.effectAllowed = DRAGGING_ITEM_EFFECT
  }
}

const dragItemCopyOver = (e: DragEvent) => {
  e.preventDefault()

  if (e.dataTransfer) {
    e.dataTransfer.dropEffect = DRAGGING_ITEM_EFFECT
  }
}

const dragItemCopyEnd = (e: DragEvent) => {
  e.preventDefault()

  if (!e.dataTransfer) {
    return
  }

  const itemType = e.dataTransfer.getData(DRAGGING_ITEM_ID) as PromoItemType
  const sectionId = +(e.target as HTMLElement).id
  const section = sections.value[sectionId]

  if (!section) {
    return
  }

  section.items.push({
    type: itemType,
    title: itemType === 'title' ? defaultPromoData[itemType] : undefined,
    summaryOnly: itemType === 'summaryOnly' ? defaultPromoData[itemType] : undefined,
    summaryWithImage: itemType === 'summaryWithImage' ? defaultPromoData[itemType] : undefined,
    landingButton: itemType === 'landingButton' ? defaultPromoData[itemType] : undefined,
    packageCards: itemType === 'packageCards' ? defaultPromoData[itemType] : undefined,
    notes: itemType === 'notes' ? defaultPromoData[itemType] : undefined,
    profiles: itemType === 'profiles' ? defaultPromoData[itemType] : undefined,
    profileWithHeader: itemType === 'profileWithHeader' ? defaultPromoData[itemType] : undefined,
    benefits: itemType === 'benefits' ? defaultPromoData[itemType] : undefined,
    marketingVideo: itemType === 'marketingVideo' ? defaultPromoData[itemType] : undefined,
  })
}
</script>

<style lang="scss" scoped>
.maker-view {
  position: relative;
  display: flex;
  height: 100%;
  overflow: hidden;
}
</style>
