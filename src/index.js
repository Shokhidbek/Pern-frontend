import React from "react";
import { createRoot } from 'react-dom/client'
import App from "./App";
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from "react-redux";
import store from './features/store'


const container = document.querySelector('#root')
const root = createRoot(container)

root.render(
    <Provider store={store}>
        <Router >
            <App />
        </Router>
    </Provider>
)

