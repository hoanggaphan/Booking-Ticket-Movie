import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "580px",
    "& .more-btn": {
      display: "block",
      outline: "none",
      borderColor: theme.palette.warning.main,
      
      margin: "25px auto",
      color: theme.palette.warning.main,
    }
  }
}))

export default useStyles;