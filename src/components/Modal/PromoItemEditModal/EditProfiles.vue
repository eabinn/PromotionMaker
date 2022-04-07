<template>
  <EditForm>
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

interface IProps {
  item: Profiles
}

const props = defineProps<IProps>()

const editedItem = toRef(props, 'item')
</script>
