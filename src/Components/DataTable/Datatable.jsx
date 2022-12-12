import "../../Styles/Datatable.css"
import React        from 'react'
import { DataGrid } from "@mui/x-data-grid"

function Datatable({rows,columns,title,children}) {
  return (
    <div className="datatable">
      <div className="contHead">
        <h1 className="userTitle">{title}</h1>
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