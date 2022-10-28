import '../../Styles/Home.scss'

import {
  setUsers
} from '../../app/redux/action'
import store from '../../app/redux/store'
import axios from 'axios'

import Sidebar  from '../../Components/Sidebar/Sidebar'
import Navbar   from '../../Components/Navbar/Navbar'
import Widget   from '../../Components/Widget/Widget'
import Features from '../../Components/Features/Features'
import Chart    from '../../Components/Chart/Chart'
import Table    from '../../Components/Table/Table'

const Home = () => {
  axios.get('http://localhost:5000/select/all')
  .then((res) => {
    if (res.data) {
      const arr  = res.data
      const rows = []
      for (let i = 0; i < arr.length; i++) {
        let rand1      = Math.round(Math.random()*100)
        let rand2      = Math.round(Math.random()*10)
        let obj        = {
          id: arr[i]._id,
          name: arr[i].name,
          email: arr[i].email,
          age: rand1,
          hours: rand2,
          status: "online"
        }
        rows.push(obj)
      }
      store.dispatch(setUsers(rows))
    }
  })
  .catch((err) => {
    console.log(err)
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