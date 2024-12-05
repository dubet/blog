import i18next from 'i18next';
import enUS from '@public/locales/en/en-US.json'
import frFR from '@public/locales/fr/fr-FR.json'

const Locale = {
	French: "FR",
	English: "EN",
} as const;

type Locale = typeof Locale[keyof typeof Locale];

const DEFAULT_LOCALE: Locale = Locale.French;

const COPYRIGHT_USER: string = "Cyril Dubet";
const COPYRIGHT_DATE: string = "2023 - 2024";

i18next.init({
	debug: true,
	resources: {
		en: enUS,
		fr: frFR,
	}
});

export { Locale, DEFAULT_LOCALE, COPYRIGHT_DATE, COPYRIGHT_USER, i18next };
