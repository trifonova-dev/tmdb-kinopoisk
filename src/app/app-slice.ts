import { createSlice } from "@reduxjs/toolkit"

export const getInitialThemeMode = (): ThemeMode => {
  const savedThemeMode = localStorage.getItem("themeMode")
  if (savedThemeMode === "light") {
    return "light"
  }
  return "dark"
}

export const appSlice = createSlice({
  name: "app",
  initialState: { themeMode: getInitialThemeMode() },
  selectors: {
    selectThemeMode: (state) => state.themeMode,
  },
  reducers: (create) => ({
    changeThemeModeAC: create.reducer<{ themeMode: ThemeMode }>((state, action) => {
      state.themeMode = action.payload.themeMode
    }),
  }),
})

export const { selectThemeMode } = appSlice.selectors
export const appReducer = appSlice.reducer
export const { changeThemeModeAC } = appSlice.actions

export type ThemeMode = "dark" | "light"
