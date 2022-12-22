import { useState } from "react"
import React        from 'react'
import Datatable    from "../../Components/DataTable/Datatable"
import store        from "../../app/redux/store"
import {
  Modal,
  Button,
  Backdrop,
} from "@mui/material"
import {
  Visibility
} from '@mui/icons-material'

const columns = [
  { field: 'id',        headerName: 'Transaction ID', width: 150 },
  { field: 'method',    headerName: 'Method',         width: 130 },
  { field: 'company',   headerName: 'Company',        width: 300 },
  { field: 'amount',    headerName: 'Amount',         width: 90  },
  { field: 'asset',     headerName: 'Asset',          width: 90  },
  { field: 'concept',   headerName: 'Concept',        width: 200 },
  { field: 'createdAt', headerName: 'Date',           width: 150 },
]

function MyModal() {
  const [open, setOpen] = useState(false)
  const handleOpen      = () => setOpen(true)
  const handleClose     = () => setOpen(false)
  const rows = store.getState().transaction

  return (
    <div>
      <Button onClick={handleOpen} sx={{color: "gray", p: 0}}>
        <Visibility />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Datatable columns={columns} rows={rows} />
      </Modal>
    </div>
  )
}

export default MyModal