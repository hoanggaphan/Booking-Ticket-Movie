import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    [theme.breakpoints.up("xs")]: props.xs
      ? {
          textAlign: "center",
          "& .star1": {
            display: "inline-block",
            maxWidth: props.xs.star1,
          },
          "& .starNum": {
            display: "inline-block",
            maxWidth: props.xs.star2,
          },
        }
      : null,

    [theme.breakpoints.up("sm")]: props.sm
      ? {
          "& .star1": {
            maxWidth: props.sm.star1,
          },
          "& .starNum": {
            maxWidth: props.sm.star2,
          },
        }
      : null,

    [theme.breakpoints.up("md")]: props.md
      ? {
          "& .star1": {
            maxWidth: props.sm.star1,
          },
          "& .starNum": {
            maxWidth: props.sm.star2,
          },
        }
      : null,

    [theme.breakpoints.up("lg")]: props.lg
      ? {
          "& .star1": {
            maxWidth: props.sm.star1,
          },
          "& .starNum": {
            maxWidth: props.sm.star2,
          },
        }
      : null,
  }),
}));

export default useStyles;

// xs={star1: "8px", star2: "10px"}
