<template>
  <div
    class="col-wrapper promo-item"
    :class="{
      'col-wrapper--bar': props.item && props.item.type && props.item.type === 'titleWithBar',
      'promo-item-edit': props.editItem,
    }"
  >
    <button v-if="props.editItem" class="edit-btn btn btn-lg btn-primary" @click="props.editItem">
      수정
    </button>

    <PromoTitle v-if="props.item && props.item.type === 'title'" :data="props.item.title!" />
    <PromoSummaryWithImage
      v-else-if="props.item && props.item.type === 'summaryWithImage'"
      :data="props.item.summaryWithImage!"
    />
    <PromoLandingButton
      v-else-if="props.item && props.item.type === 'landingButton'"
      :data="props.item.landingButton!"
    />
    <PromoPackageCards
      v-else-if="props.item && props.item.type === 'packageCards'"
      :data="props.item.packageCards!"
    />
    <PromoNotes v-else-if="props.item && props.item.type === 'notes'" :data="props.item.notes!" />
    <PromoProfiles
      v-else-if="props.item && props.item.type === 'profiles'"
      :data="props.item.profiles!"
    />
    <PromoBenefits
      v-else-if="props.item && props.item.type === 'benefits'"
      :data="props.item.benefits!"
    />
    <PromoMarketingVideo
      v-else-if="props.item && props.item.type === 'marketingVideo'"
      :data="props.item.marketingVideo!"
    />
    <PromoTitleWithBar
      v-else-if="props.item && props.item.type === 'titleWithBar'"
      :data="props.item.titleWithBar!"
    />
    <PromoReviews
      v-else-if="props.item && props.item.type === 'reviews'"
      :data="props.item.reviews!"
    />
    <PromoImagesOnly
      v-else-if="props.item && props.item.type === 'imagesOnly'"
      :data="props.item.imagesOnly!"
    />
  </div>
</template>

<script lang="ts" setup>
import { IPromoItem } from '@/interfaces/promo.interfaces'
import PromoTitle from '@/components/PromoTitle/PromoTitle.vue'
import PromoLandingButton from '@/components/PromoLandingButton/PromoLandingButton.vue'
import PromoSummaryWithImage from '@/components/PromoSummaryWithImage/PromoSummaryWithImage.vue'
import PromoPackageCards from '@/components/PromoPackageCards/PromoPackageCards.vue'
import PromoNotes from '@/components/PromoNotes/PromoNotes.vue'
import PromoProfiles from '@/components/PromoProfiles/PromoProfiles.vue'
import PromoBenefits from '@/components/PromoBenefits/PromoBenefits.vue'
import PromoMarketingVideo from '@/components/PromoMarketingVideo/PromoMarketingVideo.vue'
import PromoTitleWithBar from '@/components/PromoTitleWithBar/PromoTitleWithBar.vue'
import PromoReviews from '@/components/PromoReviews/PromoReviews.vue'
import PromoImagesOnly from '../PromoImagesOnly/PromoImagesOnly.vue'

interface IProps {
  item: IPromoItem
  editItem?: () => void
}

const props = defineProps<IProps>()
</script>

<style lang="scss" scoped>
@import '@/assets/scss/promotion/_layout';

.promo-item {
  position: relative;
}

.promo-item-edit {
  transition: background-color 200ms ease;

  .edit-btn {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    z-index: 1024;
  }

  &:hover {
    background-color: rgba(#000000, 0.5);
    .edit-btn {
      display: block;
    }
  }
}
</style>
