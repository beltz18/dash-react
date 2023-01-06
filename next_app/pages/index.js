import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Main from './layouts/Main/Main'

export default function Home() {
  return (
    <Router>
      <Routes>
        <Route path='/'>
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </Router>
  )
}