import { useState } from 'react'
import './App.css'
import '../styles/style.css'
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
