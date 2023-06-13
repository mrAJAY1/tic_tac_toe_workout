import { Box } from "@mui/material";
import { CircleOutlined, CloseOutlined } from "@mui/icons-material";
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
