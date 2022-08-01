import React from "react";
import { Button, ButtonGroup, Divider, Icon, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { IoSearchCircle } from "react-icons/io5";
import { pink } from "@mui/material/colors";
import { justifyCenter } from "../theme/commonTheme";
const BarMenu = () => {
  const choices = [
    { id: 1, text: "Anywhere" },
    { id: 2, text: "Any Week" },
    { id: 3, text: "Add Guest", icon: true },
  ];
  return (
    <Box sx={{ ...justifyCenter, border: 0, borderRadius: "50%" }}>
      <ButtonGroup
        className="buttondis"
        disableRipple
        sx={{
          borderRadius: 10,
          boxShadow: 3,
          height: 55,
        }}
      >
        {choices.map((e) => {
          return (
            <React.Fragment key={e.id}>
              <Button
                className="buttondis"
                disableElevation
                disableFocusRipple
                sx={{ borderWidth: 0 }}
              >
                <Typography
                  style={{ "border:hover": "0" }}
                  component="h6"
                  color="black"
                  sx={{ fontWeight: 700 }}
                >
                  {e.text}
                </Typography>

                {e.icon && (
                  <Box
                    sx={{
                      ml: 1,
                      mr: 1,
                      mt: 1,
                    }}
                  >
                    <IoSearchCircle
                      style={{ fontSize: 35, color: pink[500] }}
                    />
                  </Box>
                )}
              </Button>
              {e.id !== choices.length && (
                <Divider orientation="vertical" flexItem sx={{ p: 1 }} />
              )}
            </React.Fragment>
          );
        })}
      </ButtonGroup>
    </Box>
  );
};

export default BarMenu;
