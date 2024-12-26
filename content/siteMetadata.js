const siteMetadata = {
  title: 'Le Hoang Tam',
  author: 'Le Hoang Tam',
  headerTitle: 'Le Hoang Tam',
  description: 'Software Developer at NUS',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://thnkandgrow.com',
  siteRepo: 'https://github.com/kokorolx',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/kokorolx.webp',
  socialBanner: '/static/images/twitter-card.png',
  email: 'kokoro.lehoang+contact@gmail.com',
  github: 'https://github.com/kokorolx',
  linkedin: 'https://www.linkedin.com/in/lehoangtam95/',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
};

module.exports = siteMetadata;
