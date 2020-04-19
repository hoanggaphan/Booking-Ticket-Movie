import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "auto",
    "&::-webkit-scrollbar": {
      width: "7px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#E8E3E3",
      borderRadius: "4px"
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#C3BFBF", 
      borderRadius: "4px"
    },
    "& table": {
      "& tr": {
        "& th": {
          color: "white",
          borderColor: "rgba(255,255,255,.2)!important",
          "&.MuiTableCell-stickyHeader": {
            background: theme.palette.background.paper, 
          }
        },
        "& td": {
          color: theme.palette.text.helper,
          borderColor: "rgba(255,255,255,.2)!important"
        },
      },
    },
    "& button": {
      outline: "unset"
    }
  },
  container: {
    maxHeight: "500px",
    minWidth: "800px",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      width: "7px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#E8E3E3",
      borderRadius: "4px"
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#C3BFBF", 
      borderRadius: "4px"
    },
  }
}));

export default useStyles;
