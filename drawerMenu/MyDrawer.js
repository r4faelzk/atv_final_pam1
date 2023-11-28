import {
    createDrawerNavigator,
} from '@react-navigation/drawer'

//IMPORTACAO DAS TELAS NAVEGAVEIS DO DRAWERMENU
import FeedCars from '../screens/FeedCars';
import Home from '../screens/Home';
import TelaDrawer1 from '../screens/TelaDrawer1';
import TelaDrawer2 from '../screens/TelaDrawer2';
import Configuracoes from '../screens/Configuracoes';

//CRIAÇÃO DO DRAWER NAVIGATOR
const Drawer = createDrawerNavigator();

export default function MyDrawer() {
    return (
        <Drawer.Navigator
        initialRouteName='Home'
        >
            <Drawer.Screen
                name='Home'
                component={Home}
                options={
                    {
                        title: "Página inicial",
                        headerTitleStyle: {color: "transparent"},
                        headerShown: false
                    }
                }
            />

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

            <Drawer.Screen
                name='TelaDrawer1'
                component={TelaDrawer1}
                options={
                    {
                        title: "Tela 1",
                        headerTitleStyle: { color: 'transparent' }
                    }
                }
            />

            <Drawer.Screen
                name='TelaDrawer2'
                component={TelaDrawer2}
                options={
                    {
                        title: "Tela 2",
                        headerTitleStyle: { color: 'transparent' }
                    }
                }
            />

            <Drawer.Screen
                name='Configuracoes'
                component={Configuracoes}
                options={
                    {
                        title: "Tela 3",
                        headerTitleStyle: { color: 'transparent' }
                    }
                }
            />

        </Drawer.Navigator>
    );
}
