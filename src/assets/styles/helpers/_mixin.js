// SIZE MIXIN
export const size = (width, height) => ({
  width,
  height,
});

// POSITION MIXIN
export const position = (
  position,
  top = null,
  right = null,
  bottom = null,
  left = null
) => ({
  position,
  top,
  right,
  bottom,
  left,
});

export const centerAbsolute = (direction = "both") => {
  const style = { position: "absolute" };

  if (direction === "both") {
    style.top = "50%";
    style.left = "50%";
    style.transform = "translate(-50%, -50%)";
  }

  if (direction === "left") {
    style.left = "50%";
    style.transform = "translateX(-50%)";
  }

  if (direction === "top") {
    style.top = "50%";
    style.transform = "translateY(-50%)";
  }

  return style;
};

// FLEX MIXIN
export const flexBox = (
  display = "flex",
  alignItems = null,
  justifyContent = null,
  flexDirection = null,
  flexWrap = null,
  order = null
) => ({
  display,
  alignItems,
  justifyContent,
  flexDirection,
  flexWrap,
  order,
});

export const flexCenter = () => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

// TEXT MIXIN
export const lineClamp = (lineClamp) => ({
  lineClamp,
  display: "box",
  overflow: "hidden",
  boxOrient: "vertical",
});