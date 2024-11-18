import { PaletteOptions } from "@mui/material/styles";
import palette from "./palette.json"


const darkPalette: PaletteOptions = {
    mode: 'dark',
    background:{
        default: "rgb(20,20,20)",
        paper: "rgb(0,8,24)",
    },
    primary: {
        main: palette.primary?.dark,
        light: palette.primary?.light,
        dark: palette.primary?.dark,
        contrastText: palette.primary?.contrastText
      },
      secondary: {
        main: palette.secondary?.dark,
        light: palette.secondary?.light,
        dark: palette.secondary?.dark,
        contrastText: palette.secondary?.contrastText
      },
      error: {
        main: palette.error?.dark,
        light: palette.error?.light,
        dark: palette.error?.dark,
        contrastText: palette.error?.contrastText
      },
      warning: {
        main: palette.warning?.dark,
        light: palette.warning?.light,
        dark: palette.warning?.dark,
        contrastText: palette.warning?.contrastText
      },
      info: {
        main: palette.info?.dark,
        light: palette.info?.light,
        dark: palette.info?.dark,
        contrastText: palette.info?.contrastText
      },
      success: {
        main: palette.success?.dark,
        light: palette.success?.light,
        dark: palette.success?.dark,
        contrastText: palette.success?.contrastText
      },
      text: {
        primary: palette.primary?.dark,
        secondary: palette.secondary?.dark,
        disabled: palette.text?.disabled
      }
}

export default darkPalette;