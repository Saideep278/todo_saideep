import React from 'react'
import App from './app'
import  ReactDOM  from 'react-dom/client'
import {Provider} from 'react-redux'
import { configureStore  } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { applyMiddleware ,compose} from 'redux'
import {reducers} from './reducers/index'

const root = ReactDOM.createRoot(document.getElementById('root'))

const store = configureStore({reducer:reducers},{},compose(applyMiddleware(thunk)))


root.render(
    <Provider store={store}>
        <App />    
    </Provider>,    
)