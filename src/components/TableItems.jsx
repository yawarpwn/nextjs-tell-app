'use client'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

export default function TableComponent({ items }) {
  console.log({ items })
  return (
    <Table >
      <TableHeader>

        <TableColumn> ITEM</TableColumn>
        <TableColumn minWidth={250}> DESCRIPTION</TableColumn>
        <TableColumn>U/M</TableColumn>
        <TableColumn>P.UNI</TableColumn>
        <TableColumn>CANT.</TableColumn>
        <TableColumn>MONTO</TableColumn>
        <TableColumn>ACCIONES</TableColumn>
      </TableHeader>
      <TableBody>
        {
        items.map(({
          description, id, price, unit_size, qty
        }, index) => {
          return (
            <TableRow key={id}>
              <TableCell>
                <span className="text-purple-500">{index}</span>
              </TableCell>
              <TableCell>{description}</TableCell>
              <TableCell>{unit_size}</TableCell>
              <TableCell>{price}</TableCell>
              <TableCell>{qty}</TableCell>
              <TableCell>{(qty * price).toFixed(2)}</TableCell>
              <TableCell>{(qty * price).toFixed(2)}</TableCell>
            </TableRow>
          )
        })
      }</TableBody>
    </Table>
  );
}


