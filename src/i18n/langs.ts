export const locales = {
  en: {
    label: "English",
    dayjs: () => import("dayjs/locale/en"),
    flatpickr: null,
    i18n: () => import("./locales/en/translations.json"),
    flag: "united-kingdom",
  },
  vi: {
    label: "Tiếng Việt",
    dayjs: () => import("dayjs/locale/vi"),
    flatpickr: () =>
      import("flatpickr/dist/l10n/vn").then((module) => module.Vietnamese),
    i18n: () => import("./locales/vi/translations.json"),
    flag: "vn",
  },

};

export const supportedLanguages = Object.keys(locales);

export type LocaleCode = keyof typeof locales;

export type Dir = "ltr" | "rtl";
