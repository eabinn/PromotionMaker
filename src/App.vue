<template>
  <div class="container">
    <div class="sidebar">
      <Item
        v-for="(kind, index) in kinds"
        :key="index"
        :item="kind"
        :add-item="addItem"
        :show-real="false"
      />
    </div>

    <div class="dragzone">
      <div v-if="items.length" class="content" @dragover="dragOver($event)">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="draggable"
          :draggable="true"
          @dragstart="dragStart($event)"
          @dragend="dragEnd($event)"
        >
          <Item :type="item.type" :color="item.color" :show-real="true" :item="item" />
        </div>
      </div>
      <div v-else class="no-content">좌측 사이드바에서 추가해주세요</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Item from './components/Item.vue'

const kinds = ref<Array<{ type: string; color: string }>>([
  { type: 'A', color: 'red' },
  { type: 'B', color: 'blue' },
  { type: 'C', color: 'orange' },
  { type: 'D', color: 'cyan' },
  { type: 'E', color: 'purple' },
  { type: 'F', color: 'green' },
  { type: 'G', color: 'black' },
])

const items = ref<Array<{ type: string; color: string; id: number }>>([])

const addItem = (type: string, color: string) => {
  console.log('asdf', type, color)
  items.value.push({
    type,
    color,
    id: items.value.length,
  })
}

const deleteItem = (id: number) => {
  items.value = items.value.filter((item) => item.id !== id)
}

const dragStart = (e: DragEvent) => {
  const target = e.target as HTMLElement
  target.classList.add('dragging')
}

const dragEnd = (e: DragEvent) => {
  const target = e.target as HTMLElement
  target.classList.remove('dragging')
}

const dragOver = (e: DragEvent) => {
  e.preventDefault()
  const container = document.querySelector('.dragzone .content') as HTMLElement
  const afterElement = getDragAfterElement(container, e.clientY)
  const draggable = document.querySelector('.dragging') as HTMLElement
  if (afterElement === null) {
    container.appendChild(draggable)
  } else {
    container.insertBefore(draggable, afterElement)
  }
}

function getDragAfterElement(container: HTMLElement, yOffset: number) {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

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
}

.dragzone {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid black;
}

.content,
.no-content {
  min-height: 100vh;
  width: 100%;
  overflow: scroll;
}

.no-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
