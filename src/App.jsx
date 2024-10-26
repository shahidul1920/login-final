import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/RouterNav/Route'

function App() {

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
