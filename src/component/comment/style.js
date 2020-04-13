import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "15px 0",
    "& .card": {
      background: theme.palette.background.paper,
      "& .card-header": {
        backgroundColor: "unset",
        border: "none",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& .name": {
          fontSize: "14px",
          fontWeight: "500",
          color: theme.palette.text.primary,
          lineHeight: "1",
        },
        "& .time": {
          fontSize: "11px",
          fontWeight: "400",
          color: theme.palette.text.muted,
          lineHeight: "1",
          display: "block",
        },
        "& .vote": {
          "& .vote-txt": {
            marginBottom: "0",
            textAlign: "center",
            color: theme.palette.text.success,
          },
          "& .vote-star": {},
        },
      },
      "& .card-body": {
        padding: "5px 20px 20px",
        "& .card-text": {
          color: theme.palette.text.secondary,
        },
      },
      "& .card-footer": {
        margin: "0 20px",
        padding: "10px 0",
        borderTop: `1px solid rgba(255, 255, 255, .1)`,
        borderBottom: `1px solid rgba(255, 255, 255, .1)`,
        backgroundColor: "unset",
        display: "flex",
        "& .text": {
          fontSize: "14px",
        },

        "& .review-box": {
          display: "flex",
          alignItems: "center",
          marginRight: "30px",
          fontWeight: "600",
          cursor: "pointer",
          transition: "all .2s",
          userSelect: "none",
          "&:hover": {
            color: "white",
          },
          "& .icon": {
            width: "14px",
            height: "14px",
            marginRight: "5px",
          },
        },
        "& .like-box": {
          color: theme.palette.danger.main,
          minWidth: "100px",
        },
        "& .comment-box": {
          color: theme.palette.primary.main,
          marginRight: "0"
        },
      },
      "& .card-expand": {
        padding: "0 20px",
        "& .reply": {
          display: "flex",
          alignItems: "center",
          padding: "10px 0",
          "& .reply-input": {
            borderRadius: "20px",
            backgroundColor: theme.palette.background.default,
            outline: "none",
            padding: "7px 12px",
            width: "100%",
            marginLeft: "5px",
            border: `1px solid transparent`,
            color: theme.palette.text.secondary,
            transition: "border .2s",
            "&::placeholder": {
              color: theme.palette.text.muted
            },
            "&:focus": {
              border: `1px solid ${theme.palette.primary.main}`,
            }
          }
        },
        "& .reply-list": {
          "& .reply-item": {
            display: "flex",
            marginBottom: "10px",
            "& .reply-box": {
              marginLeft: "5px",
              padding: "9px 13px",
              backgroundColor: theme.palette.background.default,
              borderRadius: "18px",
              "& .reply-name": {
                fontSize: "13px",
                fontWeight: "500",
                color: theme.palette.text.primary,
                lineHeight: "1",
                display: "block",
                marginBottom: '4px',
              },
              "& .reply-message": {  
                lineHeight: "1",
                fontWeight: "400",
                display: "block",
                color: theme.palette.text.secondary,
                wordBreak: "break-word"
              }
            }
          },
          "& .reply-more": {
            fontWeight: "600",
            fontSize: "15px",
            marginBottom: "10px",
            color: theme.palette.text.default,
            cursor: "pointer",
            display: "inline-block",
            "&:hover": {
              textDecoration: "underline"
            }
          }
        }
      }
    },
  },
}));

export default useStyles;
