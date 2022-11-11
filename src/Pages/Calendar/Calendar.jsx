import '../../Styles/Calendar.scss'
import Sidebar   from '../../Components/Sidebar/Sidebar'
import Navbar    from '../../Components/Navbar/Navbar'
import Scheduler from '../../Components/Calendar/Scheduler'

const Calendar = () => {
  return (
    <div className="calendar">
      <Sidebar />
      <div className="calendarContainer">
        <Navbar />
        <div className="container">
          <h1 className="title">Calendar</h1>
          <Scheduler />
        </div>
      </div>
    </div>
  )
}

export default Calendar