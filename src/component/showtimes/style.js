import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& .nav-bg": {
      backgroundColor: theme.palette.background.paper,
      borderRadius: "3px",
    },
    "& .tab-content": {
      width: "100%"
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
            borderBottom: "1px solid rgba(255, 255, 255, .1)!important",
            opacity: ".4",
            transition: "unset!important",
            "&.active": {
              opacity: "1"
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
                  color: theme.palette.text.primary
                }
              },
              "& .cinema-location": {
                fontSize: "12px",
                display: "block",
                color: theme.palette.text.secondary
              }
            },
          }
        },
      },
      "& .tab-content": {
        minHeight: "200px",
        padding: "15px",
        [theme.breakpoints.up("sm")]: {
          padding: "10px"
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
              transition: "transform .1s"
            },
            "& .dropdown-toggle": {
              cursor: "pointer",
              padding: "5px",
              fontSize: "16px",
              background: theme.palette.warning.main,
              border: "none",
              borderRadius: "3px",
              fontWeight: "500",
              boxShadow: "none",
              transition: "unset",
              "&::after": {
                content: "unset",
              },
              "&:hover": {
                transform: "translateY(-1px)"
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
                borderRadius: "4px"
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#C3BFBF", 
                borderRadius: "4px"
              },
              "& .dropdown-item": {
                backgroundColor: "white",
                "&:hover": {
                  backgroundColor: "#eee",
                },
                "&:active": {
                  backgroundColor: "#eee",
                },
                "& a": {
                  textDecoration: "none",
                  color: "#6c757d"
                }
              }
            },
          }
        }
      }
    }
  },
  navList: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1px solid rgba(255, 255, 255, .1)",
    padding: '5px 0',
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
        }
      }
    },
    
  },
  skeleton: {
    marginBottom: "15px"
  },
  gridContainer: {
    paddingTop: "10px",
    paddingBottom: "10px",
    width: "100%",
  },
  gridItem: {
    borderRight: "1px solid rgba(255, 255, 255, .1)" 
  }
}));

export default useStyle;
