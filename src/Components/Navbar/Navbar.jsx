import '../../Styles/Navbar.css'
import axios from 'axios'
import { useState } from 'react'
import store from '../../app/redux/store'
import { setTransactions } from '../../app/redux/action'
import {
  Search,
  Language,
  Palette,
  ChatBubble,
  NotificationsRounded
} from '@mui/icons-material'
import avatar from '../../Resources/img/avatar.jpg'
import {
  ToastContainer,
  toast
} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Navbar() {
  const [click,setClick] = useState(false)
  const user             = useState(store.getState().user)
  const rows             = store.getState().transaction
  let transact           = []
  if(rows) {
    rows.forEach(item => {
      let title = `${item.company} has paid you ${item.amount+item.asset} for concept: "${item.concept}" today`
      let obj   = {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        delay: 0
      }
      transact.push([title, obj])
    })
  }
  
  axios.get(`${process.env.REACT_APP_ZORM+process.env.REACT_APP_SELECT_TRANSACTION}`)
  .then((res) => {
    if (res.data) {
      const dataT = res.data
      store.dispatch(setTransactions(dataT))
    }
  })
  .catch((err) => {
    console.log(err)
  })

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
  
  const notify = () => {
    transact.forEach(item => {
    toast(item[0], {
      position: item[1].position,
      autoClose: item[1].autoClose,
      hideProgressBar: item[1].hideProgressBar,
      closeOnClick: item[1].closeOnClick,
      pauseOnHover: item[1].pauseOnHover,
      draggable: item[1].draggable,
      progress: item[1].progress,
      theme: item[1].theme,
      delay: item[1].delay
    })
  })}

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
            <NotificationsRounded className='icon' onClick={notify} />
            <ToastContainer />
            <div className="counter"></div>
          </div>
          <div className="item" title='Profile'>
            <h5 className='name'>{user[0].name}</h5>
            <img src={ avatar } alt="Avatar" className='avatar' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar