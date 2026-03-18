import React, { useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useI18n } from '../i18n/i18n'

const Intro: React.FC = () => {
  const navigate = useNavigate()
  const { t } = useI18n()

  useEffect(() => {
    if (typeof window === 'undefined') return
    const introSeen = localStorage.getItem('introSeen')
    if (introSeen === 'true') {
      navigate('/', { replace: true })
    }
  }, [navigate])

  const handleStart = useCallback(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('introSeen', 'true')
    }
    navigate('/', { replace: true })
  }, [navigate])

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5rem',
    background: 'radial-gradient(circle at top left, #ffe5f0 0%, #ff9fb8 35%, #ff6f91 70%, #ff477e 100%)',
  }

  const cardStyle: React.CSSProperties = {
    position: 'relative',
    maxWidth: '480px',
    width: '100%',
    padding: '2.5rem 2rem 2.75rem',
    borderRadius: '1.75rem',
    background: 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0 18px 45px rgba(255, 71, 126, 0.35)',
    textAlign: 'center',
    overflow: 'hidden',
  }

  const titleStyle: React.CSSProperties = {
    fontSize: '2.2rem',
    lineHeight: 1.2,
    marginBottom: '0.75rem',
    color: '#ff2f6a',
    textShadow: '0 2px 8px rgba(255, 47, 106, 0.4)',
  }

  const subtitleStyle: React.CSSProperties = {
    fontSize: '0.98rem',
    color: '#b23b5f',
    marginBottom: '1.75rem',
  }

  const buttonStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.35rem',
    padding: '0.9rem 2.2rem',
    borderRadius: '999px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.05rem',
    fontWeight: 600,
    color: '#fff',
    background: 'linear-gradient(135deg, #ff4b8b, #ff1644)',
    boxShadow: '0 10px 25px rgba(255, 22, 68, 0.45)',
    transition: 'transform 0.15s ease-out, box-shadow 0.15s ease-out, filter 0.15s ease-out',
  }

  const buttonHoverStyle: React.CSSProperties = {
    transform: 'translateY(-1px) scale(1.02)',
    boxShadow: '0 14px 30px rgba(255, 22, 68, 0.55)',
    filter: 'brightness(1.03)',
  }

  const floatingHeartBase: React.CSSProperties = {
    position: 'absolute',
    fontSize: '1.6rem',
    opacity: 0.75,
    pointerEvents: 'none',
  }

  const [isButtonHovered, setIsButtonHovered] = React.useState(false)

  return (
    <main style={containerStyle}>
      <section style={cardStyle} aria-label={t("intro.ariaLabel")}>
        <span
          style={{
            ...floatingHeartBase,
            top: '1.2rem',
            left: '1.3rem',
            fontSize: '1.4rem',
          }}
        >
          ❤️
        </span>
        <span
          style={{
            ...floatingHeartBase,
            top: '0.9rem',
            right: '1.5rem',
            fontSize: '1.8rem',
          }}
        >
          💖
        </span>
        <span
          style={{
            ...floatingHeartBase,
            bottom: '1.2rem',
            left: '1.8rem',
          }}
        >
          💘
        </span>
        <span
          style={{
            ...floatingHeartBase,
            bottom: '1.1rem',
            right: '1.2rem',
          }}
        >
          💝
        </span>

        <div
          style={{
            marginBottom: '1.5rem',
            display: 'flex',
            justifyContent: 'center',
            gap: '0.35rem',
            fontSize: '1.4rem',
          }}
          aria-hidden="true"
        >
          <span>💗</span>
          <span>💕</span>
          <span>💞</span>
        </div>

        <h1 style={titleStyle}>{t("intro.title")}</h1>

        <p style={subtitleStyle}>{t("intro.subtitle")}</p>

        <button
          type="button"
          style={isButtonHovered ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
          onClick={handleStart}
        >
          <span aria-hidden="true">❤️</span>
          <span>{t("common.start")}</span>
          <span aria-hidden="true">❤️</span>
        </button>
      </section>
    </main>
  )
}

export default Intro

