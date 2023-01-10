import React, { useContext } from "react";

const BACKGROUND_COLOR = "#fff";

const PAGES = {
    HOME: "Home",
    SEARCH: "Search",
    INFO: "Info",
    PROFILE: "Profile"
};

export const AppDataContext = React.createContext();

export function useAppData() {
    return useContext(AppDataContext);
}

export default function AppDataProvider({ children }) {
    const appData = {
        PAGES,
        BACKGROUND_COLOR
    };

    return (
        <AppDataContext.Provider value={appData}>
            {children}
        </AppDataContext.Provider>
    );
}
