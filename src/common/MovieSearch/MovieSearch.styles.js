import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
        
    "@media (min-width: 600px)": {
      maxWidth: "300px",
    }
  },

  search: {
    width: "100%",

    "& .form-control": {
      border: `1px solid rgba(255, 255, 255, .2)`,
      borderLeft: "none",
      
      transition: "all .2s",
      backgroundColor: "#1F2251",
      color: theme.palette.text.default,

      "&:focus": {
        outline: "none",
        borderLeft: "none",
        border: `1px solid rgba(255, 255, 255, .8)`,

        backgroundColor: "#1F2251",
        boxShadow: "none", 
      },

      "&::placeholder": {
        color: theme.palette.text.secondary
      }
    },

    "& .input-group-prepend": {
      border: `1px solid rgba(255, 255, 255, .2)`,
      borderRight: "none",
      borderRadius: "4px 0 0 4px",
      
      marginRight: "0px",
      transition: "all .2s",

      "&.focus": {
        borderRight: "none",
        border: `1px solid rgba(255, 255, 255, .8)`,
      }
    },

    "& .input-group-text": {
      border: "none",
      backgroundColor: "#1F2251",
      color: theme.palette.text.default,
    },
  },

  result: {
    width: "100%",
    minHeight: "80px",
    maxHeight: "400px",
    borderRadius: "5px!important",

    zIndex: "1000",
    marginTop: "5px",
    position: "absolute",

    color: "#080808",
    boxShadow: "0 0px 5px #333",
    backgroundColor: "rgb(255, 255, 255)",
    
    opacity: "0",
    overflowY: "auto",
    visibility: "hidden",
    transition: "all .2s",

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

    "& .result-item": {
      width: "100%",
      display: "flex",
      
      padding: "10px",
      cursor: "pointer",
      textDecoration: "none",

      "&:hover": {
        backgroundColor: "#eee"
      },

      "& img": {
        width: "90px",
        height: "90px",
        minWidth: "90px",
        
        borderRadius: "5px",
        marginRight: "10px",
        boxShadow: "0 4px 10px rgba(8, 8, 8, .3)",
      },

      "& span": {
        color: "#080808"
      }
    },
  },

  show: {
    visibility: "visible",
    opacity: "1",
  },

  loading: {
    width: "100%",
    minHeight: "80px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& .spinner-grow": {
      color: theme.palette.default.main
    }
  }
}));

export default useStyles;
