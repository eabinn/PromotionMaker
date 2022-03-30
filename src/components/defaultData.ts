import { LandingButton, SummaryOnly, Title } from './item.types'

const defaultTitle: Title = {
  title: '센터 정렬 타이틀 큰 사이즈<br>센터 정렬 타이틀 큰 사이즈',
  titleSize: 'normal',
  upSubtitle: '센터 정렬 서브 타이틀 기본 사이즈 가나다라마바사아자차',
  upSubtitleFontSize: 'normal',
  upSubtitleFontWeight: 'bold',
  underSubtitle: '센터 정렬 서브 타이틀 기본 사이즈 가나다라마바사아자차',
  underSubtitleFontSize: 'big',
  underSubtitleFontWeight: 'normal',
}

const defaultSummaryOnly: SummaryOnly = {
  contentColumn: 12,
  barColor: '#000000',
  title: '센터 정렬 타이틀 큰 사이즈<br>센터 정렬 타이틀 큰 사이즈',
  subTitle: '센터 정렬 타이틀 큰 사이즈 센터 정렬 타이틀 큰 사이즈',
  subTitleFontWeight: 'normal',
  descriptions: [
    {
      title: '리스트 타이틀',
      type: 'number',
      items: [
        '기본 노트 리스트 아이템 가나다라마바사아자차 아야어여오요우유으이',
        '가나다라마바사아자차카타파하 아야어여오요우유으이 가나다라마바사아자차카타파',
      ],
    },
    {
      title: '리스트 타이틀',
      type: 'number',
      items: [
        '기본 노트 리스트 아이템 가나다라마바사아자차 아야어여오요우유으이',
        '가나다라마바사아자차카타파하 아야어여오요우유으이 가나다라마바사아자차카타파',
      ],
    },
  ],
}

const defaultLandingButton: LandingButton = {
  mainColor: '#9D45E8',
  text: '공백 포함 최대 36바이트 국문 18자',
  link: 'https://www.airklass.com',
  type: 'normal',
}

export const defaultData: { [key: string]: Title | SummaryOnly | LandingButton } = {
  title: defaultTitle,
  summaryOnly: defaultSummaryOnly,
  landingButton: defaultLandingButton,
}
