import React from 'react'
import './App.css'
import Header from './Header'
import RecommendedVideos from './RecommendedVideos'
import Sidebar from './Sidebar'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SearchPage from './SearchPage'

function App () {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path={'/search/:searchTerm'}>
            <div className='app_page'>
              <Sidebar />
              <SearchPage />
            </div>{' '}
          </Route>
          <Route path={'/'}>
            <div className='app_page'>
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
