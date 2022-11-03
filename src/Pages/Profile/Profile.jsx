import '../../Styles/profile.scss'
import store   from '../../app/redux/store'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar  from '../../Components/Navbar/Navbar'
import Map     from '../../app/map/component/map/Map'

const Profile = () => {
  const me = store.getState().user

  return (
    <div className="profile">
      <Sidebar />
      <div className="profileContainer">
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
          <div className="right">
            <Map />
          </div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  )
}

export default Profile