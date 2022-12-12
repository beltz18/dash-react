import "../../Styles/Payroll.css"
import React     from 'react'
import Sidebar   from "../../Components/Sidebar/Sidebar"
import Navbar    from "../../Components/Navbar/Navbar"
import Datatable from "../../Components/DataTable/Datatable"
import MyModal   from "../../Components/Modal/Modal"
import FormPay   from "../../Components/Modal/FormPay"
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
    renderCell: (data) => {
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
  {id: 2, name: "Andi Montilla", salary: 7000, asset: "USD", status: "active", email: "anmdev32@gmail.com"      },
  {id: 1, name: "Beltz Anhxton", salary: 2500, asset: "CAD", status: "active", email: "beltz.18kyodai@gmail.com"},
  {id: 3, name: "TIDV Tech",     salary: 1000, asset: "CAD", status: "active", email: "tidvafj@gmail.com"       }
]

function Payroll() {
  return (
    <div className="payroll">
      <Sidebar />
      <div className="payrollContainer">
        <Navbar />
        <div className="container">
          <Datatable columns={columns} rows={rows} title="Payroll">
            <FormPay />
          </Datatable>
        </div>
      </div>
    </div>
  )
}

export default Payroll