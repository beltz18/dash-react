import "../../Styles/Widget.css"
import {
  KeyboardArrowUp,
  KeyboardArrowDown,
  Person2Rounded,
  MonetizationOnRounded,
  BusinessCenterRounded,
  GroupRounded,
} from "@mui/icons-material"
import React    from 'react'
import { Link } from "react-router-dom"

const Widget = ({ type, cypher }) => {
  let data

  switch (type) {
    case 'client':
      data = {
        title: "Clients",
        isMoney: false,
        value: 45124,
        percentage: 23,
        link: "See all clients",
        icon1: <Person2Rounded
                  className="icon"
                  sx={{
                    color: "crimson",
                    backgroundColor: "rgba(255,0,0,.2)"
                  }}
                />,
        icon2: null
      }

      cypher === "positive" ? data.icon2 = <KeyboardArrowUp /> : data.icon2 = <KeyboardArrowDown />
      break;
    
    case 'balance':
      data = {
        title: "Balance",
        isMoney: true,
        value: 1200456,
        percentage: 16,
        link: "See your balance",
        icon1: <MonetizationOnRounded
                  className="icon"
                  sx={{
                    color: "green",
                    backgroundColor: "rgba(0,128,0,.2)"
                  }}
                />,
        icon2: null
      }

      cypher === "positive" ? data.icon2 = <KeyboardArrowUp /> : data.icon2 = <KeyboardArrowDown />
      break;
    
    case 'project':
      data = {
        title: "Projects",
        isMoney: false,
        value: 120,
        percentage: 3,
        link: "See all projects",
        icon1: <BusinessCenterRounded
                  className="icon"
                  sx={{
                    color: "goldenrod",
                    backgroundColor: "rgba(218,165,32,.2)"
                  }}
                />,
        icon2: null
      }

      cypher === "positive" ? data.icon2 = <KeyboardArrowUp /> : data.icon2 = <KeyboardArrowDown />
      break;
    
    case 'worker':
      data = {
        title: "Workers",
        isMoney: false,
        value: 2,
        percentage: 8,
        link: "Your workers",
        a: "/user",
        icon1: <GroupRounded
                  className="icon"
                  sx={{
                    color: "purple",
                    backgroundColor: "rgba(128,0,128,.2)"
                  }}
                />,
        icon2: null
      }

      cypher === "positive" ? data.icon2 = <KeyboardArrowUp /> : data.icon2 = <KeyboardArrowDown />
      break;

    default:
      console.log('Error, missing type and cypher')
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{ data.title }</span>
        <span className="counter">{ data.isMoney && '$' } { data.value }</span>
        <Link to={data.a} className="link">
          <span className="link">{ data.link }</span>
        </Link>
      </div>
      <div className="right">
        <div className={"percentage "+cypher}>
          { data.icon2 }
          { data.percentage }%
        </div>
        { data.icon1 }
      </div>
    </div>
  )
}

export default Widget