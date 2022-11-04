import "../../Styles/Payroll.scss"
import Sidebar   from "../../Components/Sidebar/Sidebar"
import Navbar    from "../../Components/Navbar/Navbar"
import Datatable from "../../Components/DataTable/Datatable"
import { Link }  from "react-router-dom"
import {
  Create,
  Visibility,
  Delete
} from '@mui/icons-material'

const columns = [
  { field: 'id',       headerName: 'ID',       width: 70  },
  { field: 'name',     headerName: 'Fullname', width: 300 },
  { field: 'salary',   headerName: 'Salary',   width: 90  },
  { field: 'asset',    headerName: 'Asset',    width: 90  },
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

const rows = [
  {id: 1, name: "Beltz Anhxton", salary: 7000, asset: "CAD", status: "active"}
]

function Payroll() {
  return (
    <div className="payroll">
      <Sidebar />
      <div className="payrollContainer">
        <Navbar />
        <div className="container">
          <Datatable columns={columns} rows={rows} />
          Payroll
        </div>
      </div>
    </div>
  )
}

export default Payroll