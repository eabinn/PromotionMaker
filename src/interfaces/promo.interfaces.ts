export type PromoItemType =
  | 'title'
  | 'summaryOnly'
  | 'landingButton'
  | 'summaryWithImage'
  | 'packageCards'
  | 'notes'
  | 'profiles'
  | 'profileWithHeader'
  | 'benefits'
  | 'marketingVideo'

export interface IPromoItemDraggable {
  type: PromoItemType
  name: string
}

export interface IPromoItemBase {
  type: PromoItemType
}

export interface IPromoItem extends IPromoItemBase {
  title?: Title
  summaryOnly?: SummaryOnly
  summaryWithImage?: SummaryWithImage
  landingButton?: LandingButton
  packageCards?: PackageCards
  notes?: Notes
  profiles?: Profiles
  profileWithHeader?: ProfileWithHeader
  benefits?: Benefits
  marketingVideo?: MarketingVideo
}

export interface IPromoSection {
  color: string
  items: IPromoItem[]
}

export type FontSize = 'normal' | 'big'
export type FontWeight = 'normal' | 'bold'
export type ListType = 'normal' | 'dot' | 'number'
export type PositionType = 'left' | 'right'
export type PackageCardButtonType = 'normal' | 'outline'
export type LandingButtonType = 'normal' | 'tail'

export interface ImageSet {
  '1x': string
  '2x': string
}

export interface Title extends IPromoItemBase {
  title: string
  titleSize: FontSize
  upSubtitle: string
  upSubtitleFontSize: FontSize
  upSubtitleFontWeight: FontWeight
  underSubtitle: string
  underSubtitleFontSize: FontSize
  underSubtitleFontWeight: FontWeight
}

export interface SummaryOnly extends IPromoItemBase {
  contentColumn: number
  barColor: string
  title: string
  subTitle: string
  subTitleFontWeight: FontWeight
  descriptions: List[]
}

export interface SummaryWithImage extends IPromoItemBase {
  barColor: string
  title: string
  subTitle: string
  subTitleFontWeight: FontWeight
  descriptions: List[]
  images: ImageSet
  imageContentColumn: number
  descriptionContentColumn: number
  imagePosition: PositionType
}

export interface LandingButton extends IPromoItemBase {
  mainColor: string
  text: string
  link: string
  style: LandingButtonType
}

export interface PackageCardButton {
  type: PackageCardButtonType
  mainColor: string
  text: string
  day: string
  price: string
  link: string
}

export interface PackageCard {
  mainColor: string
  identifier: string
  subTitle: string
  title: string
  descriptions: string[]
  buttons: PackageCardButton[]
}

export interface PackageCards extends IPromoItemBase {
  items: PackageCard[]
}

export interface List {
  title: string
  type: ListType
  items: string[]
}

export interface Notes extends IPromoItemBase {
  contentColumn: number
  items: List[]
}

export interface Profile {
  name: string
  images: ImageSet
  descriptions: List[]
}

export interface Profiles extends IPromoItemBase {
  items: Profile[]
}

export interface ProfileWithHeader extends IPromoItemBase {
  barColor: string
  title: string
  subTitle: string
  subTitleFontWeight: FontWeight
  profile: Profile
}

export interface Benefit {
  identifier: string
  title: string
  text: string
  images: ImageSet
}

export interface Benefits extends IPromoItemBase {
  itemColumn: number
  items: Benefit[]
}

export interface MarketingVideo extends IPromoItemBase {
  videoUrl: string
  leftColor: string
  rightColor: string
}
