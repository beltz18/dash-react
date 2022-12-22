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

let rows = [
  {
    id: 69,
    name: 'Andi Montilla',
    email: 'anmdev@gmail.com',
    phone: '0412062508900',
    age: '238',
    gender: 'Male',
    address: 'San Cristobal',
    country: 'Deutschland',
    city: 'Munich',
    region: 'Munich',
    pzcode: '123456',
    job: 'IT consultor',
    status: 'recently applied',
    color: 'active'
  }
]

function ListApplicant() {
  let [data, setData] = useState(rows)

  useEffect(() => {
    socket.on("applicant", (appl) => {
      setData([...data, appl])
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