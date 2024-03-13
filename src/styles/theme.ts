export const COLORS = {
  BLACK: '#000',
  GREY01: '#ccc',
  GREY02: '#777',
  NEAR_BLACK: '#170901',
  NEUTRAL: '#eeeadc',
  PRIMARY: '#d44102',
  SECONDARY: '#1cc8d7',
  WHITE: '#fff',
};

export const THEME_DARK = {
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
  COPY: 'Switch to light mode',
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
    LOGO: COLORS.PRIMARY,
  },
};

export const THEME_LIGHT = {
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
  COPY: 'Switch to dark mode',
  LINK: {
    BODY: COLORS.PRIMARY,
    HEADER: COLORS.BLACK,
  },
  TEXT: {
    BODY: COLORS.BLACK,
    HEADER: COLORS.BLACK,
    LOGO: COLORS.PRIMARY,
  },
  SHADOW: {
    HEADER: COLORS.WHITE,
  },
};
