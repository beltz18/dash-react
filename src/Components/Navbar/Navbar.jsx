import '../../Styles/Navbar.css'
import React, { useState } from 'react'
import store from '../../app/redux/store'
import {
  Search,
  Language,
  Palette,
  ChatBubble,
  NotificationsRounded
} from '@mui/icons-material'
import avatar from '../../Resources/img/avatar.jpg'

function Navbar() {
  const [click,setClick] = useState(false)
  const user             = useState(store.getState().user)

  const tick = () => {
    click === true ? setClick(false) : setClick(true)
    let t  = document.querySelector('.theme_bottom')
    let u  = [...t.classList]
    let c1 = (element) => element === 'hide'
    let c2 = (element) => element === 'show'
    if (u.some(c1) === true) {
      t.classList.remove('none')
      t.classList.remove('hide')
      t.classList.add('show')
    } else if(u.some(c2) === true) {
      t.classList.remove('show')
      t.classList.add('hide')
      setTimeout(() => {
        t.classList.add('none')
      }, 900)
    } else {
      t.classList.remove('none')
      t.classList.add('show')
    }
  }

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
            <Palette className='icon' onClick={tick} />
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
            <h5 className='name'>{user.name}</h5>
            <img src={ avatar } alt="Avatar" className='avatar' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar