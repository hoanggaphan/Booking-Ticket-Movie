import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    movieItem: {
      "&:hover": {
        cursor: 'pointer',
        "& div:last-child": {
          visibility: 'visible'
        }
      }
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
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: 'ellipsis',
    },
    btnBook: {
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
      backgroundColor: "rgba(2, 2, 2, .5)",
      cursor: "pointer",
      "& button": {
        outline: "none"
      }
    },
    playIcon: {
      fontSize: '75px'
    }
  });
  
export default useStyles;