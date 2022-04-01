<template>
  <Title v-if="props.item.type === 'title'" :data="props.item.title!"></Title>
  <SummaryOnly v-else-if="props.item.type === 'summaryOnly'" :data="props.item.summaryOnly!" />
  <SummaryWithImage
    v-else-if="props.item.type === 'summaryWithImage'"
    :data="props.item.summaryWithImage!"
  />
  <LandingButton
    v-else-if="props.item.type === 'landingButton'"
    :data="props.item.landingButton!"
  />
  <PackageCards v-else-if="props.item.type === 'packageCards'" :data="props.item.packageCards!" />
  <Notes v-else-if="props.item.type === 'notes'" :data="props.item.notes!" />
  <Profiles v-else-if="props.item.type === 'profiles'" :data="props.item.profiles!" />
  <ProfileWithHeader
    v-else-if="props.item.type === 'profileWithHeader'"
    :data="props.item.profileWithHeader!"
  />
  <Benefits v-else-if="props.item.type === 'benefits'" :data="props.item.benefits!" />
  <MarketingVideo
    v-else-if="props.item.type === 'marketingVideo'"
    :data="props.item.marketingVideo!"
  />
</template>

<script lang="ts" setup>
import { IPromoItem } from '@/interfaces/promo.interfaces'
import Title from '@/components/PromoTitle/PromoTitle.vue'
import SummaryOnly from '@/components/PromoSummaryOnly/PromoSummaryOnly.vue'
import LandingButton from '@/components/PromoLandingButton/PromoLandingButton.vue'
import SummaryWithImage from '@/components/PromoSummaryWithImage/PromoSummaryWithImage.vue'
import PackageCards from '@/components/PromoPackageCards/PromoPackageCards.vue'
import Notes from '@/components/PromoNotes/PromoNotes.vue'
import Profiles from '@/components/PromoProfiles/PromoProfiles.vue'
import ProfileWithHeader from '@/components/PromoProfileWithHeader/PromoProfileWithHeader.vue'
import Benefits from '@/components/PromoBenefits/PromoBenefits.vue'
import MarketingVideo from '@/components/PromoMarketingVideo/PromoMarketingVideo.vue'

interface IProps {
  item: IPromoItem
}

const props = defineProps<IProps>()
</script>

<style lang="scss" scoped></style>
