import React from 'react'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import Carde from './components/Carde'

const App = () => {
  return (
  <>
  <Home/>
  <Signup user2={{myname:"sruthy",email:"sredha@gmail.com"}}/>
  <Login/>
  <Carde/>
  
  </>
  )
}

export default App