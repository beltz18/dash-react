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
  { field: 'company',  headerName: 'Company',  width: 130 },
  { field: 'name',     headerName: 'Name',     width: 200 },
  { field: 'phone',    headerName: 'Phone',    width: 130 },
  { field: 'email',    headerName: 'Email',    width: 130 },
  { field: 'country',  headerName: 'Country',  width: 130 },
  { field: 'currency', headerName: 'Currency', width: 140 },
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
  { id: 1, company: "Zuluagalogistics", name: "Bank-Strox",          email: "no mail",          country: "Venezuela", currency: "CAD" },
  { id: 2, company: "Zuluagalogistics", name: "Culture Meals",       email: "pedro@hotmal.com", country: "Canada",    currency: "CAD" },
  { id: 3, company: "Zuluagalogistics", name: "Fast Fast Logistics", email: "fast@gmail.com",   country: "Colombia",  currency: "CAD" }
]

function ListOperation() {
  const [rows, setRows] = useState(data)

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable rows={rows} columns={columns} title="Operations">
          <FormModal />
        </Datatable>
      </div>
    </div>
  )
}

export default ListOperation