<template>
  <div class="col-wrapper text-center">
    <div
      v-for="(profile, index) in props.data.items"
      :key="index"
      class="col-xs-12 no-float col-item"
      :class="`col-md-${props.data.column}`"
    >
      <div class="pr-profile text-left">
        <div class="pr-profile-img">
          <div class="pr-profile_pic">
            <img
              :src="profile.images['1x']"
              :srcset="`${profile.images['2x']} 2x`"
              alt="master profile"
            />
          </div>
        </div>
        <div class="pr-profile-info">
          <h4 v-if="profile.name" class="pr-profile_name">
            <strong v-n2br="{ htmlText: profile.name }" />
          </h4>
          <div
            v-for="(description, dIndex) in profile.descriptions"
            :key="dIndex"
            class="definition-group"
          >
            <h5 v-if="description.title" class="definition-group-title">
              <b v-n2br="{ htmlText: description.title }" />
            </h5>

            <div class="definition">
              <ul v-if="description.type === 'dot'" class="definition-wrap">
                <li
                  v-for="(item, itemIndex) in description.items"
                  :key="itemIndex"
                  class="definition__item"
                >
                  <span v-n2br="{ htmlText: item }" />
                </li>
              </ul>
              <div v-else-if="description.type === 'normal'" class="definition-wrap">
                <p
                  v-for="(item, itemIndex) in description.items"
                  :key="itemIndex"
                  class="definition__item"
                >
                  <span v-n2br="{ htmlText: item }" />
                </p>
              </div>
              <ol v-else class="definition-wrap">
                <li
                  v-for="(item, itemIndex) in description.items"
                  :key="itemIndex"
                  class="definition__item"
                >
                  <span v-n2br="{ htmlText: item }" />
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Profiles } from '@/interfaces/promo.interfaces'

interface TitleProps {
  data: Profiles
}

const props = defineProps<TitleProps>()
</script>

<style lang="scss" scoped>
@import '@/assets/scss/promotion/_summary';
@import '@/assets/scss/promotion/_profile';
@import '@/assets/scss/promotion/_title';
</style>
