import { StyleSheet, Text, SafeAreaView, TouchableOpacity, Image, View, TextInput } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CreateUser({navigation}) {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.top}>
                <Image style={styles.imagem} source={require("../assets/imagens/login.png")} />
            </View>

            <Text style={styles.texto}>Fazer login</Text>

            <View style={styles.containerTextInput}>
                <Ionicons name="mail" size={25} color={"#171717"} marginLeft={20} />
                <TextInput style={styles.textInput} placeholder="Insira seu e-mail" placeholderTextColor={"#171717"} keyboardType="email-address" />
            </View>

            <View style={styles.containerTextInput}>
                <Ionicons name="key" size={25} color={"#171717"} marginLeft={20} />
                <TextInput style={styles.textInput} placeholder="Digite sua senha" placeholderTextColor={"#171717"} secureTextEntry={true} />
            </View>

            <TouchableOpacity style={styles.btnLogin}>
                <Text style={styles.txtLogin}>
                    CADASTRAR
                </Text>
            </TouchableOpacity>




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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#171717",
        padding: 16
    },

    top: {
        alignItems: "center",
        marginTop: 70,
    },

    imagem: {
        width: 320,
        height: 220,
    },

    texto: {
        fontSize: 30,
        fontWeight: "900",
        color: "white",
        marginTop: 50,
        marginBottom: 20,
        textAlign: "center"
    },

    containerTextInput: {
        flexDirection: 'row',
        paddingBottom: 8,
        marginBottom: 25,
        alignItems: "center",
        backgroundColor: "gray",
        borderWidth: 1,
        borderRadius: 10
    },

    textInput: {
        padding: 10
    },

    btnLogin: {
        backgroundColor: "purple",
        padding: 15,
        marginTop: 10,
        marginBottom: 15
    },

    txtLogin:{
        textAlign: "center",
        fontWeight: "600",
        fontSize: 16,
        color: "white"
    },

    containerCreateUser:{
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10
    },

    btnRegistrar: {
        color: 'white',
        fontWeight: '600',
        fontSize: 14
    },

    span:{
        color: "purple",
        fontWeight: "bold",
    }


});