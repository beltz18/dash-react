import './Styles/root.css'
import React      from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
}                 from 'react-router-dom'
import Home       from './Pages/Home/Home'
import Calendar   from './Pages/Calendar/Calendar'
import Profile    from './Pages/Profile/Profile'
import New        from './Pages/New/New'
import List       from './Pages/List/List'
import Single     from './Pages/Single/Single'
import NotFound   from './Pages/404/NotFound'
import Loading    from './Pages/Loading/Loading'
import Payroll    from './Pages/Payroll/Payroll'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/'>
            <Route index           element={ <Home /> }     />
            <Route path=':token'   element={ <Loading /> }  />
            <Route path='calendar' element={ <Calendar /> } />
            <Route path='profile'  element={ <Profile /> }  />
            <Route path='new'      element={ <New /> }      />
            <Route path='payroll'  element={ <Payroll /> }  />
            <Route path='user'>
              <Route index         element={ <List /> }     />
              <Route path=':sin'   element={ <Single /> }   />
            </Route>
            <Route path="*"        element={ <NotFound/> }  />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App