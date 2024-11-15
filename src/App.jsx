import { useState } from 'react'
import Header from './Components/Header'
import Profile from './Components/Profile'
import AboutMe from './Components/AbouMe'
import MySkills from './Components/MySkills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Profile />
      <AboutMe />
      <MySkills />
    </>
  )
}

export default App
