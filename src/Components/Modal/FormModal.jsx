import '../../Styles/FormModal.css'
import React, { useState } from "react"
import {
  Modal,
  Box,
  Backdrop
} from "@mui/material"
import passgen from 'human-password';
import axios   from 'axios';

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
  const handleSubmit    = (e) => {
    e.preventDefault()
    let new_user = {
      name:     e.target[0].value,
      email:    e.target[1].value,
      salary:   e.target[2].value,
      asset:    e.target[3].value,
      pass:     passgen(),
      provider: "Amigo Workforce"
    }
    console.log("password: "+new_user.pass)
    axios.post(process.env.REACT_APP_API_SERVER+process.env.REACT_APP_REGISTER, new_user)
      .then((result) => {
        alert(result.data.user.message)
      })
      .catch((err) => {
        console.log(err)
        alert("Something went wrong, try again later")
      })
  }

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
          <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <input type="text" placeholder="Fullname" className="regForm" />
            <input type="text" placeholder="Email" className="regForm" />
            <input type="number" placeholder="Salary" className="regForm" />
            <input type="text" placeholder="Asset (example: 'CAD')" className="regForm" />
            <input type="submit" value="Register" className="regForm" />
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default FormModal