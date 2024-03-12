import { createTheme } from "@mui/material";
import { selectArrowIcon } from "./assets/images";

let customTheme = createTheme({
  palette: {
    primary: {
      main: "#4CA751",
    },
    error: {
      main: "#FF0000",
    },
  },
  typography: {
    fontFamily: "Poppins,sans-serif",
  },
});

customTheme = createTheme(customTheme, {
  typography: {
    h1: {
      fontSize: "48px",
      lineHeight: "54px",
      fontWeight: 600,
      [customTheme.breakpoints.down("xl")]: {
        fontSize: "40px",
        lineHeight: "46px",
      },
      [customTheme.breakpoints.down("lg")]: {
        fontSize: "30px",
        lineHeight: "36px",
      },
      [customTheme.breakpoints.down("md")]: {
        fontSize: "26px",
        lineHeight: "32px",
      },
    },
    h2: {
      fontSize: "32px",
      lineHeight: "38px",
      fontWeight: 500,
      color: "#212121",
      [customTheme.breakpoints.down("lg")]: {
        fontSize: "24px",
        lineHeight: "30px",
      },
    },
    h3: {
      fontSize: "24px",
      lineHeight: "30px",
      fontWeight: 500,
      color: "#212121",
    },
    h4: {
      fontSize: "20px",
      lineHeight: "26px",
      fontWeight: 500,
      color: "#212121",
    },
    h5: {
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: 500,
    },
    h6: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 500,
      color: "#212121",
    },
    body2: {
      lineHeight: "20px",
    },
  },
  components: {
    MuiAvatar: {
      defaultProps: {
        variant: "square",
      },
      styleOverrides: {
        root: {
          height: "24px",
          width: "24px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "16px",
          lineHeight: "20px",
          textTransform: "capitalize",
        },
        startIcon: { marginRight: "10px" },
        contained: {
          whiteSpace: "nowrap",
          boxShadow: "none",
          "&:hover": {
            color: "#FFFFFF",
            boxShadow: "none",
          },
        },
        containedSizeMedium: {
          padding: "12px 24px",
          height: "48px",
          minWidth: "90px",
        },
        containedSizeSmall: {
          "&.MuiButton-containedPrimary": {
            minHeight: "30px",
            fontSize: "12px",
            lineHeight: "18px",
            ".MuiButton-startIcon": { marginRight: "6px" },
            ".MuiAvatar-root": {
              height: "20px",
              width: "20px",
            },
          },
        },
        containedPrimary: {
          "&.Mui-disabled": {
            backgroundColor: "#B5E4B7",
            color: "#FFFFFF",
          },
        },
        outlined: {
          whiteSpace: "nowrap",
          "&.rounded": {
            borderRadius: "50px",
          },
        },
        outlinedSizeMedium: {
          height: "48px",
          minWidth: "90px",
          padding: "12px 24px",
        },
        outlinedPrimary: {
          borderColor: "#4CA751",
        },
        outlinedSizeSmall: {
          "&.MuiButton-outlinedPrimary": {
            fontSize: "12px",
            lineHeight: "18px",
            padding: "5px 10px",
            minWidth: "66px",
          },
        },
        outlinedInfo: {
          borderColor: "#BEBEBE",
          color: "#606060",
          ":hover": {
            borderColor: "#4CA751",
            color: "#4CA751",
          },
        },
        textInfo: {
          color: "#606060",
          ":hover": {
            backgroundColor: "rgba(96, 96, 96, 0.05)",
          },
        },
        textSizeMedium: {
          padding: "12px 6px",
          minHeight: "48px",
        },
        textSizeSmall: {
          ".MuiButton-startIcon": {
            marginRight: "6px",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        edgeEnd: {
          marginRight: "-8px",
          ".MuiAvatar-root": {
            height: "24px",
            width: "24px",
          },
        },
      },
    },
    MuiFormControl: {
      defaultProps: {
        color: "primary",
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          display: "flex",
          width: "100%",
          marginBottom: "24px",
          [customTheme.breakpoints.down("md")]: {
            marginBottom: "16px",
          },
          ".select-down-arrow": {
            height: "24px",
            width: "24px",
            transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            position: "absolute",
            right: "12px",
          },
          ".MuiSelect-select[aria-expanded='true']": {
            "~ .select-down-arrow": {
              transform: "rotate(180deg)",
            },
          },
          ".MuiInputBase-root": {
            ".MuiSelect-select": {
              "&.MuiSelect-outlined": {
                paddingRight: "36px",
                position: "relative",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                gap: "8px",
              },
            },
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          ":hover": {
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "#4CA751",
            },
          },
        },
        notchedOutline: {
          borderColor: "#BEBEBE",
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          width: "100% !important",
        },
        input: {
          "&.MuiAutocomplete-input": {
            padding: "5px 4px 1px 5px",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "&.MuiInputBase-sizeSmall": {
            "&.MuiInputBase-colorPrimary": {
              ".MuiSelect-select": {
                color: "#4CA751",
              },
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "#4CA751",
              },
            },
            fontWeight: "500",
            fontSize: "12px",
            lineHeight: "18px",
            minWidth: "100px",
            ".MuiSelect-select": {
              padding: "6px 30px 6px 10px",
            },
            ".MuiSelect-icon": {
              right: "5px",
              backgroundSize: "20px",
              height: "20px",
              width: "20px",
              top: "50%",
              transform: "translateY(-50%)",
            },
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          ".MuiSelect-icon": {
            background: `url(${selectArrowIcon})`,
            backgroundSize: "24px",
            path: { display: "none" },
            right: "12px",
          },
        },
        input: {
          color: "#606060",
          height: "24px",
          "&.MuiOutlinedInput-input:not(textarea)": {
            padding: "12px 16px",
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#989898",
          lineHeight: "23px",
          "&.MuiInputLabel-root": {
            transform: "translate(16px, 12px) scale(1)",
          },
          "&.MuiInputLabel-shrink": {
            transform: "translate(16px, -8px) scale(0.75)",
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          lineHeight: "16px",
          color: "#989898",
          margin: "8px 0 0",
          paddingBottom: "0",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: "8px",
          ".MuiSvgIcon-root": {
            color: "#989898",
          },
          "&.Mui-checked": {
            ".MuiSvgIcon-root": {
              color: "#4CA751",
            },
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: "8px",
          ".MuiSvgIcon-root": {
            color: "#989898",
          },
          "&.Mui-checked": {
            ".MuiSvgIcon-root": {
              color: "#4CA751",
            },
          },
        },
      },
    },
    MuiFormGroup: {
      styleOverrides: {
        root: {
          "&[role='radiogroup']": {
            ".MuiFormControlLabel-root": { marginLeft: "-10px" },
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: "14px",
          lineHeight: "20px",
          color: "#989898",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0px 0px 16px 0px rgba(76, 167, 81, 0.1)",
          borderRadius: "8px",
          padding: "24px",
          [customTheme.breakpoints.down("lg")]: {
            padding: "20px",
          },
          [customTheme.breakpoints.down("sm")]: {
            padding: "16px",
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#BEBEBE",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0px 3px 14px 0px rgba(0, 0, 0, 0.05)",
          left: "250px",
          width: "auto",
          [customTheme.breakpoints.down("lg")]: {
            left: "0",
          },
          ".MuiToolbar-root": {
            minHeight: "70px",
            [customTheme.breakpoints.down("lg")]: {
              padding: "0 20px",
            },
            [customTheme.breakpoints.down("sm")]: {
              padding: "0 16px",
            },
          },
          ".action-wrapper": {
            display: "flex",
            marginLeft: "auto",
            alignItems: "center",
            gap: "8px",
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {},
        paper: {
          boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
          minWidth: "148px",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: "4px 0",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          gap: "8px",
          padding: "12px 14px",
          color: "#606060",
          ":hover": {
            color: "#606060",
            backgroundColor: "#EEF7EE",
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: "16px",
          width: "calc(100% - 32px)",
          margin: "16px",
          maxWidth: "938px",
          maxHeight: "calc(100% - 32px)",
          [customTheme.breakpoints.down("sm")]: {
            borderRadius: "12px",
          },
          ".dialog-header": {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(190, 190, 190, 0.5)",
            height: "72px",
            padding: "8px 24px",
            [customTheme.breakpoints.down("md")]: {
              padding: "8px 16px",
            },
            [customTheme.breakpoints.down("sm")]: {
              padding: "8px 12px",
            },
            ".MuiIconButton-root": {
              marginRight: "-8px",
            },
          },
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: "0",
          fontSize: "20px",
          lineHeight: "30px",
          fontWeight: "500",
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: "12px 24px",
          borderTop: "1px solid rgba(190, 190, 190, 0.5)",
          [customTheme.breakpoints.down("md")]: {
            padding: "12px 16px",
          },
          [customTheme.breakpoints.down("sm")]: {
            padding: "12px",
          },
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: "24px",
          [customTheme.breakpoints.down("md")]: {
            padding: "16px",
          },
          [customTheme.breakpoints.down("sm")]: {
            padding: "12px",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: "40px",
        },
        flexContainer: {
          gap: "38px",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "#606060",
          fontSize: "16px",
          lineHeight: "20px",
          fontWeight: "400",
          textTransform: "capitalize",
          minHeight: "40px",
          padding: "8px 0",
          minWidth: "auto",
          "&.Mui-selected": {
            fontWeight: "500",
          },
        },
      },
    },
    MuiStack: {
      styleOverrides: {
        root: {
          overflow: "visible !important",
        },
      },
    },
  },
});

export default customTheme;
