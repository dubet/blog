import i18next from 'i18next';
import enLocale from '@locales/en.json';
import frLocale from '@locales/fr.json';

const Locale = {
	French: "fr",
	English: "en",
} as const;

type Locale = typeof Locale[keyof typeof Locale];

interface EducationEntry {
	label: string;
	years: string;
	institution: string;
	location: string;
};

interface EmploymentEntry {
	label: string;
	years: string;
	company: string;
	location: string;
	content: string[];
	tags: string[];
};

const I18N = (() => {
	i18next.init({
		fallbackLng: "fr",
		debug: false,
		resources: {
			en: { translation: enLocale },
			fr: { translation: frLocale },
		},
	});

	return i18next;
})();

function initLocale(locale: Locale): any {
	I18N.changeLanguage(locale);

	return I18N.t;
}

const COPYRIGHT_USER: string = "Cyril Dubet";
const COPYRIGHT_DATE: string = "2023 - 2025";
const DEFAULT_LOCALE: Locale = Locale.French;

export { initLocale, COPYRIGHT_DATE, COPYRIGHT_USER, DEFAULT_LOCALE, Locale, type EducationEntry, type EmploymentEntry };
