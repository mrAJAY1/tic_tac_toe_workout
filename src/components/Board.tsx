import React, { useEffect, useState } from "react";
import { Button, Grid, useRadioGroup } from "@mui/material";
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
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const handleChange = (id: number) => {
    const newCells: CellData[] = cells.map(item => {
      const nextVal =
        !item.user && xIsNext ? "X" : item.user === "X" && !xIsNext ? "O" : "X";
      const nextObj =
        item.id === id
          ? {
              ...item,
              user: nextVal,
            }
          : item;
      console.log(nextObj);
      return nextObj;
    });

    setCells(newCells);
    const nextVal = newCells.find(item => item.id === id)?.user || "";
    setXIsNext(nextVal !== "X");
  };

  console.log({ xIsNext });
  return (
    <Grid container sx={{ minHeight: "100%" }}>
      {cells.map(cell => (
        <Grid item key={cell.id} sx={{ border: 1 }} xs={4}>
          <Button
            sx={{ color: "black", width: "100%", height: "100%" }}
            onClick={() => handleChange(cell.id)}>
            <Cell currentUser={cell.user} id={cell.id}></Cell>
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}

export default Board;
