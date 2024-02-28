const COLORS = {
  BLACK: "#000",
  NEUTRAL: "#eeeadc",
  PRIMARY: "#dd0099",
  NEAR_BLACK: "#170901",
  SECONDARY: "#ffab01",
  WHITE: "#fff",
};

export const THEME = {
  DARK: {
    BACKGROUND: {
      BODY: COLORS.BLACK,
      HEADER: COLORS.BLACK,
    },
    BORDER: {
      HEADER: COLORS.BLACK,
    },
    BUTTON: {
      BODY: {
        BACKGROUND: COLORS.WHITE,
        TEXT: COLORS.BLACK,
      },
      HEADER: {
        BACKGROUND: COLORS.WHITE,
        TEXT: COLORS.BLACK,
      },
    },
    COPY: "Switch to light mode",
    LINK: {
      BODY: COLORS.PRIMARY,
      HEADER: COLORS.WHITE,
    },
    SHADOW: {
      HEADER: COLORS.WHITE,
    },
    TEXT: {
      BODY: COLORS.WHITE,
      HEADER: COLORS.WHITE,
    },
  },
  LIGHT: {
    BACKGROUND: {
      BODY: COLORS.WHITE,
      HEADER: COLORS.WHITE,
    },
    BORDER: {
      HEADER: COLORS.NEUTRAL,
    },
    BUTTON: {
      BODY: {
        BACKGROUND: COLORS.SECONDARY,
        TEXT: COLORS.WHITE,
      },
      HEADER: {
        BACKGROUND: COLORS.BLACK,
        TEXT: COLORS.NEUTRAL,
      },
    },
    COPY: "Switch to dark mode",
    LINK: {
      BODY: COLORS.PRIMARY,
      HEADER: COLORS.BLACK,
    },
    TEXT: {
      BODY: COLORS.BLACK,
      HEADER: COLORS.BLACK,
    },
    SHADOW: {
      HEADER: COLORS.WHITE,
    },
  },
};
