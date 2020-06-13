import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "1140px",
    margin: "20px auto 60px",

    "& .nav-tabs": {
      border: "none",
      marginBottom: "25px",
      padding: "0 10px",

      "& .nav-link": {
        border: "none",
        outline: "none",
        padding: "8px 0",
        
        backgroundColor: "unset",
        color: theme.palette.text.default,

        "&:last-child": {
          marginLeft: "16px"
        },

        "&.active": {
          color: theme.palette.text.info,
          borderBottom: `2px solid ${theme.palette.info.main}`,
        }

      }
    },
    
    "& .tab-content": {
      "& .tab-pane": {
        padding: "0 10px"
      }
    }
  },
}));

export default useStyles;
