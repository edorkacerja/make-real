import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface OptionPanelState {
    themeStyle: string;
    cssLibrary: string;
    layoutStyle: string;
    responsiveDesign: string;
    navbarLocation: string;
    typography: string;
    jsFramework: string;
    isPanelOpen: boolean;
}

const initialState: OptionPanelState = {
    themeStyle: 'light',
    cssLibrary: 'tailwind',
    layoutStyle: 'flexbox',
    responsiveDesign: 'responsive',
    navbarLocation: 'top',
    typography: 'Roboto Condensed',
    jsFramework: 'jQuery',
    isPanelOpen: false,
};

const optionPanelSlice = createSlice({
    name: 'optionPanel',
    initialState,
    reducers: {
        setThemeStyle: (state, action: PayloadAction<string>) => {
            console.log("theme style updated", action.payload)

            state.themeStyle = action.payload;
        },
        setCssLibrary: (state, action: PayloadAction<string>) => {
            console.log("css library updated", action.payload)
            state.cssLibrary = action.payload;
        },
        setLayoutStyle: (state, action: PayloadAction<string>) => {
            state.layoutStyle = action.payload;
        },
        setResponsiveDesign: (state, action: PayloadAction<string>) => {
            state.responsiveDesign = action.payload;
        },
        setNavbarLocation: (state, action: PayloadAction<string>) => {
            state.navbarLocation = action.payload;
        },
        setTypography: (state, action: PayloadAction<string>) => {
            state.typography = action.payload;
        },
        setJsFramework: (state, action: PayloadAction<string>) => {
            state.jsFramework = action.payload;
        },
        togglePanel: (state) => {
            state.isPanelOpen = !state.isPanelOpen;
        },
    },
});

export const {
    setThemeStyle, setCssLibrary, setLayoutStyle,
    setResponsiveDesign, setNavbarLocation,
    setTypography, setJsFramework, togglePanel
} = optionPanelSlice.actions;

export default optionPanelSlice.reducer;
