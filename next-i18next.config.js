// used for SSR (getServerSideProps)
const path = require('path');
const localePath = path.resolve('./public/locales');

module.exports = {
  // https://www.i18next.com/overview/configuration-options#logging
  // debug: process.env.NODE_ENV === 'development',
  debug: false,
  i18n: {
    locales: ['en-GB', 'ar-SA', 'th-TH'],
    defaultLocale: 'en-GB',
  },
  localePath,
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  serializeConfig: false,
};
