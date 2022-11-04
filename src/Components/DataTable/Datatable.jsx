import "../../Styles/Datatable.scss"
import { DataGrid } from "@mui/x-data-grid"
import FormModal    from "../Modal/FormModal"

function Datatable({rows,columns}) {
  return (
    <div className="datatable">
      <div className="contHead">
        <h1 className="userTitle">Employees</h1>
        <FormModal />
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