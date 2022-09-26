import '../../Styles/Home.scss'

import Sidebar  from '../../Components/Sidebar/Sidebar'
import Navbar   from '../../Components/Navbar/Navbar'
import Widget   from '../../Components/Widget/Widget'
import Features from '../../Components/Features/Features'
import Chart    from '../../Components/Chart/Chart'

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
        <div className="charts">
          <Features />
          <Chart />
        </div>
      </div>
    </div>
  )
}

export default Home