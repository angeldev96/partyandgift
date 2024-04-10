import { useState, useEffect } from 'react';
import { Table } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ProductSales() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    fetch('/api/orders')
     .then(response => response.json())
     .then(data => setSales(data));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Producto</TableCell>
            <TableCell align="right">Usuario</TableCell>
            <TableCell align="right">Carrito</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sales.map((sale) => (
            <TableRow
              key={sale.order_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {sale.user_id}
              </TableCell>
              <TableCell align="right">{sale.address_id}</TableCell>
              <TableCell align="right">{sale.cart_id}</TableCell>
              <TableCell align="right">{sale.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

