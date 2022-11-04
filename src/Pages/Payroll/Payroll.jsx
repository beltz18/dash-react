import "../../Styles/Payroll.scss"
import Sidebar   from "../../Components/Sidebar/Sidebar"
import Navbar    from "../../Components/Navbar/Navbar"
import Datatable from "../../Components/DataTable/Datatable"
import MyModal   from "../../Components/Modal/Modal"
import {
  Button
} from "@mui/material"
import {
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
    renderCell: () => {
      return (
        <div className="cellAction">
          <div className="seeButton">
            <MyModal />
          </div>
          <div className="deleteButton">
            <Button sx={{color: "crimson", p: 0}}>
              <Delete />
            </Button>
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
        </div>
      </div>
    </div>
  )
}

export default Payroll