<template>
  <form>
    <div class="item">
      <b># 좌측 상단 코너 색상을 정해주세요.</b>
      <input v-model="editedItem.leftColor" type="color" />
    </div>
    <div class="item">
      <b># 우측 하단 코너 색상을 정해주세요.</b>
      <input v-model="editedItem.rightColor" type="color" />
    </div>
    <div class="item">
      <b>비디오 링크를 적어주세요.</b>
      <input v-model="editedItem.videoUrl" />
    </div>
  </form>
</template>

<script lang="ts" setup>
import { toRef } from 'vue'
import { MarketingVideo } from '../item.types'

interface IProps {
  originalItem: MarketingVideo
}

const props = defineProps<IProps>()

const editedItem = toRef(props, 'originalItem')
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 20px;

  .item {
    display: flex;
    flex-direction: column;
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }

  select {
    display: block;
    width: 100%;
  }

  input {
    width: 100%;
  }

  .descriptions {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .description {
    &-type {
      margin-bottom: 10px;
    }
    &-item {
      display: flex;
      textarea {
        flex: 1;
      }
    }
  }
}
</style>
