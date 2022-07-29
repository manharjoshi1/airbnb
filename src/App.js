import { CssBaseline, Divider } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Header from "./components/Header";
function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Box>
          <Header />
        </Box>
        <Divider />
      </Box>
    </React.Fragment>
  );
}

export default App;
