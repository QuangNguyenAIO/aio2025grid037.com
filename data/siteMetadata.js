const siteMetadata = {
  title: "aio2025grid037.com's Blog",
  author: 'aio2025grid037.com',
  fullName: 'aio2025grid037.com',
  headerTitle: "aio2025grid037.com's Blog",
  description: 'Our desire to practice Our skills and share our acquired knowledge.',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://aio2025grid037.com',
  analyticsURL: 'https://analytics.aio2025grid037.com/share/Z3eSINRnbzydz1gK/aio2025grid037.com',
  siteRepo: 'https://github.com/Karhdo/aio2025grid037.com',
  siteLogo: '/static/images/avatar.jpg',
  image: '/static/images/avatar.jpg',
  socialBanner: '/static/images/projects/karhdo-blog.png',
  email: 'dotrongkhanh.dev@gmail.com',
  github: 'https://github.com/Karhdo',
  facebook: 'https://www.facebook.com/aio2025grid037.com',
  linkedin: 'https://www.linkedin.com/in/karhdo',
  twitter: 'https://twitter.com/karhdo',
  youtube: 'https://youtube.com',
  locale: 'en-US',
  stickyNav: false,
  socialAccounts: {
    github: 'Karhdo',
    linkedin: 'karhdo',
    facebook: 'aio2025grid037.com',
  },
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.UMAMI_WEBSITE_ID,
    },
  },
  newsletter: {
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'title',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
      inputPosition: 'bottom',
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      // path to load documents to search
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
};

module.exports = siteMetadata;
