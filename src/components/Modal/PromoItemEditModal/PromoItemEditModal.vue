<template>
  <EditModal
    :is-visible="props.isVisible"
    :close-modal="props.closeModal"
    :confirm-edit="props.confirmEdit"
  >
    <EditTitle v-if="props.editedItem.type === 'title'" :item="props.editedItem.title!" />
    <EditSummaryOnly
      v-if="props.editedItem.type === 'summaryOnly'"
      :item="props.editedItem.summaryOnly!"
    />
    <EditSummaryWithImage
      v-if="props.editedItem.type === 'summaryWithImage'"
      :item="props.editedItem.summaryWithImage!"
    />
    <EditLandingButton
      v-if="props.editedItem.type === 'landingButton'"
      :item="props.editedItem.landingButton!"
    />
    <EditPackageCards
      v-if="props.editedItem.type === 'packageCards'"
      :item="props.editedItem.packageCards!"
    />
    <EditNotes v-if="props.editedItem.type === 'notes'" :item="props.editedItem.notes!" />
    <EditProfiles v-if="props.editedItem.type === 'profiles'" :item="props.editedItem.profiles!" />
    <EditProfileWithHeader
      v-if="props.editedItem.type === 'profileWithHeader'"
      :item="props.editedItem.profileWithHeader!"
    />
    <EditBenefits v-if="props.editedItem.type === 'benefits'" :item="props.editedItem.benefits!" />
    <EditMarketingVideo
      v-if="props.editedItem.type === 'marketingVideo'"
      :item="props.editedItem.marketingVideo!"
    />
  </EditModal>
</template>

<script lang="ts" setup>
import { IPromoItem } from '@/interfaces/promo.interfaces'
import EditModal from '../common/EditModal.vue'
import EditSummaryOnly from './EditSummaryOnly.vue'
import EditTitle from './EditTitle.vue'
import EditLandingButton from './EditLandingButton.vue'
import EditSummaryWithImage from './EditSummaryWithImage.vue'
import EditPackageCards from './EditPackageCards.vue'
import EditNotes from './EditNotes.vue'
import EditProfiles from './EditProfiles.vue'
import EditProfileWithHeader from './EditProfileWithHeader.vue'
import EditBenefits from './EditBenefits.vue'
import EditMarketingVideo from './EditMarketingVideo.vue'

interface IProps {
  isVisible: boolean
  editedItem: IPromoItem
  closeModal(): void
  confirmEdit(): void
}

const props = defineProps<IProps>()
</script>

<style lang="scss" scoped></style>
