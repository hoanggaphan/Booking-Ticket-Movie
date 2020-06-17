import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",

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