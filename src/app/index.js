
import React from 'react'
import ReactDOM from 'react-dom'
import {Header} from './Components/Header/Header'
import './app.scss'
import { AboutMe } from './Components/AboutMe/AboutMe'
import { Projects } from './Components/Projects/Projects'
import { Contacts } from './Components/Contacts/Contacts'

// https://www.sanssheriff.wtf/
//https://www.designonstop.com/download/palettes/20-gotovyx-cvetovyx-palitr-v-stile-retro-vzyatyx-s-vintazhnyx-sajtov.htm
//https://thisistommy.com/
//https://imgur.com/gallery/0w8ZnBa
const App = () => {
    return( <React.Fragment>
                <Header/>
                <AboutMe/>
                <Projects/>
                <Contacts/>
            </React.Fragment>)
}

ReactDOM.render(<App/>, document.getElementById('root'))