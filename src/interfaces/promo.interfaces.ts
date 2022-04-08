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
  | 'titleWithBar'
  | 'reviews'
  | 'imagesOnly'

export interface IPromoItemDraggable {
  type: PromoItemType
  name: string
}

export interface IPromoItemBase {
  type: PromoItemType
}

export interface IPromoItem extends IPromoItemBase {
  title?: Title
  summaryWithImage?: SummaryWithImage
  landingButton?: LandingButton
  packageCards?: PackageCards
  notes?: Notes
  profiles?: Profiles
  benefits?: Benefits
  marketingVideo?: MarketingVideo
  titleWithBar?: TitleWithBar
  reviews?: Reviews
  imagesOnly?: ImagesOnly
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
export type LandingButtonTailType = 'normal' | 'tail'
export type LandingButtonBgType = 'light' | 'dark'

export interface ImageSet {
  '1x': string
  '2x': string
}

export interface Title extends IPromoItemBase {
  title: string
  titleSize: FontSize
  upSubTitle: string
  upSubTitleFontSize: FontSize
  underSubTitle: string
  underSubTitleFontSize: FontSize
}

export interface TitleWithBar extends IPromoItemBase {
  column: number
  barColor: string
  title: string
  upSubTitle: string
  underSubTitle: string
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
  tailType: LandingButtonTailType
  bgType: LandingButtonBgType
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
  column: number
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
  column: number
  items: Profile[]
}

export interface Benefit {
  identifier: string
  title: string
  text: string
  images: ImageSet
}

export interface Benefits extends IPromoItemBase {
  column: number
  items: Benefit[]
}

export interface MarketingVideo extends IPromoItemBase {
  videoUrl: string
  leftColor: string
  rightColor: string
}

export interface Review {
  text: string
  name: string
}

export interface Reviews extends IPromoItemBase {
  items: Review[]
}

export interface ImagesOnly extends IPromoItemBase {
  column: number
  items: ImageSet[]
}
