import "../../Styles/Datatable.scss"
import { DataGrid } from "@mui/x-data-grid"

function Datatable({rows,columns,children}) {
  return (
    <div className="datatable">
      <div className="contHead">
        <h1 className="userTitle">Employees</h1>
        {children}
      </div>
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