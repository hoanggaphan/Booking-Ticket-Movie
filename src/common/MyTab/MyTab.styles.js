import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  tabs: {
    color: theme.palette.text.primary,

    // Override react-tabs
    "& .react-tabs__tab-list": {
      textAlign: "center",
      borderColor: "rgba(255, 255, 255, .1)",
      marginBottom: "20px",

      "& .react-tabs__tab": {
        fontSize: "19px",
        fontWeight: "500",
        border: "unset",
        transition: "font-size .15s linear",

        "&:hover": {
          fontSize: "22px",
        },

        "&:focus": {
          boxShadow: "none",

          "&:after": {
            content: "none",
          },
        },

        "&.react-tabs__tab--selected": {
          border: "unset",
          background: "unset",
          position: "relative",

          fontSize: "22px",
          color: theme.palette.text.primary,

          "&:before": {
            height: "1px",
            width: "100%",
            background: (props) => theme.palette[props.color].main,
            boxShadow: (props) =>
              `0 0 15px 3px ${theme.palette[props.color].main}`,

            left: "0",
            bottom: "0",
            content: "''",
            position: "absolute",
          },
        },
      },
    },

    "& .react-tabs__tab-panel--selected": {
      animation: "$fadeIn .3s ease-in-out",
    },
  },

  "@keyframes fadeIn": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
}));

export default useStyles;
