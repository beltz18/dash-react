import '../../Styles/profile.scss'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar  from '../../Components/Navbar/Navbar'

const Profile = () => {
  return (
    <div className="profile">
      <Sidebar />
      <div className="profileContainer">
        <Navbar />
        <h1 className="title">Profile</h1>
      </div>
    </div>
  )
}

export default Profile