import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import NameTest from './pages/NameTest'
import DateTest from './pages/DateTest'
import Quiz from './pages/Quiz'
import Result from './pages/Result'
import History from './pages/History'
import About from './pages/About'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="app-header">
          <Link to="/" className="logo">
            ❤️ Love Compatibility
          </Link>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/name" element={<NameTest />} />
          <Route path="/date" element={<DateTest />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route path="/history" element={<History />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <footer className="app-footer">
          <nav className="bottom-nav">
            <Link to="/">Главная</Link>
            <Link to="/history">История</Link>
            <Link to="/about">О приложении</Link>
          </nav>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
