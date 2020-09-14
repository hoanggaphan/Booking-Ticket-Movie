import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "100%",

    "& .nav-bg": {
      backgroundColor: theme.palette.background.paper,
      borderRadius: "3px",
    },

    "& .tab-content": {
      width: "100%",
    },

    "& .main-pane": {
      "& .nav": {
        marginBottom: "unset!important",
        alignItems: "unset!important",

        "& .nav-item": {
          padding: "0 10px",
          borderBottom: "1px solid rgba(255, 255, 255, .1)!important",

          "& .nav-link": {
            padding: "10px 0",
            display: "flex",
            alignItems: "center",

            opacity: ".4",
            transition: "unset!important",

            "&.active": {
              opacity: "1",
            },

            "& img": {
              minWidth: "50px",
              borderRadius: "15%",
              display: "block",
            },

            "& .cinema-box": {
              marginLeft: "10px",

              "& .cinema-name": {
                fontSize: "14px",
                display: "block",
                color: theme.palette.text.warning,

                "& span": {
                  color: theme.palette.text.primary,
                },
              },

              "& .cinema-location": {
                fontSize: "12px",
                display: "block",
                color: theme.palette.text.secondary,
              },
            },
          },
        },
      },

      "& .tab-content": {
        minHeight: "200px",
        maxHeight: "500px",
        height: "100%",
        overflowY: "auto",
        overflowX: "hidden",

        "&::-webkit-scrollbar": {
          width: "7px",
        },

        "&::-webkit-scrollbar-track": {
          background: "#E8E3E3",
          borderRadius: "4px",
        },

        "&::-webkit-scrollbar-thumb": {
          background: "#C3BFBF",
          borderRadius: "4px",
        },
      },
    },
  },

  navList: {
    width: "100%",
    padding: "5px 0",
    borderBottom: "1px solid rgba(255, 255, 255, .1)",

    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",

    "& .nav-item": {
      "& .nav-link": {
        opacity: ".4",
        transition: "unset!important",

        "& img": {
          width: "50px",
          height: "50px",
        },

        "&.active": {
          opacity: "1",
        },
      },
    },
  },

  date: {
    fontSize: "18px",
    fontWeight: "500",
    color: theme.palette.text.warning,
  },

  time: {
    padding: "10px",
    color: theme.palette.text.secondary,
    textDecoration: "underline",

    "&:hover": {
      color: theme.palette.text.helper,
    }
  },

  gridContainer: {
    width: "100%",
    paddingTop: "10px",
    paddingBottom: "10px",
  },

  gridItem: {
    borderRight: "1px solid rgba(255, 255, 255, .1)",
  },
}));

export default useStyle;
