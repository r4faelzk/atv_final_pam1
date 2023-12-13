import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

// DEFINIÇÃO DO COMPONENTE CUSTOMDRAWER
const CustomDrawer = (props) => {
    return (
        // CONTÊINER PRINCIPAL PARA O DRAWER
        <View style={{ flex: 1, backgroundColor: "black"}}>
            {/* SCROLLVIEW PARA O CONTEÚDO DO DRAWER */}
            <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: "black"}}>
                {/* IMAGEM DE FUNDO COM PADDING */}
                <ImageBackground source={require("../assets/imagens/ferrari2.jpg")} style={{padding: 20}}>
                    {/* IMAGEM DO PERFIL DO USUÁRIO */}
                    <Image source={require("../assets/imagens/Perfil.jpg")} style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}} />
                    {/* NOME DO USUÁRIO */}
                    <Text style={{color: "#fff", fontSize: 18}}>Rafael Ferreira de Oliveira</Text>
                </ImageBackground>

                {/* CONTÊINER PARA O RESTANTE DOS ITENS DO DRAWER */}
                <View style={{flex: 1, backgroundColor: "black", paddingTop: 15}}>
                    {/* ITENS DO DRAWER */}
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
        </View>
    );
}

// EXPORTA O COMPONENTE CUSTOMDRAWER
export default CustomDrawer;
