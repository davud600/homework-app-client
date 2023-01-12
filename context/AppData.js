import React, { useContext } from "react";

const BACKGROUND_COLOR = "#fff";

const PAGES = {
    HOME: "Home",
    SEARCH: "Search",
    TASKS: "Tasks",
    INFO: "Info",
    PROFILE: "Profile"
};

const INFO_PAGES = {
    GLOSSARY: "Glossary",
    CONTACT_US: "Contact us",
    MORE_INFO: "More info",
    CREDITS: "Credits"
};

export const AppDataContext = React.createContext();

export function useAppData() {
    return useContext(AppDataContext);
}

export default function AppDataProvider({ children }) {
    const appData = {
        PAGES,
        INFO_PAGES,
        BACKGROUND_COLOR
    };

    return (
        <AppDataContext.Provider value={appData}>
            {children}
        </AppDataContext.Provider>
    );
}
