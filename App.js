import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./Login";
import CreateUser from "./CreateUser";
import DetailBook from "./DetailBook";
import FeedBook from "./FeedBook";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login"
          component={Login}
          options={{title: "Login"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}