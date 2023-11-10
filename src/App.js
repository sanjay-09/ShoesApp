import React from 'react'
import Navigation from './Navigation/Navigation'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import SideBar from './SideBar/SideBar'
import { Provider } from 'react-redux'
import appStore from './Redux/appStore'

const App = () => {
  return (
    <div>
    <Provider store={appStore}>
      <SideBar/>
    <Navigation/>
    <Recommended/>
    <Products/>
    </Provider>
    
    </div>
  )
}

export default App
