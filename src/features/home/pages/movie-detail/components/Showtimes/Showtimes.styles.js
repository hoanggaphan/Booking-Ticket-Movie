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

          "& .nav-link": {
            padding: "10px 0",
            display: "flex",
            alignItems: "center",
            
            opacity: ".4",
            transition: "unset!important",
            borderBottom: "1px solid rgba(255, 255, 255, .1)!important",

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
        padding: "15px",

        [theme.breakpoints.up("sm")]: {
          padding: "10px",
        },

        "& .tab-pane": {
          display: "none",
          flexWrap: "wrap",

          "&.active": {
            display: "flex!important",
          },

          "& .dropdown": {
            margin: "0 5px 7px 0",

            "&.show .dropdown-toggle": {
              transform: "translateY(-1px)",
              boxShadow: `1px 1px 8px 1px ${theme.palette.warning.main}`,
              transition: "transform .1s",
            },

            "& .dropdown-toggle": {
              border: "none",
              borderRadius: "3px",
              padding: "5px",

              fontSize: "16px",
              fontWeight: "500",
              
              cursor: "pointer",
              boxShadow: "none",
              transition: "unset",
              background: theme.palette.warning.main,

              "&::after": {
                content: "unset",
              },

              "&:hover": {
                transform: "translateY(-1px)",
              },
            },

            "& .dropdown-menu": {
              maxHeight: "300px",
              overflowY: "auto",

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

              "& .dropdown-item": {
                backgroundColor: "white",

                "&:hover": {
                  backgroundColor: "#eee",
                },

                "&:active": {
                  backgroundColor: "#eee",
                  color: "unset"
                },

                "& a": {
                  textDecoration: "none",
                  color: "#6c757d",
                },
              },
            },
          },
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

  skeleton: {
    marginBottom: "15px",
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
