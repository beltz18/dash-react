import "../../Styles/Features.scss"
import {
  MoreVertRounded,
} from "@mui/icons-material"
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const Features = () => {
  return (
    <div className="features">
      <div className="top">
        <h1 className="title">Revenue</h1>
        <MoreVertRounded />
      </div>
      <div className="bottom">
        <div className="featuresChart">
          <CircularProgressbar
            value={70}
            text={"70%"}
            strokeWidth={1}
          />
          <p className="title">Total sales made today</p>
          <p className="amount">$420</p>
          <p className="desc">
            Previous transactions processing. Last payment may not be included
          </p>
        </div>
      </div>
    </div>
  )
}

export default Features