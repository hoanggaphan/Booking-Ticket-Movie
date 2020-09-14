import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import useStyles from "./MyTab.styles";

MyTabs.propTypes = {
  titleList: PropTypes.arrayOf(PropTypes.string),
  color: PropTypes.string,
};

MyTabs.defaultProps = {
  titleList: ["Title"],
  color: "primary",
};

function MyTabs({ titleList, componentList, color }) {
  const classes = useStyles({ color });
  const [value, setValue] = useState("0");
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <TabList
        className={classes.tabs}
        onChange={handleChange}
        scrollButtons="auto"
        aria-label="tabs"
        centered
      >
        {titleList.map((title, index) => (
          <Tab key={index} label={title} value={index.toString()} />
        ))}
      </TabList>

      {componentList.map((Component, index) => (
        <TabPanel key={index} value={index.toString()} index={index}>
          {Component}
        </TabPanel>
      ))}
    </TabContext>
  );
}

export default memo(MyTabs);
