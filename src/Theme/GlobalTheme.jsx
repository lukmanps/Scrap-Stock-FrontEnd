import { createTheme } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

const GlobalTheme = createTheme({
    //Color Theme
    palette: {
        primary: {
            // Green.
            main: '#018A44',
        },
        secondary: {
            // white.
            main: '#ffffff',
        },
        bg: {
            // Dark Gray as Background.
            main: '#1b1b1b'
        },

        background: {
            main: '#1b1b1b'
        }
    },

    //Typography
    typography: {
        fontFamily: 'poppins',
        color: {
            primary: '#018A44',
            secondary: '#ffffff'
        }
    },

    //components
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '20px'
                }
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: 'none', // Remove the box shadow
                },
            },
        },

        MuiTextField: {
            styleOverrides: {
                root: {
                    '--TextField-brandBorderColor': '#ffffff',
                    '--TextField-brandBorderHoverColor': '#ffffff',
                    '--TextField-brandBorderFocusedColor': '#018A44',
                    '& label.Mui-focused': {
                        color: 'var(--TextField-brandBorderFocusedColor)',
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    borderColor: 'var(--TextField-brandBorderColor)',
                    borderRadius: '15px',
                },
                root: {
                    [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                        borderColor: 'var(--TextField-brandBorderHoverColor)',
                    },
                    [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                        borderColor: 'var(--TextField-brandBorderFocusedColor)',
                    },
                },
            },
        },
        MuiFilledInput: {
            styleOverrides: {
              root: {
                '&:before, &:after': {
                  borderBottom: '2px solid var(--TextField-brandBorderColor)',
                },
                '&:hover:not(.Mui-disabled, .Mui-error):before': {
                  borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
                },
                '&.Mui-focused:after': {
                  borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
                },
              },
            },
          },
          MuiInput: {
            styleOverrides: {
              input: {
                '&:before': {
                  borderBottom: '2px solid var(--TextField-brandBorderColor)',
                },
                '&:hover:not(.Mui-disabled, .Mui-error):before': {
                  borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
                },
                '&.Mui-focused:after': {
                  borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
                },
              },
            },
          },
            MuiInputLabel: {
                styleOverrides: {
                    root: {
                        color: 'white'
                    }
                }
            },
            MuiInputBase: {
                styleOverrides: {
                    root: {
                        color: 'white'
                    }
                }
            }
        },
    });


export default GlobalTheme;  
