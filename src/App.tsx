import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import ContentSection from './components/ContentSection'
import CountProvider from './services/CounterContext'

function App() {
  console.log("Welcome to App");
  return (
    <>
    <CountProvider>
      <Home>
        <Header />
        <ContentSection />
        <Footer />
      </Home>
    </CountProvider>
    </>
  )
}

export default App
