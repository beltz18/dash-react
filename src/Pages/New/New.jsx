import '../../Styles/New.css'
import React     from 'react'
import Sidebar   from "../../Components/Sidebar/Sidebar"
import Navbar    from "../../Components/Navbar/Navbar"

const New = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <h1 className="title">New User</h1>
      </div>
    </div>
  )
}

export default New