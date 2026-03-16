import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className="page home-page">
      <h1>Love Compatibility</h1>
      <p>Выбери тип теста совместимости и узнай свой результат.</p>
      <nav className="home-nav">
        <Link to="/name-test">Тест по именам</Link>
        <Link to="/date-test">Тест по датам</Link>
        <Link to="/quiz">Викторина</Link>
        <Link to="/history">История результатов</Link>
        <Link to="/about">О приложении</Link>
      </nav>
    </main>
  )
}

export default Home

