import React from "react"
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import Home from './pages/Home'
import NameTest from './pages/NameTest'
import DateTest from './pages/DateTest'
import Loading from './pages/Loading'
import Result from './pages/Result'
import About from './pages/About'
import Intro from './pages/Intro'
import { I18nProvider, useI18n } from "./i18n/i18n"
import './App.css'

const IntroGate = () => {
  const navigate = useNavigate()
  const location = useLocation()

  React.useEffect(() => {
    if (typeof window === 'undefined') return
    const introSeen = localStorage.getItem('introSeen')
    if (introSeen !== 'true' && location.pathname !== '/intro') {
      navigate('/intro', { replace: true })
    }
  }, [location.pathname, navigate])

  return null
}

function LanguageSwitcher() {
  const { lang, setLang } = useI18n()

  return (
    <div className="lang-switcher" role="group" aria-label="Language">
      <button
        type="button"
        className={`lang-btn ${lang === "en" ? "active" : ""}`}
        onClick={() => setLang("en")}
      >
        EN
      </button>
      <button
        type="button"
        className={`lang-btn ${lang === "ru" ? "active" : ""}`}
        onClick={() => setLang("ru")}
      >
        RU
      </button>
    </div>
  )
}

function AppInner() {
  const { t } = useI18n()
  const location = useLocation()
  const reduceMotion = useReducedMotion()

  const routeKey = `${location.pathname}${location.search}`

  return (
    <div className="app-shell">
      <header className="app-header">
        <Link to="/" className="logo">
          {t("common.appName")}
        </Link>
        <LanguageSwitcher />
      </header>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={routeKey}
          className="app-route"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.28, ease: "easeOut" }}
        >
          <Routes location={location}>
            <Route path="/intro" element={<Intro />} />
            <Route path="/" element={<Home />} />
            <Route path="/name" element={<NameTest />} />
            <Route path="/date" element={<DateTest />} />
            <Route path="/loading" element={<Loading />} />
            <Route path="/result" element={<Result />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      <footer className="app-footer">
        <nav className="bottom-nav">
          <Link to="/">{t("common.home")}</Link>
          <Link to="/about">{t("common.about")}</Link>
        </nav>
      </footer>
    </div>
  )
}

function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <IntroGate />
        <AppInner />
      </BrowserRouter>
    </I18nProvider>
  )
}

export default App
