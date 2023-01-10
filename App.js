import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContentDataProvider from "./context/ContentData";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import AppDataProvider from "./context/AppData";
import GlossaryScreen from "./screens/GlossaryScreen";
import ContactUsScreen from "./screens/ContactUsScreen";
import MoreInfoScreen from "./screens/MoreInfoScreen";
import CreditsScreen from "./screens/CreditsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <AppDataProvider>
            <ContentDataProvider>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen
                            name='Welcome'
                            component={WelcomeScreen}
                        />
                        <Stack.Screen name='Login' component={LoginScreen} />
                        <Stack.Screen name='Home' component={HomeScreen} />
                        <Stack.Screen
                            name='Glossary'
                            component={GlossaryScreen}
                        />
                        <Stack.Screen
                            name='ContactUs'
                            component={ContactUsScreen}
                        />
                        <Stack.Screen
                            name='MoreInfo'
                            component={MoreInfoScreen}
                        />
                        <Stack.Screen
                            name='Credits'
                            component={CreditsScreen}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </ContentDataProvider>
        </AppDataProvider>
    );
}
