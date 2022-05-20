import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
    fontSize: {
        40: "40px",
        28: "28px",
        24: "24px",
        16: "16px",
        12: "12px",
        10: "10px",
        9: "9px",
    },
    button: {
        primary: {
            backgroundColor: {
                default: "#5f729d",
                disabled: "#999999",
            }
        },
        icon: {
            remove: "#b95151",
            add: "#6a7ca4",
            general: "#a1a1a1",
        }
    },
    text: {
        color: {
            alert: "#b95151",
            secondary: "#a1a1a1"
        },
    },
    screen: {
        primary: {
            backgroundColor: "#f1f1f1"
        }
    }
};