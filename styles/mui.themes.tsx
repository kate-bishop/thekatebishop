import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { palette } from '../utils/constants';

export const wrapperTheme = responsiveFontSizes(createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#4CAF50',
    },
  },
  typography: {
    fontFamily: [
      'DM Sans',
    ].join(','),
    h1: {
      color: palette.primary,
      fontSize: '3rem',
      fontFamily: [
        'DM Serif Display',
      ].join(','),
    },
    h2: {
      color: palette.primary,
      fontSize: '.85rem',
      lineHeight: 1,
    },
    h3: {
      color: palette.primary,
      fontSize: '.85rem',
      lineHeight: .85,
    },
    subtitle1: {
      color: palette.primary,
      fontSize: '1rem',
      lineHeight: '1.4rem',
      margin: 0,
      '@media (max-width:480px)': {
        fontSize: '.85rem'
      },
    },
    subtitle2: {
      color: palette.primary,
      fontSize: '1rem',
      lineHeight: '1.4rem',
      fontStyle: 'italic',
      margin: 0,
      '@media (max-width:480px)': {
        fontSize: '.85rem'
      },
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: 'none',
          marginTop: '1rem',
          padding: '.5rem 1.5rem',
          color: palette.primary,
          backgroundColor: palette.tertiary,
          '&:hover': {
            backgroundColor: palette.tertiaryHover,
          },
          '&:active': {
            backgroundColor: palette.tertiaryActive,
          }
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: palette.tertiaryActive,
            borderColor: palette.tertiaryActive,
          },
        }
      }
    }
  },
}));

export const homeTheme = responsiveFontSizes(createTheme({
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
      ].join(','),
      '@media (max-width:480px)': {
        fontSize: '6rem'
      },
      '@media (max-width:300px)': {
        fontSize: '4rem'
      },
    },
    h2: {
      color: palette.primary,
      fontSize: '4rem',
      lineHeight: .85,
      marginBottom: '1rem',
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
      textAlign: 'justify',
      textJustify: 'inter-word',
      '@media (max-width:300px)': {
        fontSize: '.85rem'
      },
    },
    subtitle2: {
      color: palette.primary,
      fontSize: '.85rem',
      lineHeight: '1.4rem',
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: 'none',
          marginTop: '1rem',
          padding: '.5rem 1.5rem',
          color: palette.primary,
          backgroundColor: palette.tertiary,
          '&:hover': {
            backgroundColor: palette.tertiaryHover,
          },
          '&:active': {
            backgroundColor: palette.tertiaryActive,
          }
        },
      },
    },
  },
}));
