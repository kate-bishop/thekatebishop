import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { palette } from '../utils/constants';

export const wrapperTheme = responsiveFontSizes(createTheme({
  typography: {
    fontFamily: [
      'DM Sans',
    ].join(','),
    h5: {
      fontSize: '1.25rem',
      color: palette.primary
    },
    h6: {
      fontSize: '1rem',
      color: palette.primary
    }
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

export const portfolioTheme = responsiveFontSizes(createTheme({
  palette: {
    primary: {
      main: palette.green
    },
    secondary: {
      main: palette.quinary
    }
  },
  typography: {
    fontFamily: [
      'DM Sans',
    ].join(','),
    h1: {
      color: palette.primary,
      fontSize: '4rem',
      '@media (max-width:480px)': {
        fontSize: '2.5rem'
      },
      fontFamily: [
        'DM Serif Display',
      ].join(','),
    },
    h2: {
      color: palette.primary,
      fontSize: '1.75rem',
      '@media (max-width:480px)': {
        fontSize: '1.5rem'
      },
      fontFamily: [
        'DM Serif Display',
      ].join(','),
    },
    h3: {
      color: palette.primary,
      fontSize: '1.25rem',
      '@media (max-width:480px)': {
        fontSize: '1rem'
      },
      fontFamily: [
        'DM Serif Display',
      ].join(','),
    },
    subtitle1: {
      color: palette.primary,
      fontSize: '1rem',
      margin: 0,
    },
    subtitle2: {
      color: palette.primary,
      fontSize: '1rem',
      fontWeight: 700,
      margin: 0,
    },
  },
}));

export const portfolioPageTheme = responsiveFontSizes(createTheme({
  palette: {
    primary: {
      main: palette.secondary
    }
  },
  typography: {
    fontFamily: [
      'DM Sans',
    ].join(','),
    h1: {
      color: palette.primary,
      fontSize: '4rem',
      '@media (max-width:480px)': {
        fontSize: '1.5rem'
      },
      fontFamily: [
        'DM Serif Display',
      ].join(',')
    },
    h2: {
      color: palette.primary,
      fontFamily: [
        'DM Serif Display',
      ].join(',')
    },
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
    h2: {
      color: palette.primary,
      fontSize: '1rem',
      fontWeight: 700,
      margin: 0,
    },
    subtitle1: {
      color: palette.primary,
      fontSize: '1rem',
      lineHeight: '1.4rem',
      margin: 0,
    },
    subtitle2: {
      color: palette.primary,
      fontSize: '.9rem',
      lineHeight: '1.3rem',
      margin: 0,
    },
  },
}));