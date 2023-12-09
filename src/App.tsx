import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParentComponent from './toggle/props/ParentComponent'

function App() {
  return (
    <>
      <h1>Toggle Props</h1>
      <ParentComponent />
    </>
  )
}

export default App
