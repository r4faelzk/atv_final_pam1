import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, Text, Image, ScrollView, TextInput, Dimensions, Pressable, FlatList } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Cars from "../consts/Cars";
const { width } = Dimensions.get("screen");

// COMPONENTE DE PÁGINA INICIAL
export default function Home({ navigation }) {

    // OPÇÕES NA PÁGINA INICIAL
    const optionList = [
        { title: "Comprar um carro", img: require("../assets/imagens/Carro1.jpg") },
        { title: "Alugar um carro", img: require("../assets/imagens/carro2.jpg") },
    ];

    // COMPONENTE PARA LISTAR CATEGORIAS
    const ListCategories = () => {
        const categoryList = ['Populares', 'Esportivos', 'Clássicos'];
        const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

        return (
            <View style={styles.categoryListContainer}>
                {categoryList.map((category, index) => (
                    <Pressable
                        key={index}
                        onPress={() => setSelectedCategoryIndex(index)}>
                        <Text style={[
                            styles.categoryListText,
                            index == selectedCategoryIndex && styles.activeCategoryListText,
                        ]}>
                            {category}
                        </Text>
                    </Pressable>
                ))}
            </View>
        );
    };

    // COMPONENTE PARA LISTAR OPÇÕES
    const ListOptions = () => {
        return <View style={styles.optionListContainer}>
            {optionList.map((option, index) => (
                <View style={styles.optionCard}>
                    <Image source={option.img} style={styles.optionsCardImage} />
                    <Text style={{ marginTop: 10, fontSize: 15, fontWeight: '600', color: "white", textAlign: "center" }}>
                        {option.title}</Text>
                </View>
            ))}
        </View>
    };

    // COMPONENTE PARA EXIBIR UM CARRO NA LISTA
    const Card = ({ car }) => {
        return (
            <Pressable
                activeOpacity={0.8}
                onPress={() => navigation.navigate('FeedCars', car)}>
                <View style={styles.card}>
                    <Image source={car.image} style={styles.cardImage} />
                    <View style={{ marginTop: 10 }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginTop: 10,
                            }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' , color: "white"}}>
                                Lamborghini Aventador
                            </Text>
                            <Text
                                style={{ fontWeight: 'bold', color: "#c82323", fontSize: 16 }}>
                                $2.500,000
                            </Text>
                        </View>

                        <Text style={{ color: "gray", fontSize: 14, marginTop: 5 }}>
                            Estados Unidos
                        </Text>

                        <View style={{ marginTop: 10, flexDirection: 'row' }}>
                            <View style={styles.facility}>
                                <Icon name="grade" size={18} color={"yellow"} />
                                <Text style={styles.facilityText}>5</Text>
                            </View>
                            <View style={styles.facility}>
                                <Icon name="group" size={18} color={"gray"}/>
                                <Text style={styles.facilityText}>2</Text>
                            </View>
                            <View style={styles.facility}>
                                <Icon name="payments" size={18} color={"gray"}/>
                                <Text style={styles.facilityText}>100.000</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Pressable>
        );
    };

    return <SafeAreaView style={styles.container}>
        <StatusBar
            translucent={false}
            backgroundColor={"#171717"}
            barStyle={"dark-content"}
        />

        {/* CABEÇALHO */}
        <View style={styles.header}>
            <View>
                <Text style={{ color: "gray" }}>Localização</Text>
                <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>Brasil</Text>
            </View>
            <Image source={require("../assets/imagens/Perfil.jpg")} style={styles.perfil} />
        </View>

        {/* BARRA DE PESQUISA */}
        <ScrollView>
            <View style={styles.search}>
                <View style={styles.inputContainer}>
                    <Ionicons name="search" size={25} color={"gray"} />
                    <TextInput placeholder="Pesquise por carros" style={{ paddingLeft: 20 , color: "white"}} placeholderTextColor={"gray"}></TextInput>
                </View>
            </View>

            {/* CONTEÚDO DA PÁGINA */}
            <View style={styles.content}>
                <Text style={styles.title}>Bem-vindo à <Text style={{ color: "#c82323" }}>FastCar!</Text></Text>
                <Text style={styles.text}>Descubra, compre ou alugue seu carro dos sonhos com facilidade. Aqui, a paixão por automóveis se encontra com a conveniência moderna, proporcionando a você uma experiência única.</Text>
            </View>

            {/* LISTA DE OPÇÕES */}
            <ListOptions />

            {/* LISTA DE CATEGORIAS */}
            <ListCategories />

            {/* LISTA DE CARROS */}
            <FlatList
                snapToInterval={width - 20}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingLeft: 20, paddingVertical: 20 }}
                horizontal
                data={Cars}
                renderItem={({ item }) => <Card car={item} />}
            />
        </ScrollView>
    </SafeAreaView>
}

// ESTILOS
const styles = StyleSheet.create({
    // CONTÊINER PRINCIPAL
    container: {
        flex: 1,
        backgroundColor: "#171717",
    },

    // CONTEÚDO
    content: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 5
    },

    // TÍTULO
    title: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    },

    // TEXTO
    text: {
        color: "#f8f8ff",
        fontSize: 12,
        fontWeight: "300"
    },

    // CABEÇALHO
    header: {
        paddingVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20
    },

    // IMAGEM DE PERFIL
    perfil: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },

    // BARRA DE PESQUISA
    search: {
        paddingVertical: 15,
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 20,
    },

    // CONTAINER DE INPUT
    inputContainer: {
        height: 50,
        backgroundColor: "black",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        borderRadius: 10,
    },

    // CONTAINER DE OPÇÕES
    optionListContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        paddingHorizontal: 20
    },

    // CARTÃO DE OPÇÃO
    optionCard: {
        height: 170,
        width: width / 2 - 30,
        elevation: 15,
        backgroundColor: "#1c1c1c",
        alignItems: "center",
        borderRadius: 20,
        paddingTop: 10,
        paddingHorizontal: 10
    },

    // IMAGEM NO CARTÃO DE OPÇÃO
    optionsCardImage: {
        height: 110,
        width: '100%',
    },

    // TEXTO NA LISTA DE CATEGORIAS
    categoryListText: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 5,
        color: "white",
    },

    // TEXTO NA LISTA DE CATEGORIAS - ATIVO
    activeCategoryListText: {
        color: "#c82323",
        borderBottomColor: "#c82323",
        borderBottomWidth: 3,
        paddingBottom: 5,
    },

    // CONTAINER DA LISTA DE CATEGORIAS
    categoryListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        paddingHorizontal: 40,
    },

    // CARTÃO DE CARRO
    card: {
        height: 250,
        backgroundColor: "#171717",
        elevation: 10,
        width: width - 40,
        marginRight: 20,
        padding: 15,
        borderRadius: 20,
    },

    // IMAGEM NO CARTÃO DE CARRO
    cardImage: {
        width: '100%',
        height: 120,
    },

    // FACILIDADES (GRADE, GRUPO, PAGAMENTOS) NO CARTÃO DE CARRO
    facility: { flexDirection: 'row', marginRight: 15 },
    facilityText: { marginLeft: 5, color: "gray" },
});
