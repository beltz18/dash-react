import "../../Styles/List.css"
import { useEffect, useState } from "react"
import { Link }      from "react-router-dom"
import Sidebar       from "../../Components/Sidebar/Sidebar"
import Navbar        from "../../Components/Navbar/Navbar"
import Datatable     from "../../Components/DataTable/Datatable"
import FormModal     from "../../Components/Modal/FormModal"
import store         from "../../app/redux/store"
import io            from "socket.io-client"
import {
  Create,
  Visibility,
  Delete
} from '@mui/icons-material'
import {
  setUsers,
} from '../../app/redux/action'

const socket  = io.connect(process.env.REACT_APP_API_SOCKETS)
const columns = [
  { field: 'id',       headerName: 'ID',       width: 70  },
  { field: 'name',     headerName: 'Fullname', width: 130 },
  { field: 'email',    headerName: 'Email',    width: 200 },
  { field: 'age',      headerName: 'Age',      width: 50  },
  { 
    field: 'hours',    headerName: 'Hours',    width: 120,
    renderCell: (data) => {
      return (
        <p>{data.row.hours}h</p>
      )
    }
  },
  { 
    field: 'status',   headerName: 'Connection',   width: 120,
    renderCell: (data) => {
      return (
        <span className={data.row.status}>{data.row.status}</span>
      )
    }
  },
  { 
    field: 'accepted',   headerName: 'Status',   width: 120,
    renderCell: (data) => {
      return (
        <span className={data.row.status}>Active</span>
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

function List() {
  const [rows, setRows] = useState(store.getState().users)

  useEffect(() => {
    socket.on("data_workers", async (data) => {
      await store.dispatch(setUsers(data))
      setRows([...rows, data])
      console.log(data)
    })
  }, [rows])

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable rows={rows} columns={columns} title="Employees">
          <FormModal />
        </Datatable>
      </div>
    </div>
  )
}

export default List