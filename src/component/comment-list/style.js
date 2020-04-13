import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "580px",
    "& .more-btn": {
      display: "block",
      margin: "25px auto",
      outline: "none",
      borderColor: theme.palette.warning.main,
      color: theme.palette.warning.main,
    }
  }
}))

export default useStyles;