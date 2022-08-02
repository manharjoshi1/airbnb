import { CssBaseline, Divider } from "@mui/material";

import React from "react";
import Box from "@mui/material/Box";
import Header from "./components/Header";
import MobileSearch from "./components/MobileSearch";
import Slider from "./components/Slider";
import CardLocation from "./components/CardLocation";
import Footer from "./components/Footer";
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
          <Slider />
        </Box>
        <Box sx={{ overflowY: "scroll", px: 3 }}>
          <CardLocation />
        </Box>
        <Box sx={{ border: "1px solid #ddd" }}>
          <Footer />
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default App;
