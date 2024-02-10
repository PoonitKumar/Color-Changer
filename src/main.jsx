import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import {jsx as _jsx} from 'react/jsx-runtime.js'

function MyApp() {
  return (
    <h1>Ready</h1>
  )
}

const ReactElement = {
  type: 'a',
  props: {
    href: 'http://www.google.com/',
    target: '_blank'
  },
  children: 'Click'
}

const anotherElement = (
  <a href="http://www.google.com/" target='_blank'>Google</a>
)

const anotherUser = 'new user'

const reactElement = React.createElement(
  'a',
  { href: 'http://www.google.com/', target: '_blank' },
  'Click me ',
  anotherUser
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)