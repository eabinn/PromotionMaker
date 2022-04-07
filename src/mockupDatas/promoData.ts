import {
  Benefits,
  LandingButton,
  Notes,
  PackageCards,
  Profiles,
  SummaryWithImage,
  Title,
  MarketingVideo,
  IPromoSection,
  List,
  Profile,
  Benefit,
  PackageCard,
  PackageCardButton,
  TitleWithBar,
  Reviews,
  Review,
} from '@/interfaces/promo.interfaces'

export const defaultDescription: List = {
  title: '리스트 타이틀',
  type: 'number',
  items: [
    '기본 노트 리스트 아이템 가나다라마바사아자차 아야어여오요우유으이',
    '가나다라마바사아자차카타파하 아야어여오요우유으이 가나다라마바사아자차카타파',
  ],
}

export const defaultProfile: Profile = {
  name: '강사명',
  images: {
    '1x': 'https://i.picsum.photos/id/233/183/183.jpg?hmac=jy33ns7RiGhwQmq3QHOp97Y0EGdKEQcXL-vRX6MDhuE',
    '2x': 'https://i.picsum.photos/id/233/183/183.jpg?hmac=jy33ns7RiGhwQmq3QHOp97Y0EGdKEQcXL-vRX6MDhuE',
  },
  descriptions: [
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

export const defaultBenefit: Benefit = {
  identifier: '혜택 1',
  title: '더미 텍스트 가나다라',
  text: ' 가나다라마바사 더미 텍스트 가나다라마바사아자차',
  images: {
    '1x': 'https://i.picsum.photos/id/879/396/220.jpg?hmac=ha-MDDbv8d1ywmvn2VQOtKFU3OnOrB8xS49KBdim_0s',
    '2x': 'https://i.picsum.photos/id/879/396/220.jpg?hmac=ha-MDDbv8d1ywmvn2VQOtKFU3OnOrB8xS49KBdim_0s',
  },
}

export const defaultPackageCardButton: PackageCardButton = {
  type: 'normal',
  mainColor: '#9D45E8',
  text: '클래스',
  day: '123',
  price: '9,999,900',
  link: 'https://airklass.com',
}

export const defaultPackageCard: PackageCard = {
  mainColor: '#9D45E8',
  identifier: 'PACKAGE 1',
  subTitle: '서브 타이틀 한 줄 최대 18자',
  title: '타이틀 한 줄 12자<br>타이틀 한 줄 12자',
  descriptions: ['asdfasfasfasdfas;lfjasf', 'qwerqwerqwerqwer', 'sdfasdfasasdfasdf'],
  buttons: [defaultPackageCardButton, defaultPackageCardButton],
}

const defaultTitle: Title = {
  type: 'title',
  title: '센터 정렬 타이틀 큰 사이즈<br>센터 정렬 타이틀 큰 사이즈',
  titleSize: 'normal',
  upSubtitle: '센터 정렬 서브 타이틀 기본 사이즈 가나다라마바사아자차',
  upSubtitleFontSize: 'normal',
  upSubtitleFontWeight: 'bold',
  underSubtitle: '센터 정렬 서브 타이틀 기본 사이즈 가나다라마바사아자차',
  underSubtitleFontSize: 'big',
  underSubtitleFontWeight: 'normal',
}

const defaultSummaryWithImage: SummaryWithImage = {
  type: 'summaryWithImage',
  barColor: '#000000',
  title: '센터 정렬 타이틀 큰 사이즈<br>센터 정렬 타이틀 큰 사이즈',
  subTitle: '센터 정렬 타이틀 큰 사이즈 센터 정렬 타이틀 큰 사이즈',
  subTitleFontWeight: 'normal',
  imageContentColumn: 6,
  descriptionContentColumn: 6,
  images: {
    '1x': 'https://i.picsum.photos/id/879/396/220.jpg?hmac=ha-MDDbv8d1ywmvn2VQOtKFU3OnOrB8xS49KBdim_0s',
    '2x': 'https://i.picsum.photos/id/879/396/220.jpg?hmac=ha-MDDbv8d1ywmvn2VQOtKFU3OnOrB8xS49KBdim_0s',
  },
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
  imagePosition: 'left',
}

const defaultLandingButton: LandingButton = {
  type: 'landingButton',
  mainColor: '#9D45E8',
  text: '공백 포함 최대 36바이트 국문 18자',
  link: 'https://www.airklass.com',
  style: 'normal',
}

const defaultPackageCards: PackageCards = {
  type: 'packageCards',
  column: 4,
  items: [defaultPackageCard, defaultPackageCard],
}

const defaultNotes: Notes = {
  type: 'notes',
  contentColumn: 8,
  items: [
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

const defaultProfiles: Profiles = {
  type: 'profiles',
  column: 6,
  items: [defaultProfile, defaultProfile],
}

const defaultBenefits: Benefits = {
  type: 'benefits',
  column: 4,
  items: [defaultBenefit, defaultBenefit, defaultBenefit],
}

const defaultMarketingVideo: MarketingVideo = {
  type: 'marketingVideo',
  videoUrl: 'https://www.youtube.com/embed/hB44Fr4gHew',
  rightColor: '#FF00FF',
  leftColor: '#32CD32',
}

export const defaultSection: IPromoSection = {
  color: '#ffffff',
  items: [],
}

export const defaultTitleWithBar: TitleWithBar = {
  type: 'titleWithBar',
  column: 8,
  barColor: '#000000',
  title: '타이틀 텍스트 small h5<br>두 줄 가나다라마바사아자차',
  upSubTitle: '위쪽 서브 타이틀',
  underSubTitle: '아래쪽 서브 타이틀',
}

export const defaultReview: Review = {
  text: `가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사`,
  name: 'ㅇㅇㅇ',
}
export const defaultReviews: Reviews = {
  type: 'reviews',
  items: [defaultReview, defaultReview],
}

export const defaultPromoData = {
  section: defaultSection,
  title: defaultTitle,
  summaryWithImage: defaultSummaryWithImage,
  landingButton: defaultLandingButton,
  packageCards: defaultPackageCards,
  notes: defaultNotes,
  profiles: defaultProfiles,
  benefits: defaultBenefits,
  marketingVideo: defaultMarketingVideo,
  titleWithBar: defaultTitleWithBar,
  reviews: defaultReviews,
}
