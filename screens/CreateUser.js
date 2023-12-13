
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, Image, View, TextInput } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

// COMPONENTE DE CADASTRO
export default function CreateUser({navigation}) {
    return (
        <SafeAreaView style={styles.container}>

            {/* SEÇÃO SUPERIOR COM IMAGEM */}
            <View style={styles.top}>
                <Image style={styles.imagem} source={require("../assets/imagens/login.png")} />
            </View>

            {/* TÍTULO */}
            <Text style={styles.texto}>Fazer cadastro</Text>

            {/* CAMPO DE E-MAIL */}
            <View style={styles.containerTextInput}>
                <Ionicons name="mail" size={25} color={"#171717"} marginLeft={20} />
                <TextInput style={styles.textInput} placeholder="Insira seu e-mail" placeholderTextColor={"#171717"} keyboardType="email-address" />
            </View>

            {/* CAMPO DE SENHA */}
            <View style={styles.containerTextInput}>
                <Ionicons name="key" size={25} color={"#171717"} marginLeft={20} />
                <TextInput style={styles.textInput} placeholder="Digite sua senha" placeholderTextColor={"#171717"} secureTextEntry={true} />
            </View>

            {/* CAMPO DE SENHA */}
            <View style={styles.containerTextInput}>
                <Ionicons name="key" size={25} color={"#171717"} marginLeft={20} />
                <TextInput style={styles.textInput} placeholder="Confirmar senha" placeholderTextColor={"#171717"} secureTextEntry={true} />
            </View>

            {/* BOTÃO DE CADASTRO */}
            <TouchableOpacity style={styles.btnLogin}>
                <Text style={styles.txtLogin}
                    onPress={() => {
                        navigation.navigate('DrawerMenu');
                    }}>
                    CADASTRAR
                </Text>
            </TouchableOpacity>

            {/* LINK PARA ENTRAR (SE JÁ TIVER CONTA) */}
            <View style={styles.containerCreateUser}>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("Login");
                }}>
                    <Text style={styles.btnRegistrar}>Já possui conta? <Text style={styles.span}>Entrar</Text></Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

// ESTILOS
const styles = StyleSheet.create({
    // CONTÊINER PRINCIPAL
    container: {
        flex: 1,
        backgroundColor: "#171717",
        padding: 16
    },

    // SEÇÃO SUPERIOR
    top: {
        alignItems: "center",
        marginTop: 70,
    },

    // IMAGEM
    imagem: {
        width: 320,
        height: 220,
    },

    // TÍTULO
    texto: {
        fontSize: 30,
        fontWeight: "900",
        color: "white",
        marginTop: 30,
        marginBottom: 20,
        textAlign: "center"
    },

    // CONTAINER PARA CAMPO DE TEXTO
    containerTextInput: {
        flexDirection: 'row',
        paddingBottom: 8,
        marginBottom: 25,
        alignItems: "center",
        backgroundColor: "gray",
        borderWidth: 1,
        borderRadius: 10
    },

    // CAMPO DE TEXTO
    textInput: {
        padding: 10
    },

    // BOTÃO DE CADASTRO
    btnLogin: {
        backgroundColor: "#c82323",
        padding: 15,
        marginTop: 10,
        marginBottom: 15
    },

    // TEXTO DO BOTÃO
    txtLogin:{
        textAlign: "center",
        fontWeight: "600",
        fontSize: 16,
        color: "white"
    },

    // CONTAINER PARA LINK DE ENTRAR
    containerCreateUser:{
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10
    },

    // LINK DE ENTRAR
    btnRegistrar: {
        color: 'white',
        fontWeight: '600',
        fontSize: 14
    },

    // DESTAQUE DO LINK
    span:{
        color: "#c82323",
        fontWeight: "bold",
    }
});



