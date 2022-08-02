import {
  Button,
  ButtonGroup,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { BsGlobe } from "react-icons/bs";
import React from "react";
import Box from "@mui/material/Box";
import { footerLayout } from "../theme/commonTheme";
import { Container } from "@mui/system";
import { AiOutlineUp } from "react-icons/ai";
import MobileFooter from "./MobileFooter";
import { displayOnDesktop } from "../theme/commonTheme";

const Footer = () => {
  return (
    <Box>
      <Container sx={{ py: "5px", ...displayOnDesktop }}>
        {" "}
        <Stack>
          <Box sx={({}, footerLayout)}>
            <ButtonGroup>
              <Button variant="text" disableRipple>
                2022 BairBnB Inc
              </Button>
              <Button variant="text" disableRipple>
                Privacy
              </Button>
              <Button variant="text" disableRipple>
                Terms
              </Button>
              <Button variant="text" disableRipple>
                Sitemap
              </Button>
              <Button variant="text" disableRipple>
                Destinations
              </Button>
            </ButtonGroup>

            <ButtonGroup disableRipple>
              <IconButton disableRipple>
                <BsGlobe />
              </IconButton>
              <Button
                variant="text"
                sx={{
                  fontSize: "0.9em",
                }}
              >
                {" "}
                Enlgish(CA)
              </Button>
              <Button
                variant="text"
                sx={{
                  fontSize: "0.9em",
                }}
              >
                $CAD
              </Button>
              <Button
                variant="text"
                sx={{
                  fontSize: "0.9em",
                }}
              >
                Support&Resources
              </Button>
              <IconButton disableRipple>
                <AiOutlineUp />
              </IconButton>
            </ButtonGroup>
          </Box>
        </Stack>
      </Container>
      <MobileFooter />
    </Box>
  );
};

export default Footer;
