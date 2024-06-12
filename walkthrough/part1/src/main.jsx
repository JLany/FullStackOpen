import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

let counter = 1

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <App />
)

// const refresh = () => {
//   root.render(
//     <App counter={counter} />
//   )
// }

// setInterval(() => {
//   refresh()
//   counter++
// }, 1000)
