import "../../Styles/Loading.css"
import React from 'react'
import {
  LinearProgress
} from "@mui/material"
import {
  useParams,
  useNavigate
} from 'react-router-dom'
import {
  setUser,
  clearUser
} from '../../app/redux/action'
import store from '../../app/redux/store'
import axios from 'axios'

function Loading() {
  const { token } = useParams()
  const navigate  = useNavigate()

  axios({
    method: "get",
    url: "http://localhost:4000/validate",
    headers: {
      "x-access-token": `bearer ${token}`
    }
  })
  .then((res) => {
    if (res.data.isLogged && res.data.user) {
      store.dispatch(setUser(res.data.user))
      navigate('/')
    }
  })
  .catch((err) => {
    console.log(err)
    store.dispatch(clearUser())
  })

  return (
    <div className="loading">
      <div className="center">
        <h3>Loading...</h3>
      </div>
      <LinearProgress className="loader" />
    </div>
  )
}

export default Loading