import { Button, Typography } from "@mui/material";
import { Box, Container, palette } from "@mui/system";
import React from "react";
import { FaAirbnb } from "react-icons/fa";
import { dFlex, flexCenter } from "../theme/commonTheme";
import { pink } from "@mui/material/colors";
function Logo() {
  return (
    <div>
      <Box sx={flexCenter}>
        <FaAirbnb color={pink[500]} size={40} />
        <Typography
          sx={{
            ml: 1,
            color: (theme) => theme.palette.secondary.main,
            fontWeight: "bold",
            fontSize: "20px",
          }}
          component="h3"
        >
          Airbnb
        </Typography>
      </Box>{" "}
    </div>
  );
}

export default Logo;
