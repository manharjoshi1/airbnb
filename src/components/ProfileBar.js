import { Button, Icon, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { flexBetweenCenter, dFlex } from "../theme/commonTheme";
import { TbWorld } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
const ProfileBar = () => {
  return (
    <React.Fragment>
      <Box sx={{ ...dFlex }}>
        <Button variant="text">
          <Typography>Become A Host</Typography>
        </Button>
        <IconButton aria-label="duniya">
          <TbWorld />
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
    </React.Fragment>
  );
};

export default ProfileBar;
