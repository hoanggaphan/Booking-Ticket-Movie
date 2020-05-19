import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  form: {
    maxWidth: "580px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.palette.background.paper,
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    "& .text": {
        color: theme.palette.text.secondary,
        marginLeft: "5px"
    },
    "& .avatar": {
      width: "33px",
      height: "33px",
      backgroundColor: "white",
      fontWeight: "600"
    },
    "& .star": {
      "@media (max-width: 400px)": {
        display: "none"
      }
    },
  },
  modal: {
    "& .modal-content": {
      backgroundColor: theme.palette.background.paper,
      "& .modal-header": {
        display: "block",
        alignItems: "unset",
        justifyContent: "unset",
        border: "none",
        "& .close": {
          color: "white",
          outline: "none",
          float: "unset",
          display: "block",
          marginLeft: "auto",
          padding: "10px",
        },
        "& .rating": {
          textAlign: "center",
          fontSize: "40px",
          color: theme.palette.text.success,
          marginBottom: "0",
          lineHeight: "1",
        },
        "& .rating ": {
          fontSize: "40px",
          lineHeight: "1",
          color: theme.palette.warning.main,
          "& .MuiRating-iconActive": {
            transform: "unset",
          },
          "& .MuiRating-icon": {
            display: "block"
          }
        }
      },
      "& .modal-body": {
        "& .comment": {
          width: "100%",
          padding: "15px",
          fontSize: "16px",
          borderRadius: "4px",
          resize: "none",
          outline: "none",
          background: "transparent",
          color: theme.palette.text.default,
          border: `1px solid ${theme.palette.text.secondary}`,
          "&::placeholder": {
            color: theme.palette.text.muted
          },
        }
      },
      "& .modal-error": {
        textAlign: "center",
        color: theme.palette.secondary.main,
        fontWeight: "500" 
      },
      "& .modal-footer": {
        border: "none",
        "& .form-btn": {
          outline: "none",
          background: theme.palette.warning.main,
          color: "white",
          margin: "auto"
        }
      },
      
    }
  }
}))

export default useStyles;