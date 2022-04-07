<template>
  <div class="col-wrapper text-center">
    <div class="col-xs-12 col-md-8 no-float col-item">
      <div class="swiper">
        <div class="swiper-wrapper">
          <div v-for="(item, index) in props.data.items" :key="index" class="swiper-slide">
            <span v-n2br="{ htmlText: item.text }" class="review-text" />
            <span v-n2br="{ htmlText: `- ${item.name} -` }" class="review-name" />
          </div>
        </div>
        <div>{{ props.data.items.length }}</div>
        <div v-if="props.data.items.length > 1" class="swiper-pagination"></div>

        <div v-if="props.data.items.length > 1" class="swiper-button-prev"></div>
        <div v-if="props.data.items.length > 1" class="swiper-button-next"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Reviews } from '@/interfaces/promo.interfaces'
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { onMounted, ref, watch } from 'vue'

interface IProps {
  data: Reviews
}

const props = defineProps<IProps>()

const swiper = ref<Swiper>()

const destroySwiper = (swiper: Swiper) => {
  swiper.destroy()
}

const createSwiper = (data: Reviews) => {
  if (data.items.length > 1) {
    return new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    })
  }
}

onMounted(() => {
  swiper.value = createSwiper(props.data)
})

watch(
  () => props.data.items,
  (cur, prev) => {
    console.log(cur)
    if (swiper.value) {
      destroySwiper(swiper.value)
    }

    swiper.value = createSwiper(props.data)
  }
)
</script>

<style lang="scss" scoped>
.swiper-wrapper {
  margin-bottom: 37px;
}
.swiper-pagination {
  position: relative;
}

.review-name {
  display: block;
  margin-top: 20px;
}
</style>
