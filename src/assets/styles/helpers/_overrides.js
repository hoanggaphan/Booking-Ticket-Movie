const overrides = {
  MuiCssBaseline: {
    "@global": {
      a: {
        "&:hover": {
          color: "inherit",
          userDrag: "none",
        },
        "&:focus": {
          outline: "none",
        },
      },

      "div:focus, button:focus": {
        outline: "none",
      },

      img: {
        userDrag: "none",
      },
    },
  },
};

export default overrides;
