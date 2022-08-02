import {
  BottomNavigation,
  BottomNavigationAction,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { IoPersonCircle } from "react-icons/io5";
import Box from "@mui/material/Box";

const MobileFooter = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
        >
          <BottomNavigationAction
            disableRipple
            sx={{ fontSize: "large" }}
            label={<Typography>Explore</Typography>}
            icon={<AiOutlineSearch />}
          ></BottomNavigationAction>
          <BottomNavigationAction
            disableRipple
            label={<Typography>Wishlist</Typography>}
            icon={<AiOutlineHeart />}
          ></BottomNavigationAction>
          <BottomNavigationAction
            disableRipple
            label={<Typography>Login</Typography>}
            icon={<IoPersonCircle />}
          ></BottomNavigationAction>
        </BottomNavigation>
      </Box>
    </div>
  );
};

export default MobileFooter;
