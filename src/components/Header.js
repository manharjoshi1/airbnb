import React from "react";
import BarMenu from "./BarMenu";
import Logo from "./Logo";
import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { flexBetweenCenter, dFlex } from "../theme/commonTheme";
import ProfileBar from "./ProfileBar";
const Header = () => {
  return (
    <div className="Header">
      <Box sx={{ ...dFlex }}>
        {/* //adding minWidth set xl will help in making this site responsive, such
        as if the viewport goes lesser than xl sixe rather than having a scroll
        bar onto it will have squeeze the elements */}
        <Container sx={{ ...flexBetweenCenter, minHeight: 90, px: 4 }}>
          <Box>
            <Logo />
          </Box>{" "}
          <Box>
            <BarMenu />
          </Box>
          <Box>
            <ProfileBar />
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Header;
