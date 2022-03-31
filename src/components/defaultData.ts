import {
  Benefits,
  LandingButton,
  Notes,
  PackageCards,
  Profiles,
  ProfileWithHeader,
  SummaryOnly,
  SummaryWithImage,
  Title,
  MarketingVideo,
} from './item.types'

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

const defaultSummaryWithImage: SummaryWithImage = {
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
  mainColor: '#9D45E8',
  text: '공백 포함 최대 36바이트 국문 18자',
  link: 'https://www.airklass.com',
  type: 'normal',
}

const defaultPackageCards: PackageCards = {
  items: [
    {
      mainColor: '#9D45E8',
      identifier: 'PACKAGE 1',
      subTitle: '서브 타이틀 한 줄 최대 18자',
      title: '타이틀 한 줄 12자<br>타이틀 한 줄 12자',
      descriptions: ['asdfasfasfasdfas;lfjasf', 'qwerqwerqwerqwer', 'sdfasdfasasdfasdf'],
      buttons: [
        {
          type: 'normal',
          mainColor: '#9D45E8',
          text: '클래스',
          day: '123',
          price: '9,999,900',
          link: 'https://airklass.com',
        },
        {
          type: 'outline',
          mainColor: '#9D45E8',
          text: '패키지',
          day: '123',
          price: '9,999,900',
          link: 'https://airklass.com',
        },
      ],
    },
    {
      mainColor: '#9D45E8',
      identifier: 'PACKAGE 1',
      subTitle: '서브 타이틀 한 줄 최대 18자',
      title: '타이틀 한 줄 12자<br>타이틀 한 줄 12자',
      descriptions: ['asdfasfasfasdfas;lfjasf', 'qwerqwerqwerqwer', 'sdfasdfasasdfasdf'],
      buttons: [
        {
          type: 'normal',
          mainColor: '#9D45E8',
          text: '클래스',
          day: '123',
          price: '9,999,900',
          link: 'https://airklass.com',
        },
        {
          type: 'outline',
          mainColor: '#9D45E8',
          text: '패키지',
          day: '123',
          price: '9,999,900',
          link: 'https://airklass.com',
        },
      ],
    },
  ],
}

const defaultNotes: Notes = {
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
  items: [
    {
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
        {
          title: '리스트 타이틀',
          type: 'number',
          items: [
            '기본 노트 리스트 아이템 가나다라마바사아자차 아야어여오요우유으이',
            '가나다라마바사아자차카타파하 아야어여오요우유으이 가나다라마바사아자차카타파',
          ],
        },
      ],
    },
    {
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
        {
          title: '리스트 타이틀',
          type: 'number',
          items: [
            '기본 노트 리스트 아이템 가나다라마바사아자차 아야어여오요우유으이',
            '가나다라마바사아자차카타파하 아야어여오요우유으이 가나다라마바사아자차카타파',
          ],
        },
      ],
    },
  ],
}

const defaultProfileWithHeader: ProfileWithHeader = {
  barColor: '#000000',
  title: '센터 정렬 타이틀 큰 사이즈',
  subTitle: '센터 정렬 타이틀 큰 사이즈 센터 정렬 타이틀 큰 사이즈',
  subTitleFontWeight: 'normal',
  profile: {
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
      {
        title: '리스트 타이틀',
        type: 'number',
        items: [
          '기본 노트 리스트 아이템 가나다라마바사아자차 아야어여오요우유으이',
          '가나다라마바사아자차카타파하 아야어여오요우유으이 가나다라마바사아자차카타파',
        ],
      },
    ],
  },
}

const defaultBenefits: Benefits = {
  itemColumn: 4,
  items: [
    {
      identifier: '혜택 1',
      title: '더미 텍스트 가나다라',
      text: ' 가나다라마바사 더미 텍스트 가나다라마바사아자차',
      images: {
        '1x': 'https://i.picsum.photos/id/879/396/220.jpg?hmac=ha-MDDbv8d1ywmvn2VQOtKFU3OnOrB8xS49KBdim_0s',
        '2x': 'https://i.picsum.photos/id/879/396/220.jpg?hmac=ha-MDDbv8d1ywmvn2VQOtKFU3OnOrB8xS49KBdim_0s',
      },
    },
    {
      identifier: '혜택 1',
      title: '더미 텍스트 가나다라',
      text: ' 가나다라마바사 더미 텍스트 가나다라마바사아자차',
      images: {
        '1x': 'https://i.picsum.photos/id/879/396/220.jpg?hmac=ha-MDDbv8d1ywmvn2VQOtKFU3OnOrB8xS49KBdim_0s',
        '2x': 'https://i.picsum.photos/id/879/396/220.jpg?hmac=ha-MDDbv8d1ywmvn2VQOtKFU3OnOrB8xS49KBdim_0s',
      },
    },
    {
      identifier: '혜택 1',
      title: '더미 텍스트 가나다라',
      text: ' 가나다라마바사 더미 텍스트 가나다라마바사아자차',
      images: {
        '1x': 'https://i.picsum.photos/id/879/396/220.jpg?hmac=ha-MDDbv8d1ywmvn2VQOtKFU3OnOrB8xS49KBdim_0s',
        '2x': 'https://i.picsum.photos/id/879/396/220.jpg?hmac=ha-MDDbv8d1ywmvn2VQOtKFU3OnOrB8xS49KBdim_0s',
      },
    },
  ],
}

const defaultMarketingVideo: MarketingVideo = {
  videoUrl: 'https://www.youtube.com/embed/hB44Fr4gHew',
  rightColor: '#FF00FF',
  leftColor: '#32CD32',
}

export const defaultData: {
  [key: string]:
    | Title
    | SummaryOnly
    | SummaryWithImage
    | LandingButton
    | PackageCards
    | Notes
    | Profiles
    | ProfileWithHeader
    | Benefits
    | MarketingVideo
} = {
  title: defaultTitle,
  summaryOnly: defaultSummaryOnly,
  summaryWithImage: defaultSummaryWithImage,
  landingButton: defaultLandingButton,
  packageCards: defaultPackageCards,
  notes: defaultNotes,
  profiles: defaultProfiles,
  profileWithHeader: defaultProfileWithHeader,
  benefits: defaultBenefits,
  marketingVideo: defaultMarketingVideo,
}
