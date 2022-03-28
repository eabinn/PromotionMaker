<template>
  <div class="container">
    <div class="sidebar">
      <Item
        v-for="(item, index) in items"
        :key="index"
        :item="item"
        :show-real="false"
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
            ></div>
            <button class="delete-section" @click="deleteSection(section.id)">이 섹션 삭제</button>
          </div>

          <div class="section-content">
            <Item
              v-for="(item, index) in section.items"
              :key="index"
              :item="item"
              :show-real="true"
            />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Item from './components/Item.vue'

interface IItem {
  id: number
  type: string
  color: string
}

interface ISection {
  id: number
  items: IItem[]
}

const items = ref<IItem[]>([
  { type: 'A', color: 'red', id: 0 },
  { type: 'B', color: 'blue', id: 1 },
  { type: 'C', color: 'orange', id: 2 },
  { type: 'D', color: 'cyan', id: 3 },
  { type: 'E', color: 'purple', id: 4 },
  { type: 'F', color: 'green', id: 5 },
  { type: 'G', color: 'black', id: 6 },
])

const sections = ref<ISection[]>([])
let sectionIndex = 0

const modalRef = ref()

const addSection = () => {
  sections.value.push(
    new Object({
      id: sectionIndex++,
      items: [],
    }) as ISection
  )
}

const deleteSection = (id: number) => {
  sections.value = sections.value.filter((section) => section.id !== id)
}

const dragItemCopyStart = (e: DragEvent) => {
  if (e.dataTransfer) {
    const copyItem = e.target as HTMLElement
    e.dataTransfer.setData('itemId', copyItem.id)
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
    const itemId = e.dataTransfer.getData('itemId')
    if (!itemId) {
      return
    }
    const item = new Object(items.value.find((item) => item.id === +itemId)) as IItem
    const itemDroppedSectionId = (e.target as HTMLElement).id
    const section = sections.value.find((section) => section.id === +itemDroppedSectionId)
    section?.items.push(item)
  }
}

const dragItemStart = (e: DragEvent) => {
  const target = e.target as HTMLElement
  target.classList.add('dragging')
  target.classList.remove('dummy')
  target.classList.add('real')
}

const dragItemEnd = (e: DragEvent) => {
  const target = e.target as HTMLElement
  target.classList.remove('dragging')
}

const dragItemOver = (e: DragEvent) => {
  e.preventDefault()
  const target = e.target as HTMLElement

  const container = target.parentElement as HTMLElement
  const afterElement = getDragAfterElement(container, e.clientY, [
    ...container.querySelectorAll('.real.draggable:not(.dragging)'),
  ])
  const draggable = document.querySelector('.dragging') as HTMLElement
  if (afterElement === null) {
    container.appendChild(draggable)
  } else {
    container.insertBefore(draggable, afterElement)
  }
}

function getDragAfterElement(
  container: HTMLElement,
  yOffset: number,
  draggableElements: Element[]
) {
  //const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

  return draggableElements.reduce(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (closest: any, child) => {
      const box = child.getBoundingClientRect()
      const offset = yOffset - box.top - box.height / 2
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child }
      } else {
        return closest
      }
    },
    { offset: Number.NEGATIVE_INFINITY, element: null }
  ).element
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  overflow: scroll;
  width: 15%;
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
  padding-top: 10px;

  .dropzone {
    width: 300px;
    height: 200px;
    border: 1px solid black;
    border-style: dotted;
  }
}

.section-content {
  padding: 50px 0 70px;
}

.modal {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1024;

  &.show {
    display: flex;
  }
  &-content {
    min-width: 500px;
    min-height: 300px;
    z-index: 1025;
    background-color: #ffffff;
  }
  &-shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(#000000, 0.4);
  }
}
</style>
