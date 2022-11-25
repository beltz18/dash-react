import React, {useState} from 'react'
import {
  KeyboardArrowDown,
} from "@mui/icons-material"
import '../../Styles/Dropdown.css'

function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const profileOptions = ["Account,Check in and Check out", "Appearance", "Change Password", "Profile", "Access Rights"];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
        {selected}
        <span><KeyboardArrowDown/></span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {profileOptions.map((option) => (
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