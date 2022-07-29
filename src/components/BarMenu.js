import React from "react";
import { Button, ButtonGroup, Divider, Icon, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { IoSearchCircle } from "react-icons/io5";
import { pink } from "@mui/material/colors";
const BarMenu = () => {
  return (
    <Box sx={{ border: 0, borderRadius: "50%" }}>
      <ButtonGroup
        className="buttongroup"
        disableRipple
        sx={{ boxShadow: 3, height: 55 }}
      >
        <Button
          className="buttondis"
          disableElevation
          disableFocusRipple
          sx={{ border: 0 }}
        >
          <Typography
            style={{ "border:hover": "0" }}
            component="h6"
            color="black"
            sx={{ fontWeight: 700 }}
          >
            Anywhere
          </Typography>
        </Button>
        <Divider orientation="vertical" flexItem sx={{ p: 1 }} />
        <Button className="buttondis" sx={{ border: 0 }}>
          <Typography component="h6" color="black" sx={{ fontWeight: 700 }}>
            Any Week
          </Typography>
        </Button>
        <Divider orientation="vertical" flexItem sx={{ p: 1 }} />
        <Button
          className="buttondis"
          endIcon={
            <IoSearchCircle style={{ fontSize: 35, color: pink[500] }} />
          }
          sx={{ border: 0 }}
        >
          <Typography component="h6" color="black" sx={{ fontWeight: 700 }}>
            Add Guest
          </Typography>
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default BarMenu;
