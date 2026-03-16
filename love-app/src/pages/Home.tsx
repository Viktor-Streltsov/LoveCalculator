import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaHeart, FaBirthdayCake } from 'react-icons/fa'
import Cupid from '../components/Cupid'

const Home = () => {
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
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FaHeart />
          </motion.div>

          <motion.div
            className="hero-cupid-img-wrap"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Cupid />
          </motion.div>
        </div>
        <h1>Love Compatibility</h1>
        <p>Романтические тесты совместимости — по именам и датам рождения.</p>
      </motion.div>

      <motion.nav
        className="home-nav"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 12 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.08, delayChildren: 0.1 },
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
              <strong>Тест по именам</strong>
              <small>Узнай магию ваших имён</small>
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
              <strong>Тест по датам рождения</strong>
              <small>Судьба по вашим датам</small>
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
              <strong>О приложении</strong>
              <small>Как работает совместимость и купидон</small>
            </span>
          </Link>
        </motion.div>
      </motion.nav>
    </main>
  )
}

export default Home

