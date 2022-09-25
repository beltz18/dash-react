import '../../Styles/Sidebar.scss'
import {
  HomeRounded,
  AccountCircle,
  CalendarMonth,
  Cake,
  Settings,
  ExitToApp,
  Splitscreen,
  Palette
} from '@mui/icons-material'

function Sidebar() {
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
      </div>
      <div className="bottom">
        <span>Theme</span>
        <div className="colorOption" title='Light'></div>
        <div className="colorOption" title='Blue'></div>
        <div className="colorOption" title='Dark'></div>
      </div>
    </div>
  )
}

export default Sidebar