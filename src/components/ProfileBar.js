import {
  Button,
  Icon,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
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
        <Box sx={{ width: "100%", ...flexBetweenCenter }}>
          <Link>
            <Typography>Become A Host</Typography>
          </Link>
          <Stack sx={{ ...dFlex, py: 1, px: 2 }}>
            <IconButton
              sx={{ padding: "5px", height: "50px", width: "64px" }}
              aria-label="duniya"
            >
              <BsGlobe size={24} />
            </IconButton>
            <Button
              variant="outlined"
              className="buttondis"
              disableElevation
              disableRipple
              disableFocusRipple
              sx={{
                borderRadius: 10,
                border: "1px solid #ddd",
                height: 50,
                width: 108,
                elevation: 10,
              }}
            >
              <GiHamburgerMenu size={24} />
              <AccountCircleOutlinedIcon
                fontSize="large"
                size={24}
                sx={{ width: 24, height: 24, marginLeft: "16px" }}
              />
            </Button>
          </Stack>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default ProfileBar;
