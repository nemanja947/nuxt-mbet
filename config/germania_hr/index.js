export const i18n = {
  strategy: 'prefix',
  defaultLocale: 'hr',
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
      name: 'Hrvatski',
      code: 'hr',
      iso: 'hr-Hr',
      file: 'hr.js'
    }
  ],
  langDir: 'lang/',
  parsePages: false,
  pages: {
    about: {
      es: '/a-propos',
      en: '/about-us',
      hr: '/o-nama'
    },
    betting: {
      es: '/apuesta',
      en: '/betting',
      hr: '/kladjenje'
    },
    live: {
      es: '/eslive',
      en: '/live',
      hr: '/uzivo'
    }
  }
}