import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Counter.jsx'
import './index.css'
import Display from './Display.jsx'
import Counter from './Counter.jsx'
import CounterProvider from './context.jsx'
import EjemploUseReducer from './EjemploUseReducer.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <CounterProvider>
    <Counter/>
    <Display/>
    <EjemploUseReducer/>
    </CounterProvider>
)
