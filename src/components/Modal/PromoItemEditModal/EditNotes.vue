<template>
  <EditForm>
    <EditInputNumber
      :change-target="'PC 화면에서의 컨텐츠 영역'"
      :value="editedItem.contentColumn"
      :max-value="12"
      :update-value="(value) => (editedItem.contentColumn = value)"
    />

    <EditInputDescriptions
      :change-target="''"
      :value="editedItem.items"
      :update-value="(value) => (editedItem.items = value)"
    />
  </EditForm>
</template>

<script lang="ts" setup>
import { toRef } from 'vue'
import { Notes } from '@/interfaces/promo.interfaces'
import EditForm from './common/EditForm.vue'
import EditInputNumber from '../Input/EditInputNumber.vue'
import EditInputDescriptions from '../Input/EditInputDescriptions.vue'

interface IProps {
  item: Notes
}

const props = defineProps<IProps>()

const editedItem = toRef(props, 'item')
</script>
