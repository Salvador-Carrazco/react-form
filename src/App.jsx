import { useState } from 'react'
import Authenticate from './comps/Authenticate'
import SignUpForm from './comps/SignUpForm'
import './App.css'

function App() {
  const [token, setToken] = useState(null)

  return (
    <>
    <Authenticate token={token} setToken={setToken} />
    <SignUpForm token={token} setToken={setToken}/>
    </>
  )
}

export default App
