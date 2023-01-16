import "../../Styles/List.css"
import { useState }  from "react"
import { Link }      from "react-router-dom"
import Sidebar       from "../../Components/Sidebar/Sidebar"
import Navbar        from "../../Components/Navbar/Navbar"
import Datatable     from "../../Components/DataTable/Datatable"
import io            from "socket.io-client"
import {
  Create,
  Visibility,
  Delete
} from '@mui/icons-material'
import { useEffect } from "react"
import axios from "axios"

const socket = io.connect(process.env.REACT_APP_API_SOCKETS)

const columns = [
  { field: 'id',       headerName: 'ID',       width: 70  },
  { field: 'name',     headerName: 'Fullname', width: 130 },
  { field: 'email',    headerName: 'Email',    width: 200 },
  { field: 'phone',    headerName: 'Phone',    width: 130 },
  { field: 'age',      headerName: 'Age',      width: 50  },
  { field: 'gender',   headerName: 'Gender',   width: 80  },
  { field: 'country',  headerName: 'Country',  width: 130 },
  { field: 'job',      headerName: 'Job',      width: 130 },
  { 
    field: 'status',   headerName: 'Status',   width: 140,
    renderCell: (data) => {
      return (
        <span className={data.row.color}>{data.row.status}</span>
      )
    }
  },
  {
    field: 'action',   headerName: 'Action',    width: 200,
    renderCell: (data) => {
      return (
        <div className="cellAction">
          <Link to={`/user/${data.row.id}`}>
            <div className="seeButton">
              <Visibility />
            </div>
          </Link>
          <div className="updateButton">
            <Create />
          </div>
          <div className="deleteButton">
            <Delete />
          </div>
        </div>
      )
    }
  }
]

function ListApplicant() {
  let [data, setData] = useState([])

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_SERVER+"get/applicants")
      .then(data => {
        let d = data.data
        let e = []
        let values = {}

        d.forEach(element => {
          values = {
            id: element._id,
            ...element
          }
          e.push(values)
        })
        console.log(e)
        setData(e)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [data])

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable rows={data} columns={columns} title="Applicants"></Datatable>
      </div>
    </div>
  )
}

export default ListApplicant