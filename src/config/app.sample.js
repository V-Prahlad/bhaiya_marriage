const baseConfig = {
  weddingDay: 'Friday',
  weddingTime: '19.00 - 21.00',
  weddingDate: 'June 22, 2022',
  showBuiltWithInfo: true,
  showQrCode: false,
  calendarInfo: {
    timeStartISO: '2022-06-22T19:00:00+08:00',
    timeEndISO: '2022-06-22T21:00:00+08:00',
  },
  coupleInfo: {
    brideName: 'Manju',
    groomName: 'Dilip',
    coupleNameFormat: 'GROOM_FIRST',
  },
  venue: {
    name: 'Naitand',
    addressLine1: 'Naitand,Post - Baddiha',
    addressLine2: 'Jamua,',
    city: 'Giridih',
    country: 'India',
    mapUrl: 'https://goo.gl/maps/dScLgiowcitzzHpMA',
  },
  logo: {
    headerLogo: '/assets/images/ring-svg.png',
    footerLogo: '/assets/video/aw-ring-logo-ticker.mp4',
    footerLogoType: 'mp4',
  },
  ogTags: {
    logo: '/assets/images/aw-ring-logo.png',
    siteName: 'wedding.wzulfikar.com',
    publishedTime: '2020-01-25',
  },
};

const lang = {
  id: {
    weddingDay: 'Thursday',
    weddingDate: '22 July 2022',
    venue: {
      ...baseConfig.venue,
      name: 'Naitand',
      addressLine2: 'Naitand,',
    },
  },
};

export default {
  ...baseConfig,
  lang,
};
