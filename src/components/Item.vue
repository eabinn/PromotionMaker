<template>
  <div
    v-if="props.showReal"
    class="box real draggable"
    :style="{ backgroundColor: props.item.color }"
  >
    <div class="title">
      <input id="title" placeholder="타이틀을 입력해주세요" />
      <input id="subtitle" placeholder="서브 타이틀을 입력해주세요" />
    </div>
    <div class="description">
      <input placeholder="설명" />
    </div>

    <button class="btn-delete" @click="handleDeleteItem">삭제</button>
  </div>
  <div
    v-else
    :id="'' + props.item.id"
    class="box dummy draggable"
    :style="{ backgroundColor: props.item.color }"
    :draggable="true"
    @dragstart="props.dragItemCopyStart && props.dragItemCopyStart($event)"
  ></div>
</template>

<script lang="ts" setup>
interface ItemProps {
  item: { type: string; color: string; id: number }
  showReal: boolean
  deleteItem?(index: number): void
  dragItemCopyStart?(e: DragEvent): void
  dragItemStart?(e: DragEvent): void
  dragItemEnd?(e: DragEvent): void
}

const props = defineProps<ItemProps>()

const handleDeleteItem = () => {
  props.deleteItem && props.deleteItem(Math.random() * (100000 - 0) + 100000)
}
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
  height: 50%;

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

input {
  border: none;
  background-color: rgba(#000000, 0.5);
}

button.btn-delete {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
