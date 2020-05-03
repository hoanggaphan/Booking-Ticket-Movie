import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  backApp: {
      width: "100%",
      padding: "80px 0",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      marginTop: "35px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: `url(images/backapp.jpg)`,
      "& div:focus": {
        outline: "none",
      },
      "& .back-app-container": {
        maxWidth: "940px",
        "& .back-app-left": {
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          padding: "0 15px",
          [theme.breakpoints.up("md")]: {
            textAlign: "start"
          },
          "& .left-text": {
            fontSize: "25px",
            fontWeight: "bold",
            [theme.breakpoints.up("md")]: {
              fontSize: "35px",
            },
          },
          "& .left-text-small": {
            fontSize: "16px"
          },
          "& .left-text-under": {
            marginTop: "10px",
            "& a": {
              color: theme.palette.text.primary,
              textDecoration: "underline",
            },
          },
          "& .left-btn": {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.warning.main,
            fontWeight: "600"
          }
        },
        "& .back-app-right": {
          position: "relative",
          "& .right-img-mobile": {
            width: "100%",
            height: "100%",
            padding: "0 28%"
          },
          "& .right-img-slide": {
            width: "100%",
            height: "100%"
          },
          "& .carousel": {
            padding: "1.5% 29.2% 1.5% 29.2%",
            position: "absolute",
            top: "0",
            left: "0", 
            overflow: "hidden",
            height: "100%",
            width: "100%",
            "& .carousel-inner": {
              borderRadius: "20px",
              [theme.breakpoints.up("sm")]: {
                borderRadius: "40px",
              },
              [theme.breakpoints.up("md")]: {
                borderRadius: "20px",
              },
            },
            "& div": {
              height: "100%",
              width: "100%",
            }
          }
        }
      }   
  }
}));

export default useStyles;
