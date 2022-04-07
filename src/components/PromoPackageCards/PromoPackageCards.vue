<template>
  <div class="col-wrapper">
    <div class="col-xs-12 no-float col-item">
      <div class="pk-card-container">
        <div
          v-for="(card, index) in props.data.items"
          :key="index"
          class="col-xs-12 no-float col-item pk-card"
          :class="`col-md-${props.data.column}`"
        >
          <div class="pk-card__heading" :style="{ backgroundColor: card.mainColor }">
            <div v-if="card.identifier" class="pk-card--no">
              <span v-n2br="{ htmlText: card.identifier }" />
            </div>
            <div v-if="card.title || card.subTitle" class="pk-card--title">
              <h5 v-if="card.subTitle" class="pk-subtitle">
                <span v-n2br="{ htmlText: card.subTitle }" />
              </h5>
              <h3 v-if="card.title" class="pk-title">
                <span v-n2br="{ htmlText: card.title }" />
              </h3>
            </div>
          </div>

          <div class="pk-card__content">
            <div class="pk-card--product">
              <div class="pk-card--product__wrapper">
                <div v-if="card.descriptions.length" class="pk-card--product--list">
                  <ul>
                    <li v-for="(description, dIndex) in card.descriptions" :key="dIndex">
                      <span v-n2br="{ htmlText: description }" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              v-for="(button, bIndex) in card.buttons"
              :key="bIndex"
              class="pr-btn-box"
              :style="{ color: button.mainColor }"
            >
              <a
                v-if="button.type === 'normal'"
                class="pr-btn"
                target="_blank"
                :href="button.link"
                :style="{ backgroundColor: button.mainColor }"
              >
                <span class="pr-btn-bg"></span>
                <span class="txt txt-l">
                  <em><span v-n2br="{ htmlText: button.text }" /></em>
                  <span v-n2br="{ htmlText: ` (${button.day}일)` }" />
                </span>
                <span class="txt txt-r">
                  <em>₩</em>
                  <span v-n2br="{ htmlText: button.price }" />
                </span>
              </a>
              <a
                v-if="button.type === 'outline'"
                class="pr-btn pr-btn-border"
                :href="button.link"
                target="_self"
              >
                <span :style="{ backgroundColor: button.mainColor, opacity: 0.15 }">
                  <span class="pr-btn-bg"></span
                ></span>
                <span class="txt txt-l">
                  <em><span v-n2br="{ htmlText: button.text }" /></em>
                  <span v-n2br="{ htmlText: ` (${button.day}일)` }" />
                </span>
                <span class="txt txt-r">
                  <em>₩</em>
                  <span v-n2br="{ htmlText: button.price }" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PackageCards } from '@/interfaces/promo.interfaces'

interface TitleProps {
  data: PackageCards
}

const props = defineProps<TitleProps>()
</script>

<style lang="scss" scoped>
@import '@/assets/scss/promotion/_package_items';
@import '@/assets/scss/promotion/button';
</style>
