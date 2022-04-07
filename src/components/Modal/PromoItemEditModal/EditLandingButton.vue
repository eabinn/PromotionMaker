<template>
  <EditForm>
    <EditInputColor
      :change-target="'랜딩 버튼'"
      :value="editedItem.mainColor"
      :update-value="(value) => (editedItem.mainColor = value)"
    />
    <EditInputText
      :change-target="'랜딩 버튼 내용'"
      :value="editedItem.text"
      :update-value="(value) => (editedItem.text = value)"
    />
    <EditInputText
      :change-target="'랜딩 버튼 클릭시 랜딩될 주소'"
      :value="editedItem.link"
      :update-value="(value) => (editedItem.link = value)"
    />
    <EditInputSelectLandingButtonType
      :value="editedItem.style"
      :update-value="(value) => (editedItem.style = value)"
    />
  </EditForm>
</template>

<script lang="ts" setup>
import { toRef } from 'vue'
import { LandingButton } from '@/interfaces/promo.interfaces'
import EditForm from './common/EditForm.vue'
import EditInputColor from '../Input/EditInputColor.vue'
import EditInputText from '../Input/EditInputText.vue'
import EditInputSelectLandingButtonType from '../Input/EditInputSelectLandingButtonType.vue'

interface IProps {
  item: LandingButton
}

const props = defineProps<IProps>()

const editedItem = toRef(props, 'item')
</script>
