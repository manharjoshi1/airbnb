import { CssBaseline, Divider } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Header from "./components/Header";
import MobileSearch from "./components/MobileSearch";
import Slider from "./components/Slider";
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
          <Divider />
        </Box>

        <Box>
          <Slider />
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default App;
