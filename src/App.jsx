import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ContactOne from './components/ContactOne'
import ContactTwo from './components/ContactTwo'
import Footer from './components/Footer'

function App() {
const [isDark, setIsDark] = useState(true)
  return (
    <>
      <Header isDark={isDark} setIsDark={setIsDark}/>
      <main className='mt-1 pl-4 '>

      <ContactOne/>
      </main>
      {/* <ContactTwo/>
      <Footer/> */}
      </>
  )
}

export default App
