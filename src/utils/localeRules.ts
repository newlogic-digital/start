const currencyDefaults = {
  minimumFractionDigits: 0,
  maximumFractionDigits: undefined,
}

export const currencyFormats = {
  AUD: { ...currencyDefaults, key: 'currency', currency: 'AUD', locale: 'en-AU' },
  CAD: { ...currencyDefaults, key: 'currency', currency: 'CAD', locale: 'en-CA' },
  CZK: { ...currencyDefaults, key: 'currency', currency: 'CZK', locale: 'cs' },
  EUR: { ...currencyDefaults, key: 'currency', currency: 'EUR', locale: 'de' },
  GBP: { ...currencyDefaults, key: 'currency', currency: 'GBP', locale: 'en-GB' },
  GEL: { ...currencyDefaults, key: 'currency', currency: 'GEL', locale: 'ka' },
  USD: { ...currencyDefaults, key: 'currency', currency: 'USD', locale: 'en-US' },
}

export const datetimeFormats = {
  cs: {
    short: {
      year: 'numeric', month: 'numeric', day: 'numeric',
    },
    noYear: {
      month: 'numeric', day: 'numeric',
    },
  },
  en: {
    short: {
      year: 'numeric', month: 'numeric', day: 'numeric',
    },
    noYear: {
      month: 'numeric', day: 'numeric',
    },
  },
}

export const numberFormats = {
  cs: {
    currency: {
      style: 'currency', currency: 'CZK', notation: 'standard', minimumFractionDigits: 0, maximumFractionDigits: 0,
    },
    decimal: {
      style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2,
    },
    percent: {
      style: 'percent', useGrouping: false,
    },
  },
  en: {
    currency: {
      style: 'currency', currency: 'USD', notation: 'standard', minimumFractionDigits: 0, maximumFractionDigits: 0,
    },
    decimal: {
      style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2,
    },
    percent: {
      style: 'percent', useGrouping: false,
    },
  },
}

export const pluralRules = {
  cs(choice: number) {
    if (choice === 0) {
      return 0
    }

    if (choice === 1) {
      return 1
    }

    if (choice >= 2 && choice <= 4) {
      return 2
    }

    return 3
  },
}
