<template>
  <div v-if="props.showReal" class="box real" :style="{ backgroundColor: props.item.color }">
    <div class="title">
      <input id="title" placeholder="타이틀을 입력해주세요" />
      <input id="subtitle" placeholder="서브 타이틀을 입력해주세요" />
    </div>
    <div class="description">
      <input placeholder="설명" />
    </div>

    <button class="btn-delete" @click="handleDeleteItem">삭제</button>
  </div>
  <div v-else class="box dummy" :style="{ backgroundColor: props.item.color }">
    <button @click="addItem && addItem(props.item.type, props.item.color)">추가</button>
  </div>
</template>

<script lang="ts" setup>
interface ItemProps {
  item: { type: string; color: string }
  showReal: boolean
  addItem?(type: string, color: string): void
  deleteItem?(index: number): void
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
  min-height: 100px;
  min-width: 200px;

  &.dummy {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      display: none;
    }

    &:hover button {
      display: block;
    }
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
