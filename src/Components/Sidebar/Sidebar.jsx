import '../../Styles/Sidebar.scss'

function Sidebar() {
  return (
    <div className="sidebar">
      <div className='top'>
        <span className="logo">WAMC</span>
      </div>
      <div className='center'>
        <ul>
          <li>
            <span>Home</span>
          </li>
          <li>
            <span>Profile</span>
          </li>
          <li>
            <span>Calendar</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        options
      </div>
    </div>
  )
}

export default Sidebar