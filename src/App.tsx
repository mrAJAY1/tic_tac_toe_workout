import { useEffect, useState } from "react";
import "./App.css";
import { Paper, Stack, Typography } from "@mui/material";
import Board from "./components/Board";
import { CellData } from "./components/types";
import WinnerPortal from "./components/WinnerPortal";

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
const winnerArray = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

function App() {
  const [cells, setCells] = useState<CellData[]>(cellsInitial);
  const [winner, setWinner] = useState<string | null>(null);
  const checkForWinner = () => {
    winnerArray.forEach(combo => {
      const [a, b, c] = combo;
      const cellA = cells[a];
      const cellB = cells[b];
      const cellC = cells[c];
      if (cellA.user && cellA.user === cellB.user && cellB.user === cellC.user) {
        setWinner(cellA.user);
      }
    });
  };
  useEffect(() => {
    if (!winner) checkForWinner();
    else {
      setTimeout(() => {
        setWinner(null);
        setCells(cellsInitial);
      }, 3000);
    }
  }, [cells, winner]);
  return (
    <Stack width="100%" height="100%" justifyContent="center" alignItems="center">
      {winner && <WinnerPortal winner={winner} />}
      <Typography variant="h3" mt={3} sx={{ textDecoration: "underline", textAlign: "center" }}>
        Tic Tac Toe
      </Typography>
      <Paper sx={{ width: { xs: 300, sm: 380 }, height: { xs: 300, sm: 380 }, p: 2, mt: 10 }}>
        <Board cells={cells} setCells={setCells} />
      </Paper>
    </Stack>
  );
}

export default App;
