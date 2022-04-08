<template>
  <div class="maker-view">
    <Sidebar :drag-copy-start="dragItemCopyStart" :items="promotionStore.draggablePromoItems" />

    <Editor
      :sections="promotionStore.sections"
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
    v-if="editInfo.sectionItem"
    :is-visible="!!editInfo.sectionItem"
    :close-modal="resetEditInfo"
    :confirm-edit="confirmItemEdit"
    :edited-item="editInfo.sectionItem"
  />

  <PromoSectionEditModal
    v-if="editInfo.section"
    :is-visible="!!editInfo.section"
    :close-modal="resetEditInfo"
    :confirm-edit="confirmSectionEdit"
    :edited-section="editInfo.section"
    :sections-order="editInfo.sectionsOrder"
    :section-items-order="editInfo.sectionItemsOrder"
    :section-id="editInfo.sectionId!"
  />

  <AlertModal
    :is-visible="!!alertModalContent"
    :content="alertModalContent"
    :close-modal="() => (alertModalContent = '')"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Sidebar from '@/components/MakerSidebar/Sidebar.vue'
import Editor from '@/components/MakerEditor/Editor.vue'
import PromoItemEditModal from '@/components/Modal/PromoItemEditModal/PromoItemEditModal.vue'
import PromoSectionEditModal from '@/components/Modal/PromoSectionEditModal/PromoSectionEditModal.vue'
import AlertModal from '@/components/Modal/AlertModal/AlertModal.vue'
import { IPromoSection, IPromoItem, PromoItemType } from '@/interfaces/promo.interfaces'
import promotionStore from '@/stores/promotionStore'

const DRAGGING_ITEM_ID = 'itemType'
const DRAGGING_ITEM_EFFECT = 'move'

const alertModalContent = ref('')
const editInfo = ref<{
  section: IPromoSection | null
  sectionItem: IPromoItem | null
  sectionId: number | undefined
  itemId: number | undefined
  sectionsOrder: { originalId: number; isCurrent: boolean; id: number }[]
  sectionItemsOrder: { originalId: number; id: number }[]
}>({
  section: null,
  sectionItem: null,
  sectionId: undefined,
  itemId: undefined,
  sectionsOrder: [],
  sectionItemsOrder: [],
})
let uniqueId = 0

const getResult = (e: Event) => {
  e.stopPropagation()

  console.log(promotionStore.sections)
}

const addSection = () => {
  promotionStore.addSection()
}

const deleteSection = (id: number) => {
  promotionStore.deleteSection(id)
}

const resetEditInfo = () => {
  editInfo.value = {
    section: null,
    sectionItem: null,
    sectionId: undefined,
    itemId: undefined,
    sectionsOrder: [],
    sectionItemsOrder: [],
  }
}

const modifySection = (sectionId: number) => {
  editInfo.value.sectionId = sectionId

  const sections = promotionStore.getSections()
  const section = promotionStore.getSection(editInfo.value.sectionId)

  editInfo.value.section = JSON.parse(JSON.stringify(section)) as IPromoSection
  editInfo.value.sectionsOrder = sections.map((_, index) => ({
    id: uniqueId++,
    originalId: index,
    isCurrent: editInfo.value.sectionId === index,
  }))
  editInfo.value.sectionItemsOrder = section.items.map((_, index) => ({
    id: uniqueId++,
    originalId: index,
  }))
}

const confirmSectionEdit = (sectionsOrder: number[], sectionItemsOrder: number[]) => {
  const editSection = editInfo.value.section
  const editSectionId = editInfo.value.sectionId

  if (!editSection || editSectionId === undefined) {
    return
  }

  promotionStore.setSection(editSectionId, editSection)

  if (sectionsOrder.length) {
    promotionStore.setSections(sectionsOrder.map((order) => promotionStore.getSection(order)))
  }

  if (sectionItemsOrder.length) {
    const section = promotionStore.getSection(editSectionId)
    promotionStore.setSection(editSectionId, {
      ...section,
      items: section.items.length ? sectionItemsOrder.map((order) => section.items[order]) : [],
    })
  }

  resetEditInfo()
}

const modifyItem = (sectionId: number, itemId: number) => {
  editInfo.value.sectionId = sectionId
  editInfo.value.itemId = itemId

  const modifyItem = promotionStore.getSection(sectionId).items[itemId]

  editInfo.value.sectionItem = JSON.parse(JSON.stringify(modifyItem)) as IPromoItem
}

const confirmItemEdit = () => {
  const editItem = editInfo.value.sectionItem
  const editItemId = editInfo.value.itemId
  const editSectionId = editInfo.value.sectionId

  if (!editItem || editItemId === undefined || editSectionId === undefined) {
    return
  }

  const section = promotionStore.getSection(editSectionId)

  section.items[editItemId] = editItem

  resetEditInfo()
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
  const section = promotionStore.getSection(sectionId)

  if (!section) {
    return
  }

  const isLandingButtonExist = section.items.find((item) => item && item.type === 'landingButton')

  if (itemType !== 'landingButton' && isLandingButtonExist) {
    alertModalContent.value =
      '섹션에 랜딩 버튼이 이미 존재하는 경우 다른 아이템을 추가할 수 없습니다. 새 섹션을 만든 뒤 추가해주세요.'
    return
  }

  if (itemType === 'landingButton' && section.items.length >= 1) {
    alertModalContent.value =
      '랜딩 버튼의 경우 섹션에 다른 아이템들이 추가되어 있는 경우 추가될 수 없습니다.'
    return
  }

  promotionStore.addSectionItem(sectionId, itemType)
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
