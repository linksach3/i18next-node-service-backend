var i18next = require('i18next'),
  Backend = require('../lib/index.js');

i18next.use(Backend);
i18next.init({
	debug: true,
  saveMissing: false,
  preload: ['en', 'de'],
  fallbackLng: 'en',
  backend: {
    referenceLng: 'en',
    projectId: '2596e805-2ce2-4e21-9481-ee62202ababd',
    apiKey: '3f608f6f-7b4a-4d7f-8374-13dcd31ecf86',
		// version: 'staging',
    // loadPath: '[SERVICE_URL]/2596e805-2ce2-4e21-9481-ee62202ababd/{{version}}/{{lng}}/{{ns}}',
    // addPath: '[SERVICE_URL]/missing/2596e805-2ce2-4e21-9481-ee62202ababd/{{version}}/{{lng}}/{{ns}}'
  }
});

setInterval(function () {
  console.log(i18next.t('translation:All', { lng: 'de' }))
}, 1000);
