import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { FaHeart, FaBirthdayCake } from 'react-icons/fa'
import Cupid from '../components/Cupid'
import { useI18n } from '../i18n/i18n'

const Home = () => {
  const { t } = useI18n()
  const reduceMotion = useReducedMotion()

  return (
    <main className="page home-page">
      <motion.div
        className="hero-card"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="hero-icon-wrap">
          <motion.div
            className="hero-heart"
            animate={reduceMotion ? { scale: 1 } : { scale: [1, 1.08, 1] }}
            transition={
              reduceMotion ? { duration: 0 } : { duration: 1.8, repeat: Infinity, ease: 'easeInOut' }
            }
          >
            <FaHeart />
          </motion.div>

          <motion.div
            className="hero-cupid-img-wrap"
            animate={reduceMotion ? { y: 0 } : { y: [0, -10, 0] }}
            transition={reduceMotion ? { duration: 0 } : { duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Cupid />
          </motion.div>
        </div>
        <h1>{t("home.title")}</h1>
        <p>{t("home.description")}</p>
      </motion.div>

      <motion.nav
        className="home-nav"
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 12 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: reduceMotion ? 0 : 0.08,
              delayChildren: reduceMotion ? 0 : 0.1,
            },
          },
        }}
      >
        <motion.div
          className="home-card"
          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          whileHover={{ y: -3, scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link to="/name">
            <span className="home-card-icon">
              <FaHeart />
            </span>
            <span className="home-card-text">
              <strong>{t("home.nameTestTitle")}</strong>
              <small>{t("home.nameTestSubtitle")}</small>
            </span>
          </Link>
        </motion.div>

        <motion.div
          className="home-card"
          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          whileHover={{ y: -3, scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link to="/date">
            <span className="home-card-icon">
              <FaBirthdayCake />
            </span>
            <span className="home-card-text">
              <strong>{t("home.dateTestTitle")}</strong>
              <small>{t("home.dateTestSubtitle")}</small>
            </span>
          </Link>
        </motion.div>

        <motion.div
          className="home-card secondary"
          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          whileHover={{ y: -2, scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <Link to="/about">
            <span className="home-card-text">
              <strong>{t("home.aboutTitle")}</strong>
              <small>{t("home.aboutSubtitle")}</small>
            </span>
          </Link>
        </motion.div>
      </motion.nav>
    </main>
  )
}

export default Home

