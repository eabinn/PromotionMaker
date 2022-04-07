<template>
  <EditForm>
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

interface IProps {
  item: PackageCards
}

const props = defineProps<IProps>()

const editedItem = toRef(props, 'item')
</script>
