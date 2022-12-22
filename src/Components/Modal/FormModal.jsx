import '../../Styles/FormModal.css'
import React, { useState } from "react"
import {
  Modal,
  Box,
  Backdrop
} from "@mui/material"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

function FormModal () {
  const [open, setOpen] = useState(false)
  const handleOpen      = () => setOpen(true)
  const handleClose     = () => setOpen(false)

  return (
    <div>
      <button className="new" onClick={handleOpen}>New</button>
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
        <Box sx={style}>
          <form>
            <h1>Register</h1>
            <input type="text" placeholder="Fullname" className="regForm" />
            <input type="text" placeholder="Email" className="regForm" />
            <input type="number" placeholder="Salary" className="regForm" />
            <input type="text" placeholder="Asset (example: 'CAD')" className="regForm" />
            <input type="button" value="Register" className="regForm" />
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default FormModal