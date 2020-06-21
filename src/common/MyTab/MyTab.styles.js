import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  tabs: {
    overflow: "unset",
    margin: "0 5px",
    marginBottom: "10px",
    borderBottom: "1px solid rgba(255, 255, 255, .1)",

    "@media (min-width: 360px)": {
      marginBottom: "20px",
    },

    "& .MuiTabs-scroller": {
      display: "flex",
      justifyContent: "center",
    },

    "& .MuiTabs-fixed": {
      overflow: "unset!important",
    },

    "& .MuiTabs-indicator": {
      height: "1px",
      bottom: "-1px",
      backgroundColor: (props) => theme.palette[props.color].main,
      boxShadow: (props) => `0 0 15px 3px ${theme.palette[props.color].main}`,
    },

    "& .MuiTab-root": {
      fontSize: "18px",
      textTransform: "capitalize",
      padding: "0 6px",
      minHeight: "unset",

      "@media (min-width: 600px)": {
        padding: "0 12px",
        fontSize: "22px",
      },
    },
  },

  tabPanel: {
    "& .MuiTabPanel-root": {
      padding: "unset",
    }
  },
}));

export default useStyles;
