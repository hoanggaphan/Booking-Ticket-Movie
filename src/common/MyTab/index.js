import PropTypes from "prop-types";
import React, { memo } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useStyles from "./MyTab.styles";

MyTabs.propTypes = {
  titleList: PropTypes.arrayOf(PropTypes.string),
  color: PropTypes.string,
};

MyTabs.defaultProps = {
  titleList: ["Title"],
  color: "primary",
};

function MyTabs({titleList, componentList, color}) {
  const classes = useStyles({color});

  return (
    <div className={classes.tabs}>
      <Tabs>
        <TabList>
          {titleList.map((title, index) => (
            <Tab key={index}>{title}</Tab>
          ))}
        </TabList>

        {componentList.map((Component, index) => (
          <TabPanel forceRender key={index} >
            {Component}
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
}

export default memo(MyTabs);
