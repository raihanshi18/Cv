import { useState } from 'react'
import Profile from './Components/Profile.jsx'
import Header from './Components/header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Profile />
    </>
  )
}

export default App
