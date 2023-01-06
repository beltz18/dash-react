import '../../Styles/profile.css'
import React, {
  useState,
} from 'react'
import moment  from 'moment/moment'
import store   from '../../app/redux/store'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar  from '../../Components/Navbar/Navbar'
import io      from 'socket.io-client'
import axios   from 'axios'

const socket = io.connect(process.env.REACT_APP_API_SOCKETS)

const Profile = () => {
  const [message, setMessage]   = useState("Verifying your checkin and checkout status...")
  const [checkin, setCheckin]   = useState("")
  const [checkout, setCheckOut] = useState("")
  const me = store.getState().user

  const putos = async () => {
    const date = moment().format('YYYY-MM-DD HH:mm')
    const a    = date.split(" ")
    const day  = a[0]
    const data_checkin  = await axios.post(process.env.REACT_APP_API_SERVER+process.env.REACT_APP_CHECKIN_SELECT,  {email: me.email, dayCheckin: day })
    const data_checkout = await axios.post(process.env.REACT_APP_API_SERVER+process.env.REACT_APP_CHECKOUT_SELECT, {email: me.email, dayCheckOut: day})
    
    if (!data_checkin.data.message)  {
      setCheckin(data_checkin.data)
      const date = checkin.dayCheckin+" "+checkin.timeCheckin
      const timePassed = moment(date).fromNow()
      if (checkin) { setMessage(`you have checked-in ${timePassed}`) }
    } else { setMessage("you haven't tracked your progress today") }

    if (!data_checkout.data.message) {
      setCheckOut(data_checkout.data)
      const date1 = checkin.dayCheckin+" "+checkin.timeCheckin
      const date2 = checkout.dayCheckOut+" "+checkout.timeCheckOut
      let timePassed = moment(date2).diff(date1, 'hours', true).toFixed(2)
      let ttt        = " hours"
      if (timePassed < 0.99) {
        timePassed = moment(date2).diff(date1, 'minutes', true)
        ttt        = " minutes"
      }
      setMessage(`you tracked ${timePassed+ttt} today`)
    }
  }
  putos()

  const handleClick = (email,type) => {
    const date = moment().format('YYYY-MM-DD HH:mm')
    const a    = date.split(" ")
    const day  = a[0]
    const time = a[1]

    switch (type) {
      case 'checkin':
        socket.emit("checkin", { email, dayCheckin: day, timeCheckin: time })
        socket.on("checkin_msg", (data) => {
          alert(data)
        })
        break

      case 'checkout':
        socket.emit("checkout", { email, dayCheckOut: day, timeCheckOut: time })
        socket.on("checkout_msg", (data) => {
          alert(data)
        })
        break
    
      default:
        console.log("something went wrong in your check request type");
        break;
    }
  }

  return (
    <div className="profile">
      <Sidebar />
      <div className="profileContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="profile-card">
              <div className="edit">Edit</div>
              <h1 className="title">Information</h1>
              <div className="item">
                <img
                  src="https://images.pexels.com/photos/3573351/pexels-photo-3573351.png"
                  alt="user-profile"
                  className="imgItem"
                />
                <div className="details">
                  <h1 className="itemTitle">{me.name}</h1>
                  <h5 className="a">Employee</h5>
                  <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">{me.email}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone:</span>
                    <span className="itemValue">+1 123 4567 8910</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Address:</span>
                    <span className="itemValue">Toronto</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Country:</span>
                    <span className="itemValue">Canada</span>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="check-card">
              <input type="button" className='btnCheckIn' value="Check-in"  onClick={() => { handleClick(me.email, "checkin") }}  />
              <input type="button" className='btnCheckOut' value="Check-out" onClick={() => { handleClick(me.email, "checkout") }} />
            </div>
            <br />
            <span className='title-center'>{ message }</span>
          </div>
          <div className="right"></div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  )
}

export default Profile