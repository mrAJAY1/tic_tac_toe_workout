import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import Cell from "./Cell";
import { CellData } from "./types";
interface PropType {
  cells: CellData[];
  setCells: React.Dispatch<React.SetStateAction<CellData[]>>;
}
function Board(props: PropType) {
  const { cells, setCells } = props;
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const handleChange = (id: number) => {
    const newCells: CellData[] = cells.map(item => {
      let nextVal: "X" | "O" | null = null;
      if (item.id === id && item.user === null) {
        nextVal = xIsNext ? "X" : "O";
      }
      const nextObj =
        item.id === id
          ? {
              ...item,
              user: nextVal ?? item.user,
            }
          : item;
      console.log(nextObj);
      return nextObj;
    });

    setCells(newCells);
    const nextVal = newCells.find(item => item.id === id)?.user || null;
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
