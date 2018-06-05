import React from 'react'

import { HashRouter } from 'react-router-dom'

import Routes from './routes'
import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'
import Messages from '../common/msg/messages'

export default props => (
    <HashRouter>
        <div className='wrapper'>
            <Header />
            <SideBar />
            <Routes />
            <Footer />
            <Messages />
        </div>
    </HashRouter>
)