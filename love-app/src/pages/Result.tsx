import { useLocation, useNavigate } from 'react-router-dom'
import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import type { Engine } from '@tsparticles/engine'
import { loadFull } from 'tsparticles'

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

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  return (
    <main className="page result-page">
      {percent !== null && !Number.isNaN(percent) && (
        <div className="hearts-layer">
          <Particles
            id="hearts"
            init={particlesInit as any}
            options={{
              fullScreen: { enable: false },
              background: { color: { value: 'transparent' } },
              particles: {
                number: { value: 25, density: { enable: true, area: 800 } },
                move: {
                  enable: true,
                  direction: 'top',
                  speed: 1.2,
                  outModes: { default: 'out' },
                },
                shape: {
                  type: 'char',
                  character: {
                    value: ['❤', '♡'],
                    font: 'Verdana',
                    style: '',
                    weight: '400',
                  },
                },
                size: { value: 14, random: { enable: true, minimumValue: 8 } },
                opacity: {
                  value: 0.8,
                  random: { enable: true, minimumValue: 0.4 },
                },
              },
            }}
          />
        </div>
      )}

      <div className="result-content">
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
      </div>
    </main>
  )
}

export default Result


