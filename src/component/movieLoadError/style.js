import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    linkErr: {
        textDecoration: "underline",
        "&:hover": {
            color: 'unset'
        },
    },
    iconYtb: {
        "&:hover": {
            color: "unset"
        }
    }
})

export default useStyles;