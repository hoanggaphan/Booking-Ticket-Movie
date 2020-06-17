import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "15px 0",

    "& .card": {
      background: theme.palette.background.paper,

      "& .card-header": {
        border: "none",
        backgroundColor: "unset",

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        "& .name": {
          fontSize: "14px",
          fontWeight: "500",
          color: theme.palette.text.primary,
          lineHeight: "1",
        },

        "& .time": {
          display: "block",
          fontSize: "11px",
          fontWeight: "400",
          lineHeight: "1",
          color: theme.palette.text.muted,
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
        display: "flex",
        borderTop: `1px solid rgba(255, 255, 255, .1)`,

        margin: "0 20px",
        padding: "10px 0",
        backgroundColor: "unset",
        
        "& .text": {
          fontSize: "14px",
        },

        "& .review-box": {
          marginRight: "30px",
          fontWeight: "600",
          
          display: "flex",
          alignItems: "center",
          
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
          marginRight: "0",
        },
      },

      "& .card-expand": {
        margin: "0 20px",
        borderTop: `1px solid rgba(255, 255, 255, .1)`,

        "& .reply": {
          display: "flex",
          alignItems: "center",
          padding: "10px 0",

          "& .reply-input": {
            width: "100%",
            outline: "none",
            borderRadius: "20px",
            border: `1px solid transparent`,

            marginLeft: "5px",
            padding: "7px 12px",

            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.secondary,
            transition: "border .2s",

            "&::placeholder": {
              color: theme.palette.text.muted,
            },

            "&:focus": {
              border: `1px solid ${theme.palette.primary.main}`,
            },
          },
        },

        "& .reply-list": {

          "& .reply-item": {
            display: "flex",
            marginBottom: "10px",

            "& .reply-box": {
              marginLeft: "5px",
              padding: "9px 13px",
              borderRadius: "18px",
              backgroundColor: theme.palette.background.default,

              "& .reply-name": {
                display: "block",
                marginBottom: "4px",
                color: theme.palette.text.primary,

                fontSize: "13px",
                fontWeight: "500",
                lineHeight: "1",
              },

              "& .reply-message": {
                display: "block",
                lineHeight: "1",

                fontWeight: "400",
                color: theme.palette.text.secondary,
                wordBreak: "break-word",
              },
            },
          },

          "& .reply-more": {
            display: "inline-block",
            marginBottom: "10px",
            cursor: "pointer",
            
            fontWeight: "600",
            fontSize: "15px",
            color: theme.palette.text.default,
            
            "&:hover": {
              textDecoration: "underline",
            },
          },
        },
      },
    },
  },
}));

export default useStyles;
