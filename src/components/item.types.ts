export interface IItemDummy {
  type: string
  color: string
  name: string
}

type FontSize = 'normal' | 'big'
type FontWeight = 'normal' | 'bold'
type InputType = 'textarea' | 'radio' | 'number' | null
type ListType = 'normal' | 'dot' | 'number'

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
  descriptions: { title: string; type: ListType; items: string[] }[]
}

export interface LandingButton {
  mainColor: string
  text: string
  link: string
  type: 'normal' | 'tail'
}

export type PromotionComponent = Title | SummaryOnly

export interface IItem extends IItemDummy {
  id: number
  title?: Title
  summaryOnly?: SummaryOnly
  landingButton?: LandingButton
}
