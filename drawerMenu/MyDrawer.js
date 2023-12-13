import { createDrawerNavigator } from '@react-navigation/drawer';

// IMPORTAÇÃO DAS TELAS NAVEGÁVEIS DO DRAWERMENU
import FeedCars from '../screens/FeedCars';
import Home from '../screens/Home';
import Configuracoes from '../screens/Configuracoes';
import DetailCars from '../screens/DetailCars';
import CustomDrawer from '../consts/CustomDrawer';

// CRIAÇÃO DO DRAWER NAVIGATOR
const Drawer = createDrawerNavigator();

export default function MyDrawer() {
    return (
        // NAVEGADOR DE DRAWER COM OPÇÕES INICIAIS E ESTILOS
        <Drawer.Navigator
            initialRouteName='Home'
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                drawerActiveBackgroundColor: "#c82323",
                drawerLabelStyle: {
                    color: "#fff",
                    fontSize: 15
                }
            }}
        >
            {/* TELA PRINCIPAL - HOME */}
            <Drawer.Screen
                name='Home'
                component={Home}
                options={
                    {
                        title: "Página inicial",
                        headerTitleStyle: { color: "transparent" },
                        headerShown: false
                    }
                }
            />

            {/* TELA DE PRODUTOS*/}
            <Drawer.Screen
                name='FeedCars'
                component={FeedCars}
                options={
                    {
                        title: "Carros à venda",
                        headerTitleStyle: { color: 'transparent' },
                        headerShown: false
                    }
                }
            />

            {/* TELA DE CATEGORIA DE CARROS */}
            <Drawer.Screen
                name='DetailCars'
                component={DetailCars}
                options={
                    {
                        title: "Categoria de carros",
                        headerTitleStyle: { color: 'transparent' },
                        headerShown: false
                    }
                }
            />

            {/* TELA DE CONFIGURAÇÕES */}
            <Drawer.Screen
                name='Configuracoes'
                component={Configuracoes}
                options={
                    {
                        title: "Configurações",
                        headerTitleStyle: { color: 'transparent' },
                        headerStyle: {
                            backgroundColor: "#171717"
                        }
                    }
                }
            />
        </Drawer.Navigator>
    );
}
