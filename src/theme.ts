import 'styled-components';
import { DefaultTheme } from 'styled-components/native';

declare module 'styled-components' {
  interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      grey: string;
      text: string;
      textSecondary: string;
    };
  }
}

export const theme: DefaultTheme = {
  colors: {
    primary: '#220a82',
    secondary: '#14cbc4',
    accent: '#e535ab',
    background: '#f0f3f5',
    grey: '#d8d9e0',
    text: '#343c5a',
    textSecondary: '#747790',
  },
};
