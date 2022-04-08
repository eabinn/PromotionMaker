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
    v-if="editedItem"
    :is-visible="modalsState.itemEdit"
    :close-modal="() => updateModalsState('itemEdit', false)"
    :confirm-edit="confirmItemEdit"
    :edited-item="editedItem"
  />

  <PromoSectionEditModal
    v-if="editedSection"
    :is-visible="modalsState.sectionEdit"
    :close-modal="() => updateModalsState('sectionEdit', false)"
    :confirm-edit="confirmSectionEdit"
    :edited-section="editedSection"
    :sections-order="sectionsOrder"
    :section-items-order="sectionItemsOrder"
    :section-id="editedSectionInfo.sectionId"
  />

  <AlertModal
    :is-visible="modalsState.alert"
    :content="alertModalContent"
    :close-modal="() => updateModalsState('alert', false)"
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

type ModalType = 'itemEdit' | 'sectionEdit' | 'alert'
const modalsState = ref<{ [key in ModalType]: boolean }>({
  itemEdit: false,
  sectionEdit: false,
  alert: false,
})
const alertModalContent = ref('')

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

  console.log(promotionStore.sections)
}

const updateModalsState = (key: ModalType, open: boolean) => {
  modalsState.value[key] = open

  if (key === 'alert' && open === false) {
    alertModalContent.value = ''
  }
}

const addSection = () => {
  promotionStore.addSection()
}

const deleteSection = (id: number) => {
  promotionStore.deleteSection(id)
}

const modifySection = (sectionId: number) => {
  editedSectionInfo.sectionId = sectionId

  const section = promotionStore.getSection(sectionId)

  editedSection.value = JSON.parse(JSON.stringify(section)) as IPromoSection

  sectionsOrder.value = []
  sectionsOrder.value = promotionStore.getSections().map((section, index) => ({
    id: uniqueId++,
    originalId: index,
    isCurrent: editedSectionInfo.sectionId === index,
  }))

  sectionItemsOrder.value = []
  sectionItemsOrder.value = section.items.map((item, index) => ({
    id: uniqueId++,
    originalId: index,
  }))

  updateModalsState('sectionEdit', true)
}

const confirmSectionEdit = (sectionsOrder: number[], sectionItemsOrder: number[]) => {
  const editedData = editedSection.value as IPromoSection

  promotionStore.setSection(editedSectionInfo.sectionId, editedData)

  if (sectionsOrder.length) {
    promotionStore.setSections(sectionsOrder.map((order) => promotionStore.getSection(order)))
  }

  if (sectionItemsOrder.length) {
    const section = promotionStore.getSection(editedSectionInfo.sectionId)

    promotionStore.setSection(editedSectionInfo.sectionId, {
      ...promotionStore.getSection(editedSectionInfo.sectionId),
      items: sectionItemsOrder.map((order) => section.items[order]),
    })
  }

  updateModalsState('sectionEdit', false)
}

const modifyItem = (sectionId: number, itemId: number) => {
  editedItemInfo.sectionId = sectionId
  editedItemInfo.itemId = itemId

  const modifyItem = promotionStore.getSection(sectionId).items[itemId]

  editedItem.value = JSON.parse(JSON.stringify(modifyItem)) as IPromoItem

  updateModalsState('itemEdit', true)
}

const confirmItemEdit = () => {
  const section = promotionStore.getSection(editedItemInfo.sectionId)

  if (editedItem.value) {
    section.items[editedItemInfo.itemId] = editedItem.value
  }

  updateModalsState('itemEdit', false)
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

  const isLandingButtonExist = section.items.find((item) => item.type === 'landingButton')

  if (itemType !== 'landingButton' && isLandingButtonExist) {
    updateModalsState('alert', true)
    alertModalContent.value =
      '섹션에 랜딩 버튼이 이미 존재하는 경우 다른 아이템을 추가할 수 없습니다. 새 섹션을 만든 뒤 추가해주세요.'
    return
  }

  if (itemType === 'landingButton' && section.items.length >= 1) {
    updateModalsState('alert', true)
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
