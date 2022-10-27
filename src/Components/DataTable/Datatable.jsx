import "../../Styles/Datatable.scss"
import { DataGrid } from "@mui/x-data-grid"

const columns = [
  { field: 'id',       headerName: 'ID',       width: 70  },
  { field: 'fullname', headerName: 'Fullname', width: 130 },
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
    renderCell: () => {
      return (
        <div className="cellAction">
          <div className="updateButton">Update</div>
          <div className="deleteButton">Delete</div>
        </div>
      )
    }
  }
]

const rows = [
  { id: 1,  fullname: 'Jon Snow',           email: "a@gmail.com", age: 35, hours: 6, status: "online"  },
  { id: 2,  fullname: 'Cersei Lannister',   email: "a@gmail.com", age: 42, hours: 6, status: "offline" },
  { id: 3,  fullname: 'Jaime Lannister',    email: "a@gmail.com", age: 45, hours: 6, status: "online"  },
  { id: 4,  fullname: 'Arya Stark',         email: "a@gmail.com", age: 16, hours: 6, status: "online"  },
  { id: 5,  fullname: 'Daenerys Targaryen', email: "a@gmail.com", age: 60, hours: 6, status: "offline" },
  { id: 6,  fullname: 'Artem Melisandre',   email: "a@gmail.com", age: 24, hours: 6, status: "offline" },
  { id: 7,  fullname: 'Ferrara Clifford',   email: "a@gmail.com", age: 44, hours: 6, status: "online"  },
  { id: 8,  fullname: 'Rossini Frances',    email: "a@gmail.com", age: 36, hours: 6, status: "online"  },
  { id: 9,  fullname: 'Harvey Roxie',       email: "a@gmail.com", age: 65, hours: 6, status: "online"  },
  { id: 10, fullname: 'Jon Snow',           email: "a@gmail.com", age: 35, hours: 6, status: "offline" },
  { id: 11, fullname: 'Cersei Lannister',   email: "a@gmail.com", age: 42, hours: 6, status: "offline" },
  { id: 12, fullname: 'Jaime Lannister',    email: "a@gmail.com", age: 45, hours: 6, status: "online"  },
  { id: 13, fullname: 'Arya Stark',         email: "a@gmail.com", age: 16, hours: 6, status: "online"  },
  { id: 14, fullname: 'Daenerys Targaryen', email: "a@gmail.com", age: 60, hours: 6, status: "offline" },
  { id: 15, fullname: 'Artem Melisandre',   email: "a@gmail.com", age: 24, hours: 6, status: "online"  },
  { id: 16, fullname: 'Ferrara Clifford',   email: "a@gmail.com", age: 44, hours: 6, status: "offline" },
  { id: 17, fullname: 'Rossini Frances',    email: "a@gmail.com", age: 36, hours: 6, status: "online"  },
  { id: 18, fullname: 'Harvey Roxie',       email: "a@gmail.com", age: 65, hours: 6, status: "online"  }
]

function Datatable() {
  return (
    <div className="datatable">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable