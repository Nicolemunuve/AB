import '@mui/material/styles';
import '@mui/material';
import '@mui/icons-material';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

declare module '@mui/material' {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
} 