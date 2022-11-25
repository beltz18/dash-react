import "../../Styles/Table.css"
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
} from "@mui/material"
import React from 'react'

const data = [
  {
    id: 1,
    product: "ASUS Gaming TUF F15",
    customer: "John Doe",
    date: "March 1",
    amount: 960,
    method: "PayPal",
    status: "Approved"
  },
  {
    id: 2,
    product: "HP Victus Gaming Laptop",
    customer: "Janne Doe",
    date: "March 1",
    amount: 999,
    method: "Cash",
    status: "Approved"
  },
  {
    id: 3,
    product: "ReDragon Keybooard K606",
    customer: "Chris Rock",
    date: "March 1",
    amount: 45,
    method: "BTC",
    status: "Denied"
  },
  {
    id: 4,
    product: 'CHIQ Smart TV 32"',
    customer: "Matt Smith",
    date: "March 1",
    amount: 160,
    method: "Credit Card",
    status: "Approved"
  },
  {
    id: 5,
    product: "Tenda Wireless 300Mbps Router",
    customer: "Joe Donn",
    date: "March 1",
    amount: 62,
    method: "Cash",
    status: "Pending"
  },
]

function MyTable() {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Stauts</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.product}</TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">${row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span
                  className={`status ${row.status.toLocaleLowerCase()}`}
                >
                  {row.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MyTable