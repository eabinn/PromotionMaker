<template>
  <div class="edit-input">
    <div class="edit-input">
      <div class="edit-input edit-input-row">
        <label>Profile을 수정해주세요.</label>
        <button @click="addProfile($event)">새 Profile 추가</button>
      </div>
      <ul class="help">
        <li>추가 가능한 프로필 개수는 최대 3개 입니다.</li>
      </ul>
    </div>

    <div class="edit-input edit-input-nested">
      <div v-for="(profile, index) in props.value" :key="index">
        <div class="edit-input edit-input-row">
          <label>{{ index + 1 }}번째 Profile</label>
          <button @click="deleteProfile($event, index)">{{ index + 1 }}번째 Profile 삭제</button>
        </div>
        <div class="edit-input edit-input-nested">
          <EditInputTextarea
            :value="profile.name"
            :change-target="'강사명'"
            :update-value="(value) => (profile.name = value)"
          />
          <EditInputImageLinks
            :value="profile.images"
            :change-target="'강사 프로필 사진'"
            :update-value="(value) => (profile.images = value)"
          />
          <EditInputDescriptions
            :value="profile.descriptions"
            :update-value="(value) => (profile.descriptions = value)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Profile } from '@/interfaces/promo.interfaces'
import { defaultProfile } from '@/mockupDatas/promoData'
import EditInputTextarea from './EditInputTextarea.vue'
import EditInputImageLinks from './EditInputImageLinks.vue'
import EditInputDescriptions from './EditInputDescriptions.vue'

interface IProps {
  value: Profile[]
  updateValue(value: Profile[]): void
}

const props = defineProps<IProps>()

const addProfile = (e: Event) => {
  e.preventDefault()

  if (props.value.length > 2) {
    return
  }

  props.updateValue([...props.value, defaultProfile])
}

const deleteProfile = (e: Event, index: number) => {
  e.preventDefault()

  const profiles = props.value

  props.updateValue([...profiles.slice(0, index), ...profiles.slice(index + 1, profiles.length)])
}
</script>

<style lang="scss" scoped>
@import './common';
</style>
