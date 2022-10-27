import '../../Styles/Sidebar.scss'
import {useState} from 'react'
import Dropdown from '../Dropdown/Dropdown'
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
} from '@mui/icons-material'

function Sidebar() {
  const [selected, setSelected] = useState("Profile");
  return (
    <div className="sidebar">
      <div className='top'>
        <span className="logo">WAMC</span>
      </div>
      <div className='center'>
        <ul>
          <li>
            <HomeRounded className='icon' />
            <span>Home</span>
          </li>
          <li>
            <CakeOutlined className='icon' />
            <span>Projects</span>
          </li>
          <li>
            <Splitscreen className='icon' />
            <span>Tasks</span>
          </li>
          <li>
            <AccountCircle className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <Person3Outlined className='icon' />
            <span>Workers</span>
          </li>
          <li>
            <CalendarMonth className='icon' />
            <span>Calendar</span>
          </li>
          <li>
            <Cake className='icon' />
            <span>Battleground</span>
          </li>
          <li>
            <Settings className='icon' />
            <span>Settings</span>
          </li>
          <li>
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