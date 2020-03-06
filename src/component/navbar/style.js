import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles(theme => ({
  header: {
    backgroundColor: theme.palette.secondary.main,
    "& button:focus": {
      outline: 'none'
    }
  },
  navLink: {
    margin: '10px',
    color: 'rgba(255, 255, 255, .7)',
    '&:hover': {
      color: 'rgba(255, 255, 255)'
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
