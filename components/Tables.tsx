import React from "react";
import { supabase } from "./supabase";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
function Tables() {
  interface Types {
    UserName: string;
    Message: string;
    Tag: string;
    created_at: string;
  }
  async function fetch() {
    const { data, error } = await supabase.from("Show").select();
    setdata(data);
  }

  const [data, setdata] = useState<Types | null | string[]>([""]);
  useEffect(() => {
    fetch();
  }, []);
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>UserName</TableCell>
              <TableCell align="right">Message</TableCell>
              <TableCell align="right">Tag</TableCell>
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data!.map((row:any) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.UserName}
                </TableCell>
                <TableCell align="right">{row.Message}</TableCell>
                <TableCell align="right">{row.Tag}</TableCell>
                <TableCell align="right">{row.created_at}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Tables;
