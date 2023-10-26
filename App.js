// IMPORTAÇÃO 
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// IMPORTANDO AS TELAS DA PASTA SCREENS
import Login from "./screens/Login";
import CreateUser from "./screens/CreateUser";
import DrawerMenu from "./drawerMenu/DrawerMenu";
import DetailBook from "./screens/DetailBook";
import FeedBook from "./screens/FeedBook";

const Stack = createNativeStackNavigator();

export default function App() {
  return ( // RENDERIZANDO AS TELAS NAVEGÁVEIS
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: true}}>
        <Stack.Screen
          name="Login"
          component={Login} // TELA DE LOGIN EM SI
          options={{title: "LOGIN"}}
        />
        <Stack.Screen 
          name="CreateUser"
          component={CreateUser} // TELA DE CREATEUSER EM SI
          options={{title: "Cadastro"}}
        />
        <Stack.Screen 
          name="DrawerMenu"
          component={DrawerMenu} // TELA DE CREATEUSER EM SI
          options={{title: "", headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}