import React, { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import Cell from "./Cell";
interface CellData {
  id: number;
  user: "X" | "O" | null;
}
const cellsInitial: CellData[] = [
  { id: 0, user: null },
  { id: 1, user: null },
  { id: 2, user: null },
  { id: 3, user: null },
  { id: 4, user: null },
  { id: 5, user: null },
  { id: 6, user: null },
  { id: 7, user: null },
  { id: 8, user: null },
];
function Board() {
  const [cells, setCells] = useState<CellData[]>(cellsInitial);
  const [user, setUser] = useState<"X" | "O">("X");
  const handleChange = (id: number) => {
    setCells(
      cells.map(item =>
        item.id === id ? { ...item, user: user === null ? user : user === "X" ? "O" : "X" } : item
      )
    );
  };
  useEffect(() => {
    setUser(user === "X" ? "O" : "X");
  }, [cells]);
  console.log(user);
  console.log(cells);
  return (
    <Grid container sx={{ minHeight: "100%" }}>
      {cells.map(item => (
        <Grid key={item.id} item sx={{ border: 1 }} xs={4}>
          <Button
            sx={{ color: "black", width: "100%", height: "100%" }}
            onClick={() => handleChange(item.id)}>
            <Cell currentUser={item.user} id={item.id}></Cell>
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}

export default Board;
