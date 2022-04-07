<template>
  <EditForm>
    <EditInputNumber
      :change-target="'PC 화면에서 각 프로필 영역 비율'"
      :value="editedItem.column"
      :max-value="12"
      :update-value="(value) => (editedItem.column = value)"
    />
    <EditInputProfiles
      :value="editedItem.items"
      :update-value="(value) => (editedItem.items = value)"
    />
  </EditForm>
</template>

<script lang="ts" setup>
import { toRef } from 'vue'
import { Profiles } from '@/interfaces/promo.interfaces'
import EditInputProfiles from '../Input/EditInputProfiles.vue'
import EditForm from './common/EditForm.vue'
import EditInputNumber from '../Input/EditInputNumber.vue'

interface IProps {
  item: Profiles
}

const props = defineProps<IProps>()

const editedItem = toRef(props, 'item')
</script>
