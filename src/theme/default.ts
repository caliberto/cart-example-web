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
        }
    },
    text: {
        color: {
            alert: "#c67373"
        },
    },
    screen: {
        primary: {
            backgroundColor: "#f1f1f1"
        }
    }
};