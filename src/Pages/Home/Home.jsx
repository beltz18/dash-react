import '../../Styles/Home.scss'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar  from '../../Components/Navbar/Navbar'

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <h1>Container</h1>
      </div>
    </div>
  )
}

export default Home