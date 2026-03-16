import { type FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { calcNameLovePercent } from '../utils/loveCalc'

const NameTest = () => {
  const [firstName, setFirstName] = useState('')
  const [secondName, setSecondName] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const value = calcNameLovePercent(firstName, secondName)

    navigate(
      `/result?value=${encodeURIComponent(value)}&a=${encodeURIComponent(
        firstName,
      )}&b=${encodeURIComponent(secondName)}`,
    )
  }

  return (
    <main className="page name-test-page">
      <h1>Тест совместимости по именам</h1>
      <p>Введи два имени, чтобы узнать уровень вашей совместимости.</p>

      <form className="name-test-form" onSubmit={handleSubmit}>
        <label>
          Имя 1
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Например, Анна"
            required
          />
        </label>

        <label>
          Имя 2
          <input
            type="text"
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
            placeholder="Например, Иван"
            required
          />
        </label>

        <button type="submit">Проверить</button>
      </form>
    </main>
  )
}

export default NameTest


