'use client'
import React from "react";
import Link from "next/link";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

export default function TableComponent({ quotations }) {
  return (
    <Table aria-label="Example empty table">
      <TableHeader>
        <TableColumn> No</TableColumn>
        <TableColumn>CLIENTE</TableColumn>
        <TableColumn>TOTAL</TableColumn>
        <TableColumn>ACCIONES</TableColumn>
      </TableHeader>
      <TableBody>{
        quotations.map(({
          id,
          company,
          quo_number,
        }) => {
          return (
            <TableRow key={id}>
              <TableCell>
                <span className="text-purple-500">#</span>
                {quo_number}
              </TableCell>
              <TableCell>{company}</TableCell>
              <TableCell>{100.00}</TableCell>
              <TableCell>*</TableCell>
            </TableRow>
          )
        })
      }</TableBody>
    </Table>
  );
}

