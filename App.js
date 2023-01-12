import AppDataProvider from "./context/AppData";
import ContentDataProvider from "./context/ContentData";
import MainContainer from "./screens/MainContainer";

export default function App() {
    return (
        <AppDataProvider>
            <ContentDataProvider>
                <MainContainer />
            </ContentDataProvider>
        </AppDataProvider>
    );
}
