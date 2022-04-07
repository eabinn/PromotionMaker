<template>
  <EditForm>
    <EditInputNumber
      :change-target="'PC 화면에서의 각 베네핏 아이템들의 영역 비율'"
      :value="editedItem.column"
      :max-value="12"
      :update-value="(value) => (editedItem.column = value)"
    />

    <EditInputBenefits
      :value="editedItem.items"
      :update-value="(value) => (editedItem.items = value)"
    />
  </EditForm>
</template>

<script lang="ts" setup>
import { toRef } from 'vue'
import { Benefits } from '@/interfaces/promo.interfaces'
import EditForm from './common/EditForm.vue'
import EditInputNumber from '../Input/EditInputNumber.vue'
import EditInputBenefits from '../Input/EditInputBenefits.vue'

interface IProps {
  item: Benefits
}

const props = defineProps<IProps>()

const editedItem = toRef(props, 'item')
</script>
