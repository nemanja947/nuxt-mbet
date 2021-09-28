export const i18n = {
  strategy: 'prefix',
  defaultLocale: 'sr',
  locales: [
    {
      name: 'English',
      code: 'en',
      iso: 'en-US',
      file: 'en.js'
    },
    {
      name: 'Español',
      code: 'es',
      iso: 'es-ES',
      file: 'es.js'
    },
    {
      name: 'Serbian',
      code: 'sr',
      iso: 'sr-SR',
      file: 'sr.js'
    }
  ],
  langDir: 'lang/',
  parsePages: false,
  pages: {
    about: {
      es: '/a-propos',
      en: '/about-us',
      sr: '/o-nama'
    },
    betting: {
      es: '/apuesta',
      en: '/betting',
      sr: '/kladjenje'
    },
    live: {
      es: '/eslive',
      en: '/live',
      sr: '/uzivo'
    }
  }
}