import React, { useState } from "react";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";

function TabsMui({ children, tabs ,handleChange , value}) {

  return (
    <Box
   
    >
      <Tabs
        value={value}
        onChange={handleChange}
        scrollButtons
        variant="scrollable"
        className="rtl"
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 },
          },
        }}
      >
        {tabs.map((v, i) => (
          <Tab label={v.name} key={i + v.name} className="Fvazir" />
        ))}

        {children}
      </Tabs>
    </Box>
  );
}

export default TabsMui;
