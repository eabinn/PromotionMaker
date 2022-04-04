<template>
  <div class="edit-content">
    <div class="item">
      <label>
        섹션 배경색을 정해주세요. (현재 색:
        <span>{{ editedItem.color }}</span
        >)
      </label>
      <input v-model="editedItem.color" type="color" />
    </div>

    <div class="item">
      <label>섹션간의 위치를 변경합니다. (좌측이 첫번째 섹션입니다.)</label>
      <div class="dragzone dragzone-sections">
        <div
          v-for="(section, index) in props.sectionsOrder"
          :id="section.originalId + ''"
          :key="section.id"
          class="drag-item"
          :draggable="true"
          @dragstart="dragStart($event)"
          @dragend="dragEnd($event)"
        >
          <b v-if="props.sectionId === section.originalId">현재 섹션</b>
          <b v-else>{{ index + 1 }}</b>
        </div>
      </div>
    </div>

    <div v-if="props.sectionItemsOrder.length" class="item">
      <label>섹션의 아이템들간의 위치를 변경합니다. (좌측이 첫번째 아이템입니다.)</label>
      <div class="dragzone dragzone-section-items">
        <div
          v-for="(promoItem, index) in props.sectionItemsOrder"
          :id="promoItem.originalId + ''"
          :key="promoItem.id"
          class="drag-item"
          :draggable="true"
          @dragstart="dragStart($event)"
          @dragend="dragEnd($event)"
        >
          <b>{{ index + 1 }}</b>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRef, onUnmounted } from 'vue'
import { IPromoSection } from '@/interfaces/promo.interfaces'

const DRAGGING_ITEM = 'dragging'
const DRAG_ITEM = 'drag-item'
const DRAG_ZONE = 'dragzone'

interface IProps {
  item: IPromoSection
  sectionsOrder: { originalId: number; isCurrent: boolean; id: number }[]
  sectionItemsOrder: { originalId: number; id: number }[]
  updateSectionsOrder(order: number[]): void
  updateSectionItemsOrder(order: number[]): void
  sectionId: number
}

const props = defineProps<IProps>()

const editedItem = toRef(props, 'item')

const dragStart = (e: DragEvent) => {
  const dragItem = e.target as HTMLElement
  const container = dragItem.parentElement as HTMLElement

  dragItem.classList.add(DRAGGING_ITEM)
  container.addEventListener('dragover', dragOver)
}

const dragEnd = (e: DragEvent) => {
  const dragItem = e.target as HTMLElement
  const container = dragItem.parentElement as HTMLElement

  const sectionsOrder = [
    ...document.querySelectorAll<HTMLElement>('.dragzone.dragzone-sections .drag-item'),
  ].map((el) => +el.id)
  props.updateSectionsOrder(sectionsOrder)

  const sectionItemsOrder = [
    ...document.querySelectorAll<HTMLElement>('.dragzone.dragzone-section-items .drag-item'),
  ].map((el) => +el.id)
  props.updateSectionItemsOrder(sectionItemsOrder)

  dragItem.classList.remove(DRAGGING_ITEM)
  container.removeEventListener('dragover', dragOver)
}

const dragOver = (e: DragEvent) => {
  e.preventDefault()

  const container = (e.target as HTMLElement).parentElement as HTMLElement
  if (!container.classList.contains(DRAG_ZONE)) {
    return
  }

  const dragItem = container.querySelector(`.${DRAGGING_ITEM}`) as HTMLElement
  const afterDragItem = getDragAfterElement(container, e.clientX)

  if (isInBox(e, container.getBoundingClientRect())) {
    if (afterDragItem) {
      container.insertBefore(dragItem, afterDragItem)
    } else {
      container.appendChild(dragItem)
    }
  }
}

function getDragAfterElement(container: HTMLElement, x: number) {
  const dragItems = [
    ...container.querySelectorAll<HTMLElement>(`.${DRAG_ITEM}:not(.${DRAGGING_ITEM}`),
  ]

  return dragItems.reduce(
    (closest: { offset: number; element: null | HTMLElement }, child) => {
      const box = child.getBoundingClientRect()
      const offset = x - box.left - box.width / 2
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child }
      } else {
        return closest
      }
    },
    { offset: Number.NEGATIVE_INFINITY, element: null }
  ).element
}

function isInBox(e: DragEvent, box: DOMRect) {
  return (
    e.clientX >= box.left &&
    e.clientX <= box.left + box.width &&
    e.clientY >= box.top &&
    e.clientY <= box.top + box.height
  )
}

onUnmounted(() => console.log('zzzz'))
</script>

<style lang="scss" scoped>
.edit-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;

  .item {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  input {
    width: 100%;
  }
}

.dragzone {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  border: 1px solid black;

  .drag-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border: 1px solid black;

    &.dragging {
      opacity: 0.5;
    }
  }
}
</style>
