import "../../Styles/List.css"
import { useState }  from "react"
import { Link }      from "react-router-dom"
import Sidebar       from "../../Components/Sidebar/Sidebar"
import Navbar        from "../../Components/Navbar/Navbar"
import Datatable     from "../../Components/DataTable/Datatable"
import FormModal     from "../../Components/Modal/FormModal"
import io            from "socket.io-client"
import {
  Create,
  Visibility,
  Delete
} from '@mui/icons-material'
import { useEffect } from "react"

const socket = io.connect("http://localhost:5300")

const columns = [
  { field: 'id',       headerName: 'ID',       width: 70  },
  { field: 'name',     headerName: 'Fullname', width: 130 },
  { field: 'email',    headerName: 'Email',    width: 200 },
  { field: 'phone',    headerName: 'Phone',    width: 130 },
  { field: 'age',      headerName: 'Age',      width: 50  },
  { field: 'gender',   headerName: 'Gender',   width: 80  },
  { field: 'country',  headerName: 'Country',  width: 130 },
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

let data = [
  { id: 1, name: "Andi Montilla",   email: "anmdev32@gmail.com", phone: "+584120625089", age: 24, gender: "male",   country: "Venezuela", status: "recently applied", color: "active" },
  { id: 2, name: "Pedro Hernandez", email: "pedro@hotmal.com",   phone: "+581234567890", age: 42, gender: "male",   country: "Canada",    status: "recently applied", color: "active" },
  { id: 3, name: "Laura de rosa",   email: "laura@gmail.com",    phone: "+580001110001", age: 38, gender: "female", country: "Colombia",  status: "recently applied", color: "active" }
]

let data2 = []

function ListApplicant() {
  const [rows, setRows] = useState(data)

  socket.on("applicant", (appl) => {
    let applicant = {
      id:      appl.id,
      name:    appl.name,
      email:   appl.email,
      phone:   appl.phone,
      age:     appl.age,
      gender:  appl.gender,
      country: appl.country,
      status:  appl.status,
      color:   "active"
    }
    data2.push(result)
  })

  let result = new Set(data2)
  console.log(result, data2)

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable rows={rows} columns={columns} title="Applicants">
          <FormModal />
        </Datatable>
      </div>
    </div>
  )
}

export default ListApplicant