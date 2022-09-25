import {
  BrowserRouter as Router,
  Routes,
  Route
}               from 'react-router-dom'
import Home     from './Pages/Home/Home'
import Calendar from './Pages/Calendar/Calendar'
import Profile  from './Pages/Profile/Profile'
import New      from './Pages/New/New'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/'>
            <Route index element={ <Home /> } />
            <Route path='calendar' element={ <Calendar /> } />
            <Route path='profile'>
              <Route index element={ <Profile /> } />
              <Route path=':user'  element={ <New /> } />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App