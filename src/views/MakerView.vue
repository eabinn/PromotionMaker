<template>
  <div class="maker-view">
    <Sidebar :drag-copy-start="dragItemCopyStart" />

    <Editor
      :sections="sections"
      :edit-section="modifySection"
      :get-result="getResult"
      :add-section="addSection"
      :delete-section="deleteSection"
      :drag-copy-end="dragItemCopyEnd"
      :drag-copy-over="dragItemCopyOver"
      :modify-promo-item="modifyItem"
    />
  </div>

  <PromoItemEditModal
    v-if="editedItem"
    :is-visible="isItemEdited"
    :close-modal="() => handleEditModal('item', false)"
    :confirm-edit="confirmItemEdit"
    :edited-item="editedItem"
  />

  <PromoSectionEditModal
    v-if="editedSection"
    :is-visible="isSectionEdited"
    :close-modal="() => handleEditModal('section', false)"
    :confirm-edit="confirmSectionEdit"
    :edited-section="editedSection"
    :sections-order="sectionsOrder"
    :section-items-order="sectionItemsOrder"
    :section-id="editedSectionInfo.sectionId"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Sidebar from '@/components/MakerSidebar/Sidebar.vue'
import Editor from '@/components/MakerEditor/Editor.vue'
import PromoItemEditModal from '@/components/Modal/PromoItemEditModal/PromoItemEditModal.vue'
import PromoSectionEditModal from '@/components/Modal/PromoSectionEditModal/PromoSectionEditModal.vue'
import { IPromoSection, IPromoItem, PromoItemType } from '@/interfaces/promo.interfaces'
import { defaultPromoData } from '@/mockupDatas/promoData'

const DRAGGING_ITEM_ID = 'itemType'
const DRAGGING_ITEM_EFFECT = 'move'

const isItemEdited = ref(false)
const isSectionEdited = ref(false)
const sections = ref<IPromoSection[]>([])
const editedSection = ref<IPromoSection>()
const editedSectionInfo = {
  sectionId: 0,
}
const sectionsOrder = ref<{ originalId: number; isCurrent: boolean; id: number }[]>([])
const sectionItemsOrder = ref<{ originalId: number; id: number }[]>([])
const editedItem = ref<IPromoItem>()
const editedItemInfo = {
  sectionId: 0,
  itemId: 0,
}
let uniqueId = 0

const getResult = (e: Event) => {
  e.stopPropagation()

  console.log(sections.value)
}

const handleEditModal = (editedType: 'item' | 'section', setVisible: boolean) => {
  if (editedType === 'item') {
    isItemEdited.value = setVisible
  } else if (editedType === 'section') {
    isSectionEdited.value = setVisible
  }
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

const modifySection = (sectionId: number) => {
  editedSectionInfo.sectionId = sectionId

  const section = sections.value[sectionId]

  editedSection.value = JSON.parse(JSON.stringify(section)) as IPromoSection

  sectionsOrder.value = []
  sectionsOrder.value = sections.value.map((section, index) => ({
    id: uniqueId++,
    originalId: index,
    isCurrent: editedSectionInfo.sectionId === index,
  }))

  sectionItemsOrder.value = []
  sectionItemsOrder.value = section.items.map((item, index) => ({
    id: uniqueId++,
    originalId: index,
  }))

  handleEditModal('section', true)
}

const confirmSectionEdit = (sectionsOrder: number[], sectionItemsOrder: number[]) => {
  const editedData = editedSection.value as IPromoSection

  sections.value[editedSectionInfo.sectionId] = editedData

  if (sectionsOrder.length) {
    sections.value = sectionsOrder.map((order) => {
      return sections.value[order]
    })
  }

  if (sectionItemsOrder.length) {
    sections.value[editedSectionInfo.sectionId].items = sectionItemsOrder.map((order) => {
      return sections.value[editedSectionInfo.sectionId].items[order]
    })
  }

  handleEditModal('section', false)
}

const modifyItem = (sectionId: number, itemId: number) => {
  editedItemInfo.sectionId = sectionId
  editedItemInfo.itemId = itemId

  const section = sections.value[sectionId]
  const modifyItem = section.items[itemId]

  editedItem.value = JSON.parse(JSON.stringify(modifyItem)) as IPromoItem

  handleEditModal('item', true)
}

const confirmItemEdit = () => {
  const section = sections.value[editedItemInfo.sectionId]

  if (editedItem.value) {
    section.items[editedItemInfo.itemId] = editedItem.value
  }

  handleEditModal('item', false)
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
