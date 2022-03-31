export type ItemType =
  | 'title'
  | 'summaryOnly'
  | 'landingButton'
  | 'summaryWithImage'
  | 'packageCards'
  | 'notes'
  | 'profiles'
  | 'profileWithHeader'
  | string

export interface IItemDummy {
  type: ItemType
  color: string
  name: string
}

export interface IItem {
  id: number
  type: ItemType
  title?: Title
  summaryOnly?: SummaryOnly
  summaryWithImage?: SummaryWithImage
  landingButton?: LandingButton
  packageCards?: PackageCards
  notes?: Notes
  profiles?: Profiles
  profileWithHeader?: ProfileWithHeader
}

type FontSize = 'normal' | 'big'
type FontWeight = 'normal' | 'bold'
type InputType = 'textarea' | 'radio' | 'number' | null
type ListType = 'normal' | 'dot' | 'number'
type PositionType = 'left' | 'right'
type ButtonType = 'normal' | 'outline'

export interface TextAreaInput<T> {
  value: T
  _description: string
  _inputType: InputType
  _options?: T
}

export interface NumberInput {
  value: number
  _description: string
  _inputType: InputType
}

export interface RadioInput<T> {
  value: T
  _description: string
  _inputType: InputType
  _options: T[]
}

export interface Title {
  title: string
  titleSize: FontSize
  upSubtitle: string
  upSubtitleFontSize: FontSize
  upSubtitleFontWeight: FontWeight
  underSubtitle: string
  underSubtitleFontSize: FontSize
  underSubtitleFontWeight: FontWeight
}

export interface SummaryOnly {
  contentColumn: number
  barColor: string
  title: string
  subTitle: string
  subTitleFontWeight: FontWeight
  descriptions: List[]
}

export interface SummaryWithImage {
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

export interface LandingButton {
  mainColor: string
  text: string
  link: string
  type: 'normal' | 'tail'
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

export interface PackageCards {
  items: PackageCard[]
}

export interface List {
  title: string
  type: ListType
  items: string[]
}

export interface Notes {
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

export interface Profiles {
  items: Profile[]
}

export interface ProfileWithHeader {
  barColor: string
  title: string
  subTitle: string
  subTitleFontWeight: FontWeight
  profile: Profile
}
