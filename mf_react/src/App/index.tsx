import React from 'react'

import logo from './logo.svg'

import './styles.css'

export default function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Este é um app React, edite o
                    arquivo <code>src/App/index.tsx</code> e salve-o.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Aprenda React
                </a>
            </header>
        </div>
    )
}