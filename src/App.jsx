import { useState } from 'react'
//import './App.css'
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { NewTransaction } from './components/NewTransaction'

function App() {

  return (
    <>
      <Header />
      <NewTransaction />
    </>
  )
}

export default App
