
import React from 'react'
import ReactDOM from 'react-dom'
import {Header} from './Components/Header/Header'
import './app.scss'

// https://www.sanssheriff.wtf/
//https://www.designonstop.com/download/palettes/20-gotovyx-cvetovyx-palitr-v-stile-retro-vzyatyx-s-vintazhnyx-sajtov.htm

const App = () => {
    return( <React.Fragment>
                <Header/>
            </React.Fragment>)
}

ReactDOM.render(<App/>, document.getElementById('root'))