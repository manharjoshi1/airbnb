import {
  Button,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { VscSettings } from "react-icons/vsc";

import { dFlex, flexCenter, justifyCenter } from "../theme/commonTheme";

const MobileSearch = () => {
  return (
    <Box>
      <Stack sx={{ ...dFlex, ...flexCenter }}>
        <Paper
          sx={{
            border: "1px solid #ddd",
            height: "50px",
            width: "400px",
            borderRadius: "30px",
            px: 2,
            py: 1,
          }}
        >
          <TextField
            variant="standard"
            fullWidth
            placeholder="Where to?"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <AiOutlineSearch />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <VscSettings />
                  </IconButton>
                </InputAdornment>
              ),
              disableUnderline: true,
            }}
            sx={{ alignItems: "stretch", borderWidth: "0px" }}
          />
        </Paper>
      </Stack>
    </Box>
  );
};
export default MobileSearch;
