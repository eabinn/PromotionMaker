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

type FontSize = 'normal' | 'big'
type FontWeight = 'normal' | 'bold'
type ListType = 'normal' | 'dot' | 'number'
type PositionType = 'left' | 'right'
type ButtonType = 'normal' | 'outline'

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
  images: {
    '1x': string
    '2x': string
  }
  imageContentColumn: number
  descriptionContentColumn: number
  imagePosition: PositionType
}

export interface LandingButton extends IPromoItemBase {
  mainColor: string
  text: string
  link: string
  style: 'normal' | 'tail'
}

export interface PackageCard {
  mainColor: string
  identifier: string
  subTitle: string
  title: string
  descriptions: string[]
  buttons: {
    type: ButtonType
    mainColor: string
    text: string
    day: string
    price: string
    link: string
  }[]
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
  images: {
    '1x': string
    '2x': string
  }
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
  images: {
    '1x': string
    '2x': string
  }
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
