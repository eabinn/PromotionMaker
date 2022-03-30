<template>
  <div
    :id="props.item.type"
    class="box dummy draggable"
    :style="{ backgroundColor: props.item.color }"
    :draggable="true"
    @dragstart="props.dragItemCopyStart && props.dragItemCopyStart($event)"
  >
    <span>{{ props.item.name }}</span>
  </div>
</template>

<script lang="ts" setup>
import { IItemDummy } from './item.types'

interface ItemProps {
  item: IItemDummy
  dragItemCopyStart?(e: DragEvent): void
  dragItemStart?(e: DragEvent): void
  dragItemEnd?(e: DragEvent): void
}

const props = defineProps<ItemProps>()
</script>

<style lang="scss" scoped>
.box {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  width: 100%;
  &.dummy {
    width: 100%;
    height: 50%;
  }

  button {
    display: none;
  }

  &:hover button {
    display: block;
  }
}

.title {
  display: flex;
  flex-direction: column;
}

button.btn-delete {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
