const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Muhammad Muhajir - Portfolio', // Navigation and Site Title
  siteTitleAlt: 'Muhammad Muhajir', // Alternative Site title for SEO
  siteUrl: 'https://muhajirframe.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  // siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'Muhammad Muhajir Portfolio',

  siteFBAppID: '123456789', // Facebook App ID
  userTwitter: '@_muhajir_', // Twitter Username
  ogSiteName: 'muhajir.mp', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
