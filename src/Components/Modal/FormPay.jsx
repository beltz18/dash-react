import '../../Styles/FormModal.scss'
import { useState } from "react"
import axios        from "axios"
import { setTransactions } from '../../app/redux/action'
import store from '../../app/redux/store'
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

  axios.get('http://localhost:5000/select/transactions')
  .then((res) => {
    if (res.data) {
      const dataT = res.data
      store.dispatch(setTransactions(dataT))
    }
  })
  .catch((err) => {
    console.log(err)
  })

  const getData = () => {
    let user        = document.querySelector("#user")
    let id          = document.querySelector("#id")
    let method      = document.querySelector("#method")
    let company     = document.querySelector("#company")
    let amount      = document.querySelector("#amount")
    let asset       = document.querySelector("#asset")
    let concept     = document.querySelector("#concept")

    let transaction = {
      id:      id.value,
      method:  method.value,
      email:   user.value,
      company: company.value,
      amount:  amount.value,
      asset:   asset.value,
      concept: concept.value
    }
    console.log(transaction)
    axios.post("http://localhost:4000/register/payment", {transaction})
    alert("Payment registered")
    handleClose()
  }

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
            <select id='user' className="regForm">
              <option value="anmdev32@gmail.com">Andi Montilla</option>
              <option value="beltz.18kyodai@gmail.com">Beltz Ahnxton</option>
              <option value="tidvafj@gmail.com">TIDV Tech</option>
            </select>
            <input type="text"   id='id'      placeholder="Transaction ID" className="regForm" />
            <input type="text"   id='method'  placeholder="Method"         className="regForm" />
            <input type="text"   id='company' placeholder="Company"        className="regForm" />
            <input type="number" id='amount'  placeholder="Amount"         className="regForm" />
            <input type="text"   id='asset'   placeholder="Asset"          className="regForm" />
            <input type="text"   id='concept' placeholder="Concept"        className="regForm" />
            <input type="button" value="Register" onClick={getData}        className="regForm" />
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default FormPay