const COLORS = {
    BLACK: "#000",
    GREEN: "#A5CD36",
    PINK: "#BE4B8E",
    WHITE: "#FFF",
};

export const THEME = {
    DARK: {
        BACKGROUND: {
            BODY: COLORS.BLACK,
            HEADER: COLORS.BLACK,
        },
        BUTTON: {
            BODY: {
                BACKGROUND: COLORS.WHITE,
                TEXT: COLORS.BLACK,
            },
            HEADER: {
                BACKGROUND: COLORS.GREEN,
                TEXT: COLORS.BLACK,
            },
        },
        COPY: "Switch to light mode",
        LINK: {
            BODY: COLORS.PINK,
            HEADER: COLORS.GREEN,
        },
        TEXT: {
            BODY: COLORS.WHITE,
            HEADER: COLORS.WHITE,
        },
    },
    LIGHT: {
        BACKGROUND: {
            BODY: COLORS.WHITE,
            HEADER: COLORS.GREEN,
        },
        BUTTON: {
            BODY: {
                BACKGROUND: COLORS.PINK,
                TEXT: COLORS.WHITE,
            },
            HEADER: {
                BACKGROUND: COLORS.BLACK,
                TEXT: COLORS.GREEN,
            },
        },
        COPY: "Switch to dark mode",
        LINK: {
            BODY: COLORS.PINK,
            HEADER: COLORS.BLACK,
        },
        TEXT: {
            BODY: COLORS.BLACK,
            HEADER: COLORS.BLACK,
        },
    },
};
