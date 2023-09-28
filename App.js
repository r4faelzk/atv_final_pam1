// IMPORTAÇÃO 
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/Login";
import CreateUser from "./screens/CreateUser";
import DetailBook from "./screens/DetailBook";
import FeedBook from "./screens/FeedBook";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login"
          component={Login} // TELA DE LOGIN EM SI
          options={{title: "LOGIN"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}