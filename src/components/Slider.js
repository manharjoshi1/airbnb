import React, { useState } from "react";
import { Button, Tab } from "@mui/material";
import { Tabs } from "@mui/material";
import { dFlex, displayOnDesktop, flexCenter } from "../theme/commonTheme";
import { Box, Container } from "@mui/system";
import { locationsTab } from "../data/moc-data.js";
import { FaFilter } from "react-icons/fa";
const Slider = () => {
  const [page, setPage] = useState(0);
  return (
    <>
      <Container>
        <Box sx={{ mt: 2, ...dFlex, ...flexCenter }}>
          <Tabs
            variant="scrollable"
            scrollButtons="auto"
            value={page}
            onChange={(e, n) => setPage(n)}
          >
            {locationsTab.map((e) => {
              return <Tab label={e.label} icon={e.icon} key={e.id} />;
            })}{" "}
          </Tabs>
          <Box sx={{ ...displayOnDesktop }}>
            <Button
              variant="outlined"
              sx={{
                px: 2,
                py: 1,
                border: "1px solid #ddd",
                borderRadius: 2,
              }}
            >
              <FaFilter
                style={{
                  width: 12,
                  height: 12,
                }}
              />
              Filters
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Slider;
