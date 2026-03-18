import { useLocation, useNavigate } from 'react-router-dom'
import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import type { Engine } from '@tsparticles/engine'
import { loadFull } from 'tsparticles'
import { FaHeart } from 'react-icons/fa'
import heartSvg from '../assets/heart.svg'
import { useI18n } from '../i18n/i18n'

const Result = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const params = new URLSearchParams(location.search)
  const { t, tArray } = useI18n()

  const rawValue = params.get('value')
  const a = params.get('a') || ''
  const b = params.get('b') || ''

  const percent = rawValue ? Math.max(0, Math.min(100, Number(rawValue))) : null

  const pickMessage = (value: number) => {
    if (Number.isNaN(value)) return ''

    if (value >= 85) {
      const variants = tArray("result.message.veryHigh")
      if (!variants.length) return ''
      return variants[value % variants.length]
    }

    if (value >= 70) {
      const variants = tArray("result.message.high")
      if (!variants.length) return ''
      return variants[value % variants.length]
    }

    if (value >= 40) {
      const variants = tArray("result.message.mid")
      if (!variants.length) return ''
      return variants[value % variants.length]
    }

    const variants = tArray("result.message.low")
    if (!variants.length) return ''
    return variants[value % variants.length]
  }

  const message = percent !== null ? pickMessage(percent) : ''

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
                  number: { value: 28, density: { enable: true, area: 800 } },
                  move: {
                    enable: true,
                    direction: 'top',
                    speed: 1.3,
                    outModes: { default: 'out' },
                  },
                  shape: {
                    type: ['char', 'circle'],
                    character: {
                      value: ['❤', '♡'],
                      font: 'Verdana',
                      style: '',
                      weight: '400',
                    },
                  },
                  size: {
                    value: { min: 4, max: 10 },
                  },
                  opacity: {
                    value: { min: 0.4, max: 0.9 },
                  },
                  color: {
                    value: ['#ff4d6d', '#ff8fa3', '#ffffff'],
                  },
                },
              }}
          />
        </div>
      )}

      <div className="result-content">
        <h1>{t("result.title")}</h1>

        {percent === null || Number.isNaN(percent) ? (
          <p>{t("result.notFound")}</p>
        ) : (
          <>
            <div className="result-pair">
              <span className="result-name">{a || '—'}</span>
              <span className="result-heart-separator">
                <FaHeart />
              </span>
              <span className="result-name">{b || '—'}</span>
            </div>

            <div className="result-heart-wrapper">
              <div className="result-heart-svg">
                <img
                  src={heartSvg}
                  alt={t("common.heartAlt")}
                  className="result-heart-img"
                />
                <span className="result-percent-number">{percent}%</span>
              </div>
            </div>

            <p className="result-message">{message}</p>
          </>
        )}

        <div className="result-actions">
          <button type="button" onClick={handleBack}>
            {t("common.back")}
          </button>
        </div>
      </div>
    </main>
  )
}

export default Result


