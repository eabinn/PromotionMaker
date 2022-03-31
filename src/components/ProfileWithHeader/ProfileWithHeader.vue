<template>
  <div class="col-wrapper text-center">
    <div class="col-xs-12 col-md-6 no-float col-item">
      <div
        v-if="props.data.title || props.data.subTitle"
        class="pr-title"
        :style="{ color: props.data.barColor }"
      >
        <div class="pr-title-wrap">
          <p v-if="props.data.subTitle" class="pr-title-text pr-title-text--sub">
            <b
              v-if="props.data.subTitleFontWeight === 'bold'"
              v-n2br="{ htmlText: props.data.subTitle }"
            ></b>
            <span v-else v-n2br="{ htmlText: props.data.subTitle }" />
          </p>

          <h3 v-if="props.data.title" class="pr-title-text pr-title-text--main">
            <span v-n2br="{ htmlText: props.data.title }" />
          </h3>
        </div>
      </div>

      <div class="pr-profile text-left">
        <div class="pr-profile-img">
          <div class="pr-profile_pic">
            <img
              :src="props.data.profile.images['1x']"
              :srcset="`${props.data.profile.images['2x']} 2x`"
              alt="master profile"
            />
          </div>
        </div>
        <div class="pr-profile-info">
          <h4 v-if="props.data.profile.name" class="pr-profile_name">
            <strong v-n2br="{ htmlText: props.data.profile.name }" />
          </h4>
          <div
            v-for="(description, dIndex) in props.data.profile.descriptions"
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
import { ProfileWithHeader } from '../item.types'

interface IProps {
  data: ProfileWithHeader
}

const props = defineProps<IProps>()
</script>

<style lang="scss" scoped>
@import '@/assets/scss/promotion/_summary';
@import '@/assets/scss/promotion/_profile';
@import '@/assets/scss/promotion/_title';
</style>
