import React, { useState } from "react";
import { Tab } from "@mui/material";
import { Tabs } from "@mui/material";
import { dFlex } from "../theme/commonTheme";
import { Box } from "@mui/system";
import { locationsTab } from "../data/moc-data.js";
const Slider = () => {
  const [page, setPage] = useState(0);
  return (
    <>
      <Box sx={{ ...dFlex }}>
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
      </Box>
    </>
  );
};

export default Slider;
