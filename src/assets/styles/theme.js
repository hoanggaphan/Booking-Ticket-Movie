import { viVN } from "@material-ui/core/locale";
import { createMuiTheme } from "@material-ui/core/styles";
import { overrides, palette } from "./helpers";

const theme = createMuiTheme(
  {
    overrides,
    palette,
  },
  viVN
);

export default theme;
