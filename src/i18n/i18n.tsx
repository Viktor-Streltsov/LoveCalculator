import React, { createContext, useContext, useMemo, useState } from "react"
import type { Lang } from "./dictionary"
import { dictionaries } from "./dictionary"

type I18nContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: string) => string
  tArray: (key: string) => string[]
}

const I18nContext = createContext<I18nContextValue | null>(null)

function detectInitialLang(): Lang {
  if (typeof window === "undefined") return "en"

  const stored = window.localStorage.getItem("lang")
  if (stored === "ru" || stored === "en") return stored

  // Default language (requested): English.
  return "en"
}

function getByPath(obj: any, path: string) {
  return path.split(".").reduce((acc, part) => acc?.[part], obj)
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => detectInitialLang())

  const setLang = (next: Lang) => {
    setLangState(next)
    if (typeof window !== "undefined") window.localStorage.setItem("lang", next)
  }

  const value = useMemo<I18nContextValue>(() => {
    const dict = dictionaries[lang]

    return {
      lang,
      setLang,
      t: (key: string) => {
        const v = getByPath(dict, key)
        if (typeof v === "string") return v
        if (v == null) return key
        return String(v)
      },
      tArray: (key: string) => {
        const v = getByPath(dict, key)
        if (Array.isArray(v)) return v.map(String)
        return []
      },
    }
  }, [lang])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider")
  return ctx
}

