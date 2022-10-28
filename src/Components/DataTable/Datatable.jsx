import "../../Styles/Datatable.scss"
import { DataGrid } from "@mui/x-data-grid"
import { Link }     from "react-router-dom"
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



function Datatable() {
  const rows = store.getState().users

  return (
    <div className="datatable">
      <h1 className="userTitle">Users</h1>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        className="Datatable"
      />
    </div>
  )
}

export default Datatable