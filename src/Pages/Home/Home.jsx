import '../../Styles/Home.scss'
import axios           from 'axios'
import addNotification from 'react-push-notification'
import logo            from '../../Resources/img/wamc.png'
import { setUsers }    from '../../app/redux/action'
import store           from '../../app/redux/store'
import Sidebar         from '../../Components/Sidebar/Sidebar'
import Navbar          from '../../Components/Navbar/Navbar'
import Widget          from '../../Components/Widget/Widget'
import Features        from '../../Components/Features/Features'
import Chart           from '../../Components/Chart/Chart'
import Table           from '../../Components/Table/Table'

const Home = () => {
  axios.get('http://localhost:5000/select/all')
  .then((res) => {
    if (res.data) {
      const arr  = res.data
      const me   = store.getState().user.email
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
        if (arr[i].email !== me) {
          rows.push(obj)
        }
      }
      store.dispatch(setUsers(rows))
    }
  })
  .catch((err) => {
    console.log(err)
  })

  const notification = () => {
    addNotification({
      title: "Welcome",
      message: "Hello World",
      duration: 5000,
      icon: logo,
      native: true,
      onClick: () => {
        console.log("Hello Push Notif")
      }
    })
  }

  return (
    <div className="home">
      {notification()}
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