import enLocale from "@locales/en.json";
import frLocale from "@locales/fr.json";
import i18next from "i18next";

export type Locale = "en" | "fr";

export interface EducationEntry {
	label: string;
	years: string;
	institution: string;
	location: string;
}

export interface EmploymentEntry {
	label: string;
	years: string;
	company: string;
	location: string;
	content: string[];
	tags: string[];
}

const I18N = (() => {
	i18next.init({
		fallbackLng: "en",
		debug: false,
		resources: {
			en: { translation: enLocale },
			fr: { translation: frLocale },
		},
	});

	return i18next;
})();

export const initLocale = (locale: Locale): any => {
	I18N.changeLanguage(locale);

	return I18N.t;
};

export const COPYRIGHT_USER: string = "Cyril Dubet";
export const COPYRIGHT_DATE: string = "2023 - 2026";
export const DEFAULT_LOCALE: Locale = "en";

export const getAge = (date: Date): number => {
	const today: Date = new Date();
	const diff: number = today.getTime() - date.getTime();
	const ageDate: Date = new Date(diff);
	return Math.abs(ageDate.getUTCFullYear() - 1970);
};

export const getFormattedDate = (date: Date, locale: Locale): string => {
	const day = date.getDate();
	const suffix: string | undefined = (() => {if (locale == "en") { return day >= 11 && day <= 13 ? "th" : ["th", "st", "nd", "rd"][day % 10] } if (locale == "fr") { return day == 1 ? "er" : undefined } return undefined; })();
	const weekday = date.toLocaleDateString(locale, { weekday: "long" });
	const month = date.toLocaleDateString(locale, { month: "long" });
	const year = date.getFullYear();

	switch (locale) {
		case "en":
			return `${weekday}, ${month} ${day}${suffix ?? ""}, ${year}`;
		case "fr":
			return `${weekday[0]?.toUpperCase() + weekday.slice(1)} ${day}${suffix ?? ""} ${month} ${year}`;
	}
};
