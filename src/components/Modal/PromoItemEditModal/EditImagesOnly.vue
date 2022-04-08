<template>
  <EditForm>
    <EditInputNumber
      :change-target="'PC 화면에서 각 이미지 영역 영역'"
      :value="editedItem.column"
      :max-value="12"
      :update-value="(value) => (editedItem.column = value)"
    />

    <EditInputImages
      :value="editedItem.items"
      :update-value="(value) => (editedItem.items = value)"
      :change-target="'이미지 영역'"
    />
  </EditForm>
</template>

<script lang="ts" setup>
import { toRef } from 'vue'
import { ImagesOnly } from '@/interfaces/promo.interfaces'
import EditForm from './common/EditForm.vue'
import EditInputNumber from '../Input/EditInputNumber.vue'
import EditInputImages from '../Input/EditInputImages.vue'

interface IProps {
  item: ImagesOnly
}

const props = defineProps<IProps>()

const editedItem = toRef(props, 'item')
</script>
