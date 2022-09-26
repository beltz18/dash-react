import '../../Styles/Navbar.scss'
import {
  Search,
  Language,
  Palette,
  ChatBubble,
  NotificationsRounded
} from '@mui/icons-material'
import avatar from '../../Resources/img/avatar.jpg'

function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="search" placeholder='Search' />
          <Search className='icon' />
        </div>
        <div className="items">
          <div className="item" title='Language'>
            <Language className='icon' />
            <span>English</span>
          </div>
          <div className="item" title='Theme Color'>
            <Palette className='icon' />
          </div>
          <div className="item" title='Messages'>
            <ChatBubble className='icon' />
            <div className="counter"></div>
          </div>
          <div className="item" title='Notifications'>
            <NotificationsRounded className='icon' />
            <div className="counter"></div>
          </div>
          <div className="item" title='Profile'>
            <img src={ avatar } alt="Avatar" className='avatar' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar