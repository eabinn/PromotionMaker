import { reactive } from 'vue'
import { IPromoItemDraggable, IPromoSection, PromoItemType } from '@/interfaces/promo.interfaces'
import { defaultSection, defaultPromoData } from '@/mockupDatas/promoData'

export interface IPromotionStore {
  sections: IPromoSection[]
  draggablePromoItems: IPromoItemDraggable[]
  getSection(index: number): IPromoSection
  addSection(): void
  setSection(index: number, section: IPromoSection): void
  setSections(sections: IPromoSection[]): void
  getSections(): IPromoSection[]
  deleteSection(index: number): void
  addSectionItem(sectionIndex: number, itemType: PromoItemType): void
}

const promotionStore = reactive<IPromotionStore>({
  sections: [],
  draggablePromoItems: [
    { type: 'title', name: 'Title' },
    { type: 'titleWithBar', name: 'Title with Bar' },
    { type: 'summaryWithImage', name: 'Summary with Image' },
    { type: 'landingButton', name: 'Landing Button' },
    { type: 'packageCards', name: 'Package Cards' },
    { type: 'notes', name: 'Notes' },
    { type: 'profiles', name: 'Profiles' },
    { type: 'benefits', name: 'Benefits' },
    { type: 'marketingVideo', name: 'Marketing Video' },
    { type: 'reviews', name: 'Reviews' },
  ],
  getSection(index) {
    return this.sections[index]
  },
  setSection(index, section) {
    this.sections[index] = section
  },
  addSection() {
    this.sections.push(JSON.parse(JSON.stringify(defaultSection)))
  },
  setSections(sections) {
    this.sections = sections
  },
  getSections() {
    return this.sections
  },
  deleteSection(index) {
    this.setSections([
      ...this.sections.slice(0, index),
      ...this.sections.slice(index + 1, this.sections.length),
    ])
  },
  addSectionItem(sectionIndex, itemType) {
    this.sections[sectionIndex].items.push({
      type: itemType,
      title: itemType === 'title' ? defaultPromoData[itemType] : undefined,
      summaryWithImage: itemType === 'summaryWithImage' ? defaultPromoData[itemType] : undefined,
      landingButton: itemType === 'landingButton' ? defaultPromoData[itemType] : undefined,
      packageCards: itemType === 'packageCards' ? defaultPromoData[itemType] : undefined,
      notes: itemType === 'notes' ? defaultPromoData[itemType] : undefined,
      profiles: itemType === 'profiles' ? defaultPromoData[itemType] : undefined,
      benefits: itemType === 'benefits' ? defaultPromoData[itemType] : undefined,
      marketingVideo: itemType === 'marketingVideo' ? defaultPromoData[itemType] : undefined,
      titleWithBar: itemType === 'titleWithBar' ? defaultPromoData[itemType] : undefined,
      reviews: itemType === 'reviews' ? defaultPromoData[itemType] : undefined,
    })
  },
})

export default promotionStore
