import '../../Styles/Home.scss'
import Sidebar from '../../Components/Sidebar/Sidebar'

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <h1>Container</h1>
      </div>
    </div>
  )
}

export default Home