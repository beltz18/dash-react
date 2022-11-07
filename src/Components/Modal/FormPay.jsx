import '../../Styles/FormModal.scss'
import { useState } from "react"
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

function FormPay ({children}) {
  const [open, setOpen] = useState(false)
  const handleOpen      = () => setOpen(true)
  const handleClose     = () => setOpen(false)

  return (
    <div>
      <button className="new" onClick={handleOpen}>Pay</button>
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
            <h1>New Payment</h1>
            <select className="regForm">
              <option value="anmdev32@gmail.com">Andi Montilla</option>
              <option value="beltz.18kyodai@gmail.com">Beltz Ahnxton</option>
              <option value="tidvafj@gmail.com">TIDV Tech</option>
            </select>
            <input type="text"   placeholder="Transaction ID" className="regForm" />
            <input type="text"   placeholder="Method"         className="regForm" />
            <input type="text"   placeholder="Company"        className="regForm" />
            <input type="number" placeholder="Amount"         className="regForm" />
            <input type="text"   placeholder="Asset"          className="regForm" />
            <input type="button" value="Register" className="regForm" />
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default FormPay