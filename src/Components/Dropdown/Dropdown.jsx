import {useState} from 'react'
import {
  KeyboardArrowDown,
} from "@mui/icons-material"
import '../../Styles/Dropdown.scss'

function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ["React", "Vue", "Angular"];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
        {selected}
        <span><KeyboardArrowDown/></span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              onClick={() => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown