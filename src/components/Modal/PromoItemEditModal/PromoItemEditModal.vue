<template>
  <EditModal
    :is-visible="props.isVisible"
    :close-modal="props.closeModal"
    :confirm-edit="props.confirmEdit"
  >
    <EditTitle v-if="props.editedItem.type === 'title'" :item="props.editedItem.title!" />
    <EditTitleWithBar
      v-if="props.editedItem.type === 'titleWithBar'"
      :item="props.editedItem.titleWithBar!"
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
    <EditBenefits v-if="props.editedItem.type === 'benefits'" :item="props.editedItem.benefits!" />
    <EditMarketingVideo
      v-if="props.editedItem.type === 'marketingVideo'"
      :item="props.editedItem.marketingVideo!"
    />
    <EditReviews v-if="props.editedItem.type === 'reviews'" :item="props.editedItem.reviews!" />
    <EditImagesOnly
      v-if="props.editedItem.type === 'imagesOnly'"
      :item="props.editedItem.imagesOnly!"
    />
  </EditModal>
</template>

<script lang="ts" setup>
import { IPromoItem } from '@/interfaces/promo.interfaces'
import EditModal from '../common/EditModal.vue'
import EditTitle from './EditTitle.vue'
import EditLandingButton from './EditLandingButton.vue'
import EditSummaryWithImage from './EditSummaryWithImage.vue'
import EditPackageCards from './EditPackageCards.vue'
import EditNotes from './EditNotes.vue'
import EditProfiles from './EditProfiles.vue'
import EditBenefits from './EditBenefits.vue'
import EditMarketingVideo from './EditMarketingVideo.vue'
import EditTitleWithBar from './EditTitleWithBar.vue'
import EditReviews from './EditReviews.vue'
import EditImagesOnly from './EditImagesOnly.vue'

interface IProps {
  isVisible: boolean
  editedItem: IPromoItem
  closeModal(): void
  confirmEdit(): void
}

const props = defineProps<IProps>()
</script>

<style lang="scss" scoped></style>
