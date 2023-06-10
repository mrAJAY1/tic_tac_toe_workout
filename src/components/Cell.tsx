import { Box, CircularProgress } from "@mui/material";
import { CircleOutlined, CloseOutlined } from "@mui/icons-material";
import React from "react";
function Cell(props: { currentUser: "X" | "O" | null; id: number }) {
  return (
    <Box>
      {props.currentUser === null ? (
        <></>
      ) : props.currentUser === "O" ? (
        <CircleOutlined />
      ) : (
        <CloseOutlined />
      )}
    </Box>
  );
}
export default Cell;
