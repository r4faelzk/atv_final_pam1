import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";



const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: "black"}}>
            <DrawerContentScrollView {...props}
            contentContainerStyle={{backgroundColor: "black"}}>
                <ImageBackground source={require("../assets/imagens/ferrari2.jpg")} style={{padding: 20}}>
                    <Image  source={require("../assets/imagens/Perfil.jpg")}style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}} />
                    <Text style={{color: "#fff", fontSize: 18}}>Rafael Ferreira de Oliveira</Text>

                </ImageBackground>

                <View style={{flex: 1, backgroundColor: "black", paddingTop: 15}}>
                <DrawerItemList {...props} />
                </View>
              
            </DrawerContentScrollView>
            <View>

            </View>
        </View>

    )
}

export default CustomDrawer;