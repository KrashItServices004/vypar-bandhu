import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './Main'
import Alert from './Alert'
import Accordian from './Accordian'
import Badges from './Badges'
import Foemelement from './Foemelement'
import Generaltable from './Generaltable'
import Chart from './Chart'
import Icons from './Icons'
import Breadcrumbs from './Breadcrumbs'
import Profile from './Profile'
import Faq from './Faq'
import Contact from './Contact'
import Register from './Register'
import Login from './Login'
import Error from './Error'
import Blank from './Blank'
import Templates from './Templates'
import Service from './Service'
import Category from './Category'
import '../Component/main.css'
import DocumentList from './DocumentList'

const Loop = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/Templates' element={<Templates />} />
                <Route path='/service' element={<Service />} />
                <Route path='/category' element={<Category />} />
                <Route path='/DocumentList' element={<DocumentList />} />

                <Route path='/Alerts' element={<Alert />} />
                <Route path='/Accordion' element={<Accordian />} />
                <Route path='/Badges' element={<Badges />} />
                <Route path='/Breadcrumbs' element={<Breadcrumbs />} />
                <Route path='/forms-elements' element={<Foemelement />} />
                <Route path='/GeneralTable' element={<Generaltable />} />
                <Route path='/Chart' element={<Chart />} />
                <Route path='/Icons' element={<Icons />} />
                <Route path='/Profile' element={<Profile />} />
                <Route path='/Faq' element={<Faq />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/Register' element={<Register />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Error' element={<Error />} />
                <Route path='/Blank' element={<Blank />} />
            </Routes>
        </>
    )
}

export default Loop