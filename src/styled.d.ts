import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    text: {
      primary: string;
      secondary: string;
    };
    palette: {
      primary: string;
      white: string;
      black: string;
      error: string;
    };
    buttons: {
      primary: {
        main: string;
        active: string;
        disabled: string;
      };
    };
    form: {
      inputBackground: string;
      inputBorder: string;
      inputBorderActive: string;
      selectItemActive: string;
    };
    borderRadius: string;
  }
}
