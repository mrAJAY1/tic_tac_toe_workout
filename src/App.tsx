import { useState } from "react";
import "./App.css";
import { Paper, Stack, Typography } from "@mui/material";
import Board from "./components/Board";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState<string | null>(null);

  return (
    <Stack width="100%" height="100%" justifyContent="center" alignItems="center">
      <Typography variant="h3" mt={3} sx={{ textDecoration: "underline", textAlign: "center" }}>
        Tic Tac Toe
      </Typography>
      <Paper sx={{ width: { xs: 300, sm: 380 }, height: { xs: 300, sm: 380 }, p: 2, mt: 10 }}>
        <Board />
      </Paper>
    </Stack>
  );
}

export default App;
