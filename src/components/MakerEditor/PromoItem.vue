<template>
  <div
    class="col-wrapper promo-item"
    :class="props.item.type === 'titleWithBar' ? 'col-wrapper--bar' : ''"
  >
    <button class="edit-btn btn btn-lg btn-primary" @click="props.editItem">수정</button>
    <Title v-if="props.item && props.item.type === 'title'" :data="props.item.title!" />
    <SummaryWithImage
      v-else-if="props.item && props.item.type === 'summaryWithImage'"
      :data="props.item.summaryWithImage!"
    />
    <LandingButton
      v-else-if="props.item && props.item.type === 'landingButton'"
      :data="props.item.landingButton!"
    />
    <PackageCards
      v-else-if="props.item && props.item.type === 'packageCards'"
      :data="props.item.packageCards!"
    />
    <Notes v-else-if="props.item && props.item.type === 'notes'" :data="props.item.notes!" />
    <Profiles
      v-else-if="props.item && props.item.type === 'profiles'"
      :data="props.item.profiles!"
    />
    <Benefits
      v-else-if="props.item && props.item.type === 'benefits'"
      :data="props.item.benefits!"
    />
    <MarketingVideo
      v-else-if="props.item && props.item.type === 'marketingVideo'"
      :data="props.item.marketingVideo!"
    />
    <TitleWithBar
      v-else-if="props.item && props.item.type === 'titleWithBar'"
      :data="props.item.titleWithBar!"
    />
    <Reviews v-else-if="props.item && props.item.type === 'reviews'" :data="props.item.reviews!" />
  </div>
</template>

<script lang="ts" setup>
import { IPromoItem } from '@/interfaces/promo.interfaces'
import Title from '@/components/PromoTitle/PromoTitle.vue'
import LandingButton from '@/components/PromoLandingButton/PromoLandingButton.vue'
import SummaryWithImage from '@/components/PromoSummaryWithImage/PromoSummaryWithImage.vue'
import PackageCards from '@/components/PromoPackageCards/PromoPackageCards.vue'
import Notes from '@/components/PromoNotes/PromoNotes.vue'
import Profiles from '@/components/PromoProfiles/PromoProfiles.vue'
import Benefits from '@/components/PromoBenefits/PromoBenefits.vue'
import MarketingVideo from '@/components/PromoMarketingVideo/PromoMarketingVideo.vue'
import TitleWithBar from '@/components/PromoTitleWithBar/PromoTitleWithBar.vue'
import Reviews from '@/components/PromoReviews/PromoReviews.vue'

interface IProps {
  item: IPromoItem
  editItem(): void
}

const props = defineProps<IProps>()
</script>

<style lang="scss" scoped>
.promo-item {
  position: relative;
  cursor: pointer;
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
