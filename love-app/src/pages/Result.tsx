import { useLocation, useNavigate } from 'react-router-dom'

const Result = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const params = new URLSearchParams(location.search)

  const rawValue = params.get('value')
  const a = params.get('a') || ''
  const b = params.get('b') || ''

  const percent = rawValue ? Math.max(0, Math.min(100, Number(rawValue))) : null

  let message = ''
  if (percent !== null && !Number.isNaN(percent)) {
    if (percent > 70) {
      message = 'Отличная пара'
    } else if (percent < 40) {
      message = 'Сложные отношения'
    } else {
      message = 'Есть потенциал, всё зависит от вас'
    }
  }

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <main className="page result-page">
      <h1>Результат совместимости</h1>

      {percent === null || Number.isNaN(percent) ? (
        <p>Похоже, данные для расчёта не найдены. Попробуй пройти тест ещё раз.</p>
      ) : (
        <>
          <p>
            Пара: <strong>{a || '—'}</strong> и <strong>{b || '—'}</strong>
          </p>
          <p className="result-percent">
            Ваша совместимость: <strong>{percent}%</strong>
          </p>
          <p>{message}</p>
        </>
      )}

      <div className="result-actions">
        <button type="button" onClick={handleBack}>
          Назад
        </button>
      </div>
    </main>
  )
}

export default Result


