import {useState} from 'react'

import {
    KeyboardArrowUp,
    KeyboardArrowDown,
    AccountCircle,
  } from "@mui/icons-material"

import '../../Styles/Dropdown.scss'

function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const profileOptions = ["Account,Check in and Check out", "Appearance", "Change Password", "Profile", "Access Rights"];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <span><KeyboardArrowDown/></span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {profileOptions.map((option) => (
            <div
              onClick={(e) => {
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
  );
}

export default Dropdown