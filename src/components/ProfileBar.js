import { Button, Icon, IconButton, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { flexBetweenCenter, flexBetween, dFlex } from "../theme/commonTheme";
import { TbWorld } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { BsGlobe } from "react-icons/bs";
const ProfileBar = () => {
  return (
    <React.Fragment>
      <Box sx={{ ...dFlex }}>
        <Box sx={{ width: "100%", ...flexBetween }}>
          <Button variant="text">
            <Typography>Become A Host</Typography>
          </Button>
          <Box sx={{ py: 1, px: 2 }}>
            <IconButton
              sx={{ padding: "5px", height: "50px", width: "64px" }}
              aria-label="duniya"
            >
              <BsGlobe style={{ height: "24px", width: "24px" }} />
            </IconButton>
            <Button
              variant="outlined"
              //   className="buttondis buttongroup"
              disableElevation
              disableRipple
              disableFocusRipple
              sx={{
                borderRadius: "88px",
                borderStyle: "groove",
                height: 50,
                width: 108,
                elevation: 10,
              }}
            >
              <GiHamburgerMenu style={{ width: 24, height: 24 }} />
              <AccountCircleOutlinedIcon
                fontSize="large"
                sx={{ width: 24, height: 24, marginLeft: "16px" }}
              />
            </Button>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default ProfileBar;
