import { Box } from "@mui/material";
import { createPortal } from "react-dom";
interface PropsType {
  winner: string | null;
}
function WinnerPortal(props: PropsType) {
  const { winner } = props;
  return createPortal(
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        bottom: 0,
        backgroundColor: "rgba(168, 168, 168, 0.568)",
        backdropFilter: "blur(8px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: 1,
          width: 300,
          height: 300,
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <h2>{winner === "N" ? "No one" : winner} wins!</h2>
      </Box>
    </Box>,
    document.body
  );
}

export default WinnerPortal;
