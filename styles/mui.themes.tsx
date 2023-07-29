import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { palette } from '../utils/constants';

export const wrapperTheme = responsiveFontSizes(createTheme({
  typography: {
    fontFamily: [
      'DM Sans',
    ].join(','),
  },
}));

export const headerTheme = responsiveFontSizes(createTheme({
  typography: {
    fontFamily: [
      'DM Sans',
    ].join(','),
    h1: {
      color: palette.primary,
      fontSize: '15rem',
      margin: 0,
      lineHeight: .75,
      fontFamily: [
        'DM Serif Display',
      ].join(',')
    },
    subtitle1: {
      color: palette.primary,
      fontSize: '1rem',
      textAlign: 'justify',
      textJustify: 'inter-word',
    }
  },
}));

export const aboutTheme = responsiveFontSizes(createTheme({
  typography: {
    fontFamily: [
      'DM Sans',
    ].join(','),
    h1: {
      color: palette.primary,
      fontSize: '4rem',
      lineHeight: .85,
      '@media (max-width:480px)': {
        fontSize: '2.5rem'
      },
      fontFamily: [
        'DM Serif Display',
      ].join(','),
    },
    subtitle1: {
      color: palette.primary,
      fontSize: '1rem',
      lineHeight: '1.4rem',
      margin: 0,
    },
    button: {
      fontSize: '1rem',
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
}));