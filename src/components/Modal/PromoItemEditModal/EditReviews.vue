<template>
  <EditForm>
    <EditInputReviews
      :value="editedItem.items"
      :update-value="(value) => (editedItem.items = value)"
    />
  </EditForm>
</template>

<script lang="ts" setup>
import { toRef } from 'vue'
import { Reviews } from '@/interfaces/promo.interfaces'
import EditForm from './common/EditForm.vue'
import EditInputReviews from '../Input/EditInputReviews.vue'

interface IProps {
  item: Reviews
}

const props = defineProps<IProps>()

const editedItem = toRef(props, 'item')
</script>
