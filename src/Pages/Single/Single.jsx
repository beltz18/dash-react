import "../../Styles/Single.css"
import React           from 'react'
import { useParams }   from "react-router-dom"
import store           from "../../app/redux/store"
import Sidebar         from "../../Components/Sidebar/Sidebar"
import Navbar          from "../../Components/Navbar/Navbar"
import Map             from "../../app/map/component/map/Map"

function Single() {
  const { sin } = useParams()
  const users   = store.getState().users
  const tuser   = {}

  users.forEach(element => {
    if(element.id === sin) {
      tuser['name'] = element.name
      tuser['email'] = element.email
    }
  })

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/3573351/pexels-photo-3573351.png"
                alt="user-profile"
                className="imgItem"
              />
              <div className="details">
                <h1 className="itemTitle">{tuser.name}</h1>
                <h5 className="a">Employee</h5>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{tuser.email}</span>
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
          <div className="right">
            <Map />
          </div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  )
}

export default Single