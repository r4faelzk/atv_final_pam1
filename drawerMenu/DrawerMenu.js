import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer'


import MyDrawer from "./MyDrawer";

export default function DrawerMenu() {
    return (
        <MyDrawer />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#171717',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
