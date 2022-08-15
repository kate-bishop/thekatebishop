import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { palette } from '../utils/constants';

export const headerTheme = responsiveFontSizes(createTheme({
  typography: {
    fontFamily: [
      'Open Sans',
    ].join(','),
    h1: {
      color: palette.primary,
      fontSize: '8rem',
      fontWeight: 800,
      margin: 0,
      lineHeight: .75,
      '@media (max-width:480px)': {
        fontSize: '3rem'
      },
    },
    h2: {
      color: palette.primary,
      fontSize: '1.5rem',
      fontWeight: 300,
      textAlign: 'justify',
      textJustify: 'inter-word',
      '@media (max-width:480px)': {
        fontSize: '1rem'
      },
    },
    h3: {
      color: palette.quinary,
      fontSize: '1.2rem',
      fontWeight: 400,
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
      fontWeight: 400,
      textAlign: 'justify',
      textJustify: 'inter-word',
      '@media (max-width:480px)': {
        fontSize: '.75rem'
      },
    }
  },
}));

export const portfolioTheme = responsiveFontSizes(createTheme({
  typography: {
    fontFamily: [
      'Open Sans',
    ].join(','),
    h1: {
      color: palette.quinary,
      fontSize: '6rem',
      fontWeight: 800,
      '@media (max-width:480px)': {
        fontSize: '2.5rem'
      },
    },
    h2: {
      color: palette.primary,
      fontSize: '1.75rem',
      fontWeight: 800,
      '@media (max-width:480px)': {
        fontSize: '1.5rem'
      },
    },
    h3: {
      color: palette.primary,
      fontSize: '1.25rem',
      fontWeight: 700,
      '@media (max-width:480px)': {
        fontSize: '1rem'
      },
    },
    subtitle1: {
      color: palette.quinary,
      fontSize: '1rem',
      fontWeight: 300,
      margin: 0,
    },
    subtitle2: {
      color: palette.quinary,
      fontSize: '1.1rem',
      fontWeight: 400,
      margin: 0,
    },
  },
}));

export const portfolioPageTheme = responsiveFontSizes(createTheme({
  typography: {
    fontFamily: [
      'Open Sans',
    ].join(','),
    h1: {
      color: palette.primary,
      fontSize: '6rem',
      fontWeight: 800,
      '@media (max-width:480px)': {
        fontSize: '2.5rem'
      },
    },
    h2: {
      color: palette.primary,
      fontSize: '1.75rem',
      fontWeight: 800,
      '@media (max-width:480px)': {
        fontSize: '1.5rem'
      },
    },
    h3: {
      color: palette.primary,
      fontSize: '1.25rem',
      fontWeight: 700,
      '@media (max-width:480px)': {
        fontSize: '1rem'
      },
    },
    subtitle1: {
      color: palette.quinary,
      fontSize: '1rem',
      fontWeight: 300,
      margin: 0,
    },
    subtitle2: {
      color: palette.quinary,
      fontSize: '1.1rem',
      fontWeight: 400,
      margin: 0,
    },
  },
}));

export const aboutTheme = responsiveFontSizes(createTheme({
  typography: {
    fontFamily: [
      'Open Sans',
    ].join(','),
    h1: {
      color: palette.primary,
      fontSize: '6rem',
      fontWeight: 800,
      '@media (max-width:480px)': {
        fontSize: '2.5rem'
      },
    },
    h2: {
      color: palette.secondary,
      fontSize: '1.25rem',
      fontWeight: 700,
      margin: 0,
    },
    subtitle1: {
      color: palette.primary,
      fontSize: '1rem',
      fontWeight: 300,
      margin: 0,
    },
  },
}));