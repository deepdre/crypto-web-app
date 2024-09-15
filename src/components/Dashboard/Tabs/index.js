import React, { useState } from "react";
import "./styles.css";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Grid from "../Grid";
import List from "../List";

export default function TabsComponent({ coins }) {
  const [value, setValue] = useState("Grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  /* tabcontext=> This component provides a context for managing the state of the tabs. It's essentially the container for the entire tab system.
tablist=> This component contains the list of tabs
tabpanel=> These components define the content that is shown when the respective tab is active.
*/
  const style = {
    color: "var(--white)",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "capitalize",
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="Grid" sx={style} />
          <Tab label="List" value="List" sx={style} />
        </TabList>
        <TabPanel value="Grid">
          <div className="grid-flex">
            {coins.map((coin, i) => {
              return <Grid coin={coin} key={i} />;
            })}
          </div>
        </TabPanel>
        <TabPanel value="List">
          <table className="list-table">
            {coins.map((item, i) => {
              return <List coin={item} key={i} />;
            })}
          </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
