import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
//import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

//Using ReactDom to render our App component (from App.tsx) to the div with id 'root' in index.html
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
