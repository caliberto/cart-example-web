import "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme {
        fontSize: {
            40: string;
            28: string;
            24: string;
            16: string;
            12: string;
            10: string;
            9: string;
        },
        text: {
            color: {
                alert: string
            }
        }
        button : {
            primary : {
                backgroundColor: {
                    default: string;
                    disabled: string;
                };
            }
        },
        screen : {
            primary: {
                backgroundColor: string;
            }
        }
    }
}