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
} from '@mui/icons-material'

function Sidebar() {
  const [selected, setSelected] = useState("Choose One");
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
            <Splitscreen className='icon' />
            <span>Tasks</span>
          </li>
          <li>
            <AccountCircle className='icon' />
            <span>Profile</span>
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
        </ul>
        <Dropdown selected={selected} setSelected={setSelected} />
      </div>
      <div className="bottom hide">
        <span>Theme</span>
        <div className="colorOption" title='Light'></div>
        <div className="colorOption" title='Blue'></div>
        <div className="colorOption" title='Dark'></div>
      </div>
    </div>
  )
}

export default Sidebar