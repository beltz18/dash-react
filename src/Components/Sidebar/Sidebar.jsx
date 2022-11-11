import '../../Styles/Sidebar.scss'
// import {useState}  from 'react'
import { Link }    from 'react-router-dom';
// import Dropdown from '../Dropdown/Dropdown'
import {
  HomeRounded,
  AccountCircle,
  CalendarMonth,
  Cake,
  Settings,
  ExitToApp,
  Splitscreen,
  CakeOutlined,
  Person3Outlined,
  Payment,
} from '@mui/icons-material'

function Sidebar() {
  return (
    <div className="sidebar">
      <div className='top'>
        <span className="logo">Amigo Workforce</span>
      </div>
      <div className='center'>
        <ul>
          <Link to={"/"} className="link">
            <li>
              <HomeRounded className='icon' />
              <span>Home</span>
            </li>
          </Link>
          <Link to={"/"} className="link">
            <li>
              <CakeOutlined className='icon' />
              <span>Projects</span>
            </li>
          </Link>
          <Link to={"/"} className="link">
            <li>
              <Splitscreen className='icon' />
              <span>Tasks</span>
            </li>
          </Link>
          <Link to={"/profile"} className="link">
            <li>
              <AccountCircle className='icon' />
              <span>Profile</span>
            </li>
          </Link>
          <Link to={"/user"} className="link">
            <li>
              <Person3Outlined className='icon' />
              <span>Workers</span>
            </li>
          </Link>
          <Link to={"/payroll"} className="link">
            <li>
              <Payment className='icon' />
              <span>Payroll</span>
            </li>
          </Link>
          <Link to={"/calendar"} className="link">
            <li>
              <CalendarMonth className='icon' />
              <span>Calendar</span>
            </li>
          </Link>
          <Link to={"/"} className="link">
            <li>
              <Cake className='icon' />
              <span>Battleground</span>
            </li>
          </Link>
          <Link to={"/"} className="link">
            <li>
              <Settings className='icon' />
              <span>Settings</span>
            </li>
          </Link>
            <li onClick={() => {window.location="http://localhost:3001"}}>
              
              <ExitToApp className='icon' />
              <span>Logout</span>
            </li>
          {/* <li>
            <AccountCircle className='icon' />
            <Dropdown selected={selected} setSelected={setSelected} />
          </li>
          <li>
            <AccountCircle className='icon' />
            <Dropdown selected={selected} setSelected={setSelected} />
          </li> */}
        </ul>
      </div>
      <div className="bottom none theme_bottom">
        <span>Theme</span>
        <div className="colorOption" title='Light'></div>
        <div className="colorOption" title='Blue'></div>
        <div className="colorOption" title='Dark'></div>
      </div>
    </div>
  )
}

export default Sidebar