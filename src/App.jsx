import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import Reference from './components/Reference'

function App() {

  return (
    <>
      <Routes>
      <Route path={'/'} element={<Main child={<Home/>}/>}></Route>
      <Route path={'/reference'} element={<Main child={<Reference/>}/>}></Route>
      
      </Routes>
    </>
  )
}

export default App
