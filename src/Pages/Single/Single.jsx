import "../../Styles/Single.scss"
import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar  from "../../Components/Navbar/Navbar"

function Single() {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="edit">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/3573351/pexels-photo-3573351.png"
                alt="user-profile"
                className="imgItem"
              />
              <div className="details">
                <h1 className="itemTitle">Jhon Doe</h1>
                <h5 className="a">Employee</h5>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">jhondoe@gmail.com</span>
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
            <h1>Map</h1>
          </div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  )
}

export default Single