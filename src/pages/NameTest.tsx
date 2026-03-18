import { type FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { calcNameLovePercent } from '../utils/loveCalc'
import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'
import { useI18n } from '../i18n/i18n'

const NameTest = () => {
  const [firstName, setFirstName] = useState('')
  const [secondName, setSecondName] = useState('')
  const navigate = useNavigate()
  const { t } = useI18n()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const value = calcNameLovePercent(firstName, secondName)

    navigate(
      `/loading?value=${encodeURIComponent(value)}&a=${encodeURIComponent(
        firstName,
      )}&b=${encodeURIComponent(secondName)}`,
    )
  }

  return (
    <main className="page name-test-page">
      <motion.div
        className="name-hero"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <motion.div
          className="name-hero-icon"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FaHeart />
          <FaHeart />
        </motion.div>
        <h1 className={"name-text-header"}>{t("nameTest.title")}</h1>
        <p>{t("nameTest.subtitle")}</p>
      </motion.div>

      <motion.form
        className="name-test-form fancy"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <label>
          {t("nameTest.youNameLabel")}
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder={t("nameTest.youNamePlaceholder")}
            required
          />
        </label>

        <label>
          {t("nameTest.partnerNameLabel")}
          <input
            type="text"
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
            placeholder={t("nameTest.partnerNamePlaceholder")}
            required
          />
        </label>

        <motion.button
          type="submit"
          className="cta-button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          {t("nameTest.submit")}
        </motion.button>
      </motion.form>
    </main>
  )
}

export default NameTest


