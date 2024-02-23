import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './style.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter } from 'react-router-dom'
import Loop from './Component/Loop'
import './main'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const App = () => {
  return (

    <BrowserRouter>
      <Loop />
      <ToastContainer />
    </BrowserRouter>


  )
}

export default App
