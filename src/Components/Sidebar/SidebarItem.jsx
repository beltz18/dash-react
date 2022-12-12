import { useState } from 'react'
import { Link }     from 'react-router-dom'
import {
  HomeRounded,
  AccountCircle,
  CalendarMonth,
  Cake,
  CakeOutlined,
  Settings,
  ExitToApp,
  Splitscreen,
  Person3Outlined,
  Payment,
  ExpandMore,
  People,
} from '@mui/icons-material'

const icons = [
  <HomeRounded className='icon' />,
  <AccountCircle className='icon' />,
  <CalendarMonth className='icon' />,
  <Cake className='icon' />,
  <CakeOutlined className='icon' />,
  <Settings className='icon' />,
  <ExitToApp className='icon' />,
  <Splitscreen className='icon' />,
  <Person3Outlined className='icon' />,
  <Payment className='icon' />,
  <People className='icon' />,
]

function SidebarItem ({item}) {
  const [open, setOpen] = useState(false)

  if (item.childrens) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"} onClick={() => { setOpen(!open) }}>
        <div className="sidebar-title">
          <span>
            {icons[item.icon]}
            {item.title}
          </span>
          <ExpandMore className='toggle'  />
        </div>
        <div className="sidebar-content">
          {item.childrens.map((child, index) => <SidebarItem key={index} item={child} />) }
        </div>
      </div>
    )
  } else {
    return (
      <Link to={item.path} className="link">
        <div className="sidebar-item">
          <div className="sidebar-title">
            <span>
              {icons[item.icon]}
              {item.title}
            </span>
          </div>
        </div>
      </Link>
    )
  }
}

export default SidebarItem