import "../../Styles/Features.css"
import {
  MoreVertRounded,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material"
import React                   from 'react'
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const Features = () => {
  return (
    <div className="features_main">
      <div className="top">
        <h1 className="title">Revenue</h1>
        <MoreVertRounded />
      </div>
      <div className="bottom">
        <div className="featuresChart">
          <CircularProgressbar
            value={70}
            text={"70%"}
            strokeWidth={2}
          />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="description">
          Previous transactions processing. Last payment may not be included
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">
              Today
            </div>
            <div className="itemResult positive">
              <KeyboardArrowUp fontSize="small" />
              <div className="resultAmount">
                $12.4k
              </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">
              Last week
            </div>
            <div className="itemResult negative">
              <KeyboardArrowDown fontSize="small" />
              <div className="resultAmount">
                $12.4k
              </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">
              Last Month
            </div>
            <div className="itemResult positive">
              <KeyboardArrowUp fontSize="small" />
              <div className="resultAmount">
                $12.4k
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features