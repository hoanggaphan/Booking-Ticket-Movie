import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Close } from "@material-ui/icons";
import { SnackbarProvider } from "notistack";
import PropTypes from 'prop-types';
import React, { useRef } from "react";

Snackbar.propsTypes = {
  children: PropTypes.node.isRequired,
}

const useStyles = makeStyles({
  root: {
    "& span": {
      color: "white",
    },
  },
  containerAnchorOriginTopCenter: {
    top: "65px",
  },
  iconButton: {
    outline: "unset!important"
  }
});

export default function Snackbar({ children }) {
  const classes = useStyles();
  const notistackRef = useRef(null);

  const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key);
  };

  return (
    <SnackbarProvider
      preventDuplicate
      ref={notistackRef}
      autoHideDuration={4000}
      classes={{
        root: classes.root,
        containerAnchorOriginTopCenter: classes.containerAnchorOriginTopCenter,
      }}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      action={(key) => (
        <IconButton className={classes.iconButton} onClick={onClickDismiss(key)}>
          <Close />
        </IconButton>
      )}
    >
      {children}
    </SnackbarProvider>
  );
}
