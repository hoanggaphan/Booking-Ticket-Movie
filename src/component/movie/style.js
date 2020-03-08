import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    movieItem: {
      "&:hover": {
        cursor: 'pointer',
        "& div:last-child": {
          visibility: 'visible',
        },
        "& a": {
          visibility: 'visible',
        }
      },
    },
    imgMovie: {
      width: "100%",
      height: "350px",
      borderRadius: "10px",
      transition: 'all 0.3s',
      '&:focus': {
        outline: 'none'
      }
    },
    nameMovie: {
      '& h4': {
        width: '100%',
        maxHeight: '44px',
        fontSize: '20px',
        textAlign: 'center',
        fontWeight: "400"
      },
      "& span": {
        color: theme.palette.text.secondary
      }
    },
    btnBook: {
      visibility: "hidden",
      marginTop: "50px",
      color: theme.palette.info.contrastText,
      backgroundColor: theme.palette.info.main,
      "&:hover": {
        backgroundColor: theme.palette.info.light,
      color: theme.palette.info.contrastText,
      }
    },
    overPlay: {
      borderRadius: '10px',
      visibility: "hidden",
      position: 'absolute',
      top: '0',
      left: '0',
      width: "100%",
      height: '100%',
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'center',
      alignItems: "center",
      background: "linear-gradient(to top,#000,transparent 100%)",
      cursor: "pointer",
      "& button": {
        outline: "none"
      }
    },
    playIcon: {
      fontSize: '75px',
    },
    starPoint: {
      width: "75px",
      backgroundColor: "rgba(12,27,54,.8)",
      border: "1px solid #1f2e46",
      borderRadius: "4px",
      textAlign: "center",
      "& span:": {
        fontSize: "16px"
      },
      
    }
  }));
  
export default useStyles;