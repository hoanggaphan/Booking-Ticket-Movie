import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  form: {
    maxWidth: "580px",
    borderRadius: "5px",
    
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: theme.palette.background.paper,
    cursor: "pointer",

    "& .text": {
        color: theme.palette.text.secondary,
        marginLeft: "5px"
    },

    "& .avatar": {
      width: "33px",
      height: "33px",
      fontWeight: "600",
      backgroundColor: "white",
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
        border: "none",
        display: "block",
        alignItems: "unset",
        justifyContent: "unset",

        "& .close": {
          color: "white",
          outline: "none",
          display: "block",
          
          float: "unset",
          padding: "10px",
          marginLeft: "auto",
        },

        "& .rating": {
          textAlign: "center",
          fontSize: "40px",

          lineHeight: "1",
          marginBottom: "0",
          color: theme.palette.text.success,
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
          outline: "none",
          borderRadius: "4px",
          border: `1px solid ${theme.palette.text.secondary}`,

          padding: "15px",
          fontSize: "16px",
          resize: "none",

          background: "transparent",
          color: theme.palette.text.default,

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