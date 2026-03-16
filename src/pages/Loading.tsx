import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Particles from 'react-tsparticles'
import type { Engine } from '@tsparticles/engine'
import { useCallback } from 'react'
import { loadFull } from 'tsparticles'
import Cupid from '../components/Cupid'

const Loading = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`/result${location.search}`, { replace: true })
    }, 2000)
    return () => clearTimeout(timer)
  }, [location.search, navigate])

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  return (
    <main className="page loading-page">
      <div className="hearts-layer">
        <Particles
          id="hearts-loading"
          init={particlesInit as any}
          options={{
            fullScreen: { enable: false },
            background: { color: { value: 'transparent' } },
            particles: {
              number: { value: 30, density: { enable: true, area: 800 } },
              move: {
                enable: true,
                direction: 'top',
                speed: 1.4,
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
              size: { value: 16, random: { enable: true, minimumValue: 8 } },
              opacity: {
                value: 0.9,
                random: { enable: true, minimumValue: 0.5 },
              },
            },
          }}
        />
      </div>

      <div className="loading-content">
        <motion.div
          className="loading-cupid-wrap"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: [20, 0, 10, 0], opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Cupid />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Calculating love...</h1>
          <p>Купидон подсчитывает вашу совместимость, подожди пару секунд.</p>
        </motion.div>
      </div>
    </main>
  )
}

export default Loading

