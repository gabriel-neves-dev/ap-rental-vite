import React from 'react'
import ReactDOM from 'react-dom/client'
// import Header from './containers/Header/'
import GlobalStyles from './styles/globalStyles'
import Home from './containers/Header/'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <Home></Home>
  </React.StrictMode>,
)
