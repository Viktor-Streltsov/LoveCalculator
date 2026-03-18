import { useI18n } from '../i18n/i18n'

const About = () => {
  const { t } = useI18n()

  return (
    <main className="page about-page">
      <h1>{t("about.title")}</h1>
      <p>
        {t("about.p1")}
      </p>
      <p>{t("about.p2")}</p>
    </main>
  )
}

export default About

