import '../../Styles/Dropdown.css'

const Dropdown = () => {
  return (
    <div className="dropdown">
      <div className="dropdown-btn">Choose One</div>
      <div className="dropdown-content">
        <div className="dropdown-item">
          React
        </div>
        <div className="dropdown-item">
          Vue
        </div>
        <div className="dropdown-item">
          Angular
        </div>
      </div>
    </div>
  )
}

export default Dropdown