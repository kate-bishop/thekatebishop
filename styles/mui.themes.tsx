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
      fontSize: '10rem',
      margin: 0,
      lineHeight: .85,
      '@media (max-width:480px)': {
        fontSize: '3rem'
      },
      fontFamily: [
        'DM Serif Display',
      ].join(',')
    },
    h2: {
      color: palette.primary,
      fontSize: '1.25rem',
      textAlign: 'justify',
      textJustify: 'inter-word',
      '@media (max-width:480px)': {
        fontSize: '1rem'
      },
    },
    h3: {
      color: palette.primary,
      fontSize: '1.25rem',
      fontWeight: 700,
      textAlign: 'justify',
      textJustify: 'inter-word',
      margin: 0,
      '@media (max-width:480px)': {
        fontSize: '1rem'
      },
    },
    subtitle1: {
      color: palette.primary,
      fontSize: '1rem',
      textAlign: 'justify',
      textJustify: 'inter-word',
      '@media (max-width:480px)': {
        fontSize: '.75rem'
      },
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
    },
    h2: {
      color: palette.primary,
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