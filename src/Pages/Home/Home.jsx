import '../../Styles/Home.scss'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar  from '../../Components/Navbar/Navbar'
import Widget  from '../../Components/Widget/Widget'

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="client"  cypher="negative" />
          <Widget type="balance" cypher="positive" />
          <Widget type="project" cypher="negative" />
          <Widget type="worker"  cypher="positive" />
        </div>
      </div>
    </div>
  )
}

export default Home