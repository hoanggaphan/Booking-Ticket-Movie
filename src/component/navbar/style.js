import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles(theme => ({
  header: {
    backgroundColor: "rgb(23,25,64)",
    boxShadow: '0 0 15px 10px rgb(23,25,64)',
    "& button:focus": {
      outline: 'none'
    }
  },
  navLink: {
    margin: '10px',
    color: 'rgba(255, 255, 255, .7)',
    '&:hover': {
      color: 'rgba(255, 255, 255)'
    },
    ["@media (max-width: 700px)"]: {
      margin: '5px'
    }
  },
  active: {
    color: 'rgba(255, 255, 255)'
  },
  login: {
    color: 'rgba(255, 255, 255, .7)',
    '&:hover': {
      color: 'rgba(255, 255, 255)'
    },
  },
}));

export default useStyle;
