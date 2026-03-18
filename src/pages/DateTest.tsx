import { type FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaBirthdayCake } from 'react-icons/fa'
import { calcDateLovePercent } from '../utils/loveCalc'
import { useI18n } from '../i18n/i18n'

const DateTest = () => {
  const [firstDate, setFirstDate] = useState('')
  const [secondDate, setSecondDate] = useState('')
  const navigate = useNavigate()
  const { t } = useI18n()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (!firstDate || !secondDate) return

    const value = calcDateLovePercent(firstDate, secondDate)

    navigate(
      `/loading?value=${encodeURIComponent(value)}&a=${encodeURIComponent(
        firstDate,
      )}&b=${encodeURIComponent(secondDate)}`,
    )
  }

  return (
    <main className="page date-test-page">
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
          <FaBirthdayCake />
        </motion.div>
        <h1>{t("dateTest.title")}</h1>
        <p>{t("dateTest.subtitle")}</p>
      </motion.div>

      <motion.form
        className="name-test-form fancy"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <label>
          {t("dateTest.yourBirthDateLabel")}
          <div className="date-input-wrapper">
            <input
              type="date"
              value={firstDate}
              onChange={(e) => setFirstDate(e.target.value)}
              required
            />
          </div>
        </label>

        <label>
          {t("dateTest.partnerBirthDateLabel")}
          <div className="date-input-wrapper">
            <input
              type="date"
              value={secondDate}
              onChange={(e) => setSecondDate(e.target.value)}
              required
            />
          </div>
        </label>

        <motion.button
            type="submit"
          className="cta-button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          {t("dateTest.submit")}
        </motion.button>
      </motion.form>
    </main>
  )
}

export default DateTest

