<template>
  <EditForm>
    <EditInputNumber
      :change-target="'PC 화면에서 각 패키지 카드 영역 비율'"
      :value="editedItem.column"
      :max-value="12"
      :update-value="(value) => (editedItem.column = value)"
    />
    <EditInputPackageCards
      :value="editedItem.items"
      :update-value="(value) => (editedItem.items = value)"
    />
  </EditForm>
</template>

<script lang="ts" setup>
import { toRef } from 'vue'
import { PackageCards } from '@/interfaces/promo.interfaces'
import EditForm from './common/EditForm.vue'
import EditInputPackageCards from '../Input/EditInputPackageCards.vue'
import EditInputNumber from '../Input/EditInputNumber.vue'

interface IProps {
  item: PackageCards
}

const props = defineProps<IProps>()

const editedItem = toRef(props, 'item')
</script>
