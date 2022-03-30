<template>
  <div class="promotion-container">
    <div class="sidebar">
      <ItemDummy
        v-for="(item, index) in items"
        :key="index"
        :item="item"
        :drag-item-copy-start="dragItemCopyStart"
      />
    </div>

    <div class="content">
      <button class="add-section" @click="addSection">섹션 추가</button>

      <div class="section-container">
        <section
          v-for="section in sections"
          :key="section.id"
          class="section section-draggable"
          :class="`section-${section.id}`"
        >
          <div class="section-handler">
            <button class="edit-section">섹션 위치 변경</button>
            <div
              :id="'' + section.id"
              class="dropzone"
              @dragover="dragItemCopyOver($event)"
              @drop="dragItemCopyEnd($event)"
            >
              DROPZONE
            </div>
            <button class="delete-section" @click="deleteSection(section.id)">이 섹션 삭제</button>
          </div>

          <div class="section-content">
            <div class="content-layout">
              <div class="container">
                <Item
                  v-for="(item, index) in section.items"
                  :id="item.id"
                  :key="index"
                  :item="item"
                  class="item"
                  @click="modifyItem(item, section.id, item.id)"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>

  <EditModal :close-modal="closeEditModal" :confirm-edit="confirmEdit">
    <EditTitle v-if="editedItem.itemType === 'title'" :original-item="editedItem.title!" />
    <EditSummaryOnly
      v-if="editedItem.itemType === 'summaryOnly'"
      :original-item="editedItem.summaryOnly!"
    />
    <EditLandingButton
      v-if="editedItem.itemType === 'landingButton'"
      :original-item="editedItem.landingButton!"
    />
  </EditModal>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { IItemDummy, IItem, SummaryOnly, Title, LandingButton } from './components/item.types'
import Item from './components/Item.vue'
import ItemDummy from './components/ItemDummy.vue'
import { defaultData } from './components/defaultData'
import EditModal from '@/components/EditModal/EditModal.vue'
import EditSummaryOnly from './components/EditModal/EditSummaryOnly.vue'
import EditTitle from './components/EditModal/EditTitle.vue'
import EditLandingButton from './components/EditModal/EditLandingButton.vue'

interface ISection {
  id: number
  items: IItem[]
}

interface EditedItem {
  sectionId: number
  itemId: number
  itemType?: 'title' | 'summaryOnly' | 'landingButton'
  title?: Title
  summaryOnly?: SummaryOnly
  landingButton?: LandingButton
}

const items = ref<IItemDummy[]>([
  { type: 'title', name: 'Title', color: 'blue' },
  { type: 'summaryOnly', name: 'Summary Only', color: 'green' },
  { type: 'landingButton', name: 'Landing Button', color: 'purple' },
])

let sectionId = 0
let itemId = 0

const editedItem = reactive<EditedItem>({
  sectionId: 0,
  itemId: 0,
})

const sections = ref<ISection[]>([])

const closeEditModal = () => {
  document.querySelector('.modal')?.classList.remove('visible')
}

const openEditModal = () => {
  document.querySelector('.modal')?.classList.add('visible')
}

const modifyItem = (item: IItem, sectionId: number, itemId: number) => {
  editedItem.sectionId = sectionId
  editedItem.itemId = itemId
  const section = sections.value.find((section) => section.id === editedItem.sectionId)
  const modifyItem = section?.items.find((item) => item.id === editedItem.itemId) as IItem

  if (item.type === 'title') {
    editedItem.itemType = 'title'
    editedItem.title = JSON.parse(JSON.stringify(modifyItem.title)) as Title
  } else if (item.type === 'summaryOnly') {
    editedItem.itemType = 'summaryOnly'
    editedItem.summaryOnly = JSON.parse(JSON.stringify(item.summaryOnly)) as SummaryOnly
  } else if (item.type === 'landingButton') {
    editedItem.itemType = 'landingButton'
    editedItem.landingButton = JSON.parse(JSON.stringify(item.landingButton)) as LandingButton
  }

  openEditModal()
}

const confirmEdit = () => {
  const section = sections.value.find((section) => section.id === editedItem.sectionId)
  const item = section?.items.find((item) => item.id === editedItem.itemId) as IItem

  if (editedItem.itemType === 'title') {
    item.title = editedItem.title
  } else if (editedItem.itemType === 'summaryOnly') {
    item.summaryOnly = editedItem.summaryOnly
  } else if (editedItem.itemType === 'landingButton') {
    item.landingButton = editedItem.landingButton
  }
  closeEditModal()
}

const addSection = () => {
  sections.value.push({
    id: sectionId++,
    items: [],
  })
}

const deleteSection = (id: number) => {
  sections.value = sections.value.filter((section) => section.id !== id)
}

const dragItemCopyStart = (e: DragEvent) => {
  if (e.dataTransfer) {
    const copyItem = e.target as HTMLElement
    e.dataTransfer.setData('itemType', copyItem.id)
    e.dataTransfer.effectAllowed = 'move'
  }
}

const dragItemCopyOver = (e: DragEvent) => {
  e.preventDefault()

  if (e.dataTransfer) {
    e.dataTransfer.dropEffect = 'move'
  }
}

const dragItemCopyEnd = (e: DragEvent) => {
  e.preventDefault()

  if (e.dataTransfer) {
    const itemType = e.dataTransfer.getData('itemType')
    if (!itemType) {
      return
    }

    const itemDroppedSectionId = +(e.target as HTMLElement).id
    const section = sections.value.find((section) => section.id === itemDroppedSectionId)
    const item = new Object(items.value.find((item) => item.type === itemType)) as IItem

    if (section) {
      item.id = itemId++

      if (item.type === 'title') {
        item.title = defaultData[item.type] as Title
      } else if (item.type === 'summaryOnly') {
        item.summaryOnly = defaultData[item.type] as SummaryOnly
      } else if (item.type === 'landingButton') {
        item.landingButton = defaultData[item.type] as LandingButton
      }

      section.items.push(item)
    }
  }
}
</script>

<style lang="scss" scoped>
.promotion-container {
  position: relative;
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-shrink: 0;
  padding: 10px;
  overflow: scroll;
  width: 200px;
}

.content,
.no-content {
  min-height: 100vh;
  width: 100%;
  overflow: scroll;
}

.content {
  padding: 10px;
}

.add-section {
  width: 100%;
  margin-bottom: 10px;
}

.no-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.section-container {
  display: flex;
  flex-direction: column;
  gap: 10px;

  &::v-deep {
    .box.real {
      display: flex;
    }
    .box.dummy {
      display: none;
    }
  }
}

.section {
  position: relative;
  border: 1px solid black;
}

.section-handler {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: rgba(#000000, 0.2);
  .dropzone {
    width: 300px;
    height: 200px;
    border: 1px solid black;
    border-style: dotted;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.section-content {
  padding: 50px 0 70px;

  .item {
    cursor: pointer;
    transition: background-color 200ms ease;

    &:hover {
      background-color: rgba(#000000, 0.5);
    }
  }
}
</style>
