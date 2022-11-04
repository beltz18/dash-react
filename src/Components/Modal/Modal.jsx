import { useState } from "react"
import Datatable from "../../Components/DataTable/Datatable"
import {
  Modal,
  Button,
  Backdrop,
} from "@mui/material"
import {
  Visibility,
  Delete
} from '@mui/icons-material'

const columns = [
  { field: 'id',       headerName: 'Transaction ID', width: 150 },
  { field: 'company',  headerName: 'Company',        width: 300 },
  { field: 'amount',   headerName: 'Amount',         width: 90  },
  { field: 'asset',    headerName: 'Asset',          width: 90  },
  { field: 'concept',  headerName: 'Concept',        width: 200 },
  { field: 'date',     headerName: 'Date',           width: 150 },
]

const rows = [
  {id: 1, company: "Biz Rescue Pro",  amount: 3500,    asset: "CAD", concept: "Monthly", date: "10-18-2022"},
  {id: 2, company: "Amigo Workforce", amount: 3500,    asset: "CAD", concept: "Monthly", date: "10-18-2022"},
  {id: 3, company: "Amigo Workforce", amount: 3500,    asset: "USD", concept: "Monthly", date: "10-18-2022"},
  {id: 4, company: "Biz Rescue Pro",  amount: 3500,    asset: "CAD", concept: "Monthly", date: "10-18-2022"},
  {id: 5, company: "Biz Rescue Pro",  amount: 3500000, asset: "COP", concept: "Monthly", date: "10-18-2022"},
  {id: 6, company: "Biz Rescue Pro",  amount: 3500,    asset: "CAD", concept: "Monthly", date: "10-18-2022"},
]

function MyModal() {
  const [open, setOpen] = useState(false)
  const handleOpen  = () => setOpen(true)
  const handleClose = () => setOpen(false)

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