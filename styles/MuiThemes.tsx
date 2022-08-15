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
    h5: {
      color: palette.primary,
      fontSize: '1rem',
      fontWeight: 400,
      textAlign: 'justify',
      textJustify: 'inter-word',
      '@media (max-width:480px)': {
        fontSize: '1rem'
      },
    },
    h6: {
      color: palette.primary,
      fontSize: '1.25rem',
      fontWeight: 300,
      textAlign: 'justify',
      textJustify: 'inter-word',
      margin: 0,
      '@media (max-width:480px)': {
        fontSize: '1rem'
      },
    },
    body1: {
      color: palette.primary,
      fontSize: '.85rem',
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
    },
    h2: {
      color: palette.primary,
      fontSize: '1.75rem',
      fontWeight: 800,
    },
    h3: {
      color: palette.primary,
      fontSize: '1.25rem',
      fontWeight: 700,
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
