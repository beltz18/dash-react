import '../../Styles/Home.css'
import io              from 'socket.io-client'
import store           from '../../app/redux/store'
import Sidebar         from '../../Components/Sidebar/Sidebar'
import Navbar          from '../../Components/Navbar/Navbar'
import Widget          from '../../Components/Widget/Widget'
import Features        from '../../Components/Features/Features'
import Chart           from '../../Components/Chart/Chart'
import Table           from '../../Components/Table/Table'
import {
  setUsers,
} from '../../app/redux/action'

const socket = io.connect(process.env.REACT_APP_API_SOCKETS)

const Home = () => {
  /* It's emitting the user's email to the server and then listening for the response. */
  socket.emit("me", { me: store.getState().user.email })
  socket.on("data_workers", (data) => {
    console.log(data)
    store.dispatch(setUsers(data))
  })

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
        <span>
          {process.env.REACT_APP_TESTS}
        </span>
        <div className="charts">
          <Features />
          <Chart />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest transactions</div>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Home