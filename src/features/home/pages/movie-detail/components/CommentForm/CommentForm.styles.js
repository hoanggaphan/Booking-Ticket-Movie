import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    borderRadius: "5px",

    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: theme.palette.background.paper,
    cursor: "pointer",

    "& .text": {
      color: theme.palette.text.secondary,
      marginLeft: "5px",
    },

    "& .avatar": {
      width: "33px",
      height: "33px",
      fontWeight: "600",
      backgroundColor: "white",
    },

    "& .star": {
      "@media (max-width: 400px)": {
        display: "none",
      },
    },
  },

  modalContainerSm: {
    width: "300px",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "3px",

    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },

  modalContainer: {
    width: "500px",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "3px",

    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },

  error: {
    textAlign: "center",
    color: theme.palette.secondary.main,
    fontWeight: "500",
  },

  ratingText: {
    textAlign: "center",
    fontSize: "40px",

    lineHeight: "1",
    marginBottom: "0",
    color: theme.palette.text.success,
  },

  ratingStar: {
    fontSize: "40px",
    lineHeight: "1",
    color: theme.palette.warning.main,

    "& .MuiRating-iconActive": {
      transform: "unset",
    },

    "& .MuiRating-icon": {
      display: "block",
    },
  },

  textArea: {
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
      color: theme.palette.text.muted,
    },
  },

  button: {
    background: theme.palette.warning.main,

    "&:hover": {
      background: theme.palette.warning.main,
    },
  },
}));

export default useStyles;
