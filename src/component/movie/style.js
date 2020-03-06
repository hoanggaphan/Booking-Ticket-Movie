import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
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
      width: '100%',
      height: '44px',
      maxHeight: '44px',
      fontSize: '20px',
      textAlign: 'center',
      fontWeight: "400"
    },
    btnBook: {
      visibility: "hidden",
      marginTop: "50px",
      "&:hover": {
        color: 'unset'
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
  });
  
export default useStyles;