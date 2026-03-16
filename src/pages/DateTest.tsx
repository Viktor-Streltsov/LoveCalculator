import { type FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaBirthdayCake } from 'react-icons/fa'
import { calcDateLovePercent } from '../utils/loveCalc'

const DateTest = () => {
  const [firstDate, setFirstDate] = useState('')
  const [secondDate, setSecondDate] = useState('')
  const navigate = useNavigate()

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
        <h1>Тест по датам рождения</h1>
        <p>Выбери даты рождения и смотри, что подскажет судьба.</p>
      </motion.div>

      <motion.form
        className="name-test-form fancy"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <label>
          Дата рождения тебя
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
          Дата рождения партнера
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
          Проверить совместимость
        </motion.button>
      </motion.form>
    </main>
  )
}

export default DateTest

