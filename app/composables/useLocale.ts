import en, { type TranslationKey } from "~/i18n/en"

/**
 * TopScore AI Landing — English-only locale composable.
 * Ports the `t(key, vars)` pattern from the Next.js LocaleProvider so existing
 * component call sites (`const { t } = useLocale()`) work unchanged.
 */
export type Locale = "en"

export function useLocale() {
  const t = (key: TranslationKey, vars?: Record<string, string>) => {
    let value = (en as Record<string, string>)[key] ?? (key as string)
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        value = value.replace(`{${k}}`, v)
      }
    }
    return value
  }

  return {
    locale: "en" as const,
    t,
    setLocale: () => {
      console.warn("TopScore AI is now English-only. setLocale is disabled.")
    },
  }
}

export type { TranslationKey }
