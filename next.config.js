// const { default: i18next } = require('i18next')
const nextTranslate = require('next-translate')
// const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...nextTranslate(),
  // i18n,
}


module.exports = nextConfig
module.exports = nextTranslate();
