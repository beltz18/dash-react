import "../../Styles/List.scss"
import React        from 'react'
import { Link }     from "react-router-dom"
import Sidebar      from "../../Components/Sidebar/Sidebar"
import Navbar       from "../../Components/Navbar/Navbar"
import Datatable    from "../../Components/DataTable/Datatable"
import FormModal    from "../../Components/Modal/FormModal"
import store        from '../../app/redux/store'
import {
  Create,
  Visibility,
  Delete
} from '@mui/icons-material'

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
    field: 'status',   headerName: 'Status',   width: 120,
    renderCell: (data) => {
      return (
        <span className={data.row.status}>{data.row.status}</span>
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
  const rows = store.getState().users

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable rows={rows} columns={columns}>
          <FormModal />
        </Datatable>
      </div>
    </div>
  )
}

export default List
