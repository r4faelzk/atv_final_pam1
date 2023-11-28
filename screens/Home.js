import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, Text, Image, ScrollView, TextInput, Dimensions, Pressable, FlatList } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import houses from "../consts/houses";
const { width } = Dimensions.get("screen");





export default function Home({ navigation }) {
    const optionList = [
        { title: "Comprar um carro", img: require("../assets/imagens/Carro1.jpg") },
        { title: "Alugar um carro", img: require("../assets/imagens/carro2.jpg") },
    ];

    const categoryList = ['Populares', 'Esportivos', 'Clássicos'];

    const ListCategories = () => {
        const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
        return (
            <View style={styles.categoryListContainer}>
                {categoryList.map((category, index) => (
                    <Pressable
                        key={index}
                        onPress={() => setSelectedCategoryIndex(index)}>
                        <Text
                            style={[
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


    const ListOptions = () => {
        return <View style={styles.optionListContainer}>
            {optionList.map((option, index) => (
                <View style={styles.optionCard}>
                    <Image source={option.img} style={styles.optionsCardImage} />

                    {/* Option title */}
                    <Text style={{ marginTop: 10, fontSize: 15, fontWeight: '600', color: "white", textAlign: "center" }}>
                        {option.title}</Text>
                </View>
            ))}
        </View>
    };

    const Card = ({ car }) => {
        return (
            <Pressable
                activeOpacity={0.8}
                onPress={() => navigation.navigate('DetailBook', car)}>
                <View style={styles.card}>
                    {/* House image */}
                    <Image source={require = ("../assets/imagens/carro2.jpg")} style={styles.cardImage} />
                    <View style={{ marginTop: 10 }}>
                        {/* Title and price container */}
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginTop: 10,
                            }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                                Ferrari
                            </Text>
                            <Text
                                style={{ fontWeight: 'bold', color: "blue", fontSize: 16 }}>
                                $1,500
                            </Text>
                        </View>

                        {/* Location text */}

                        <Text style={{ color: "gray", fontSize: 14, marginTop: 5 }}>
                            Brasil
                        </Text>

                        {/* Facilities container */}
                        <View style={{ marginTop: 10, flexDirection: 'row' }}>
                            <View style={styles.facility}>
                                <Icon name="hotel" size={18} />
                                <Text style={styles.facilityText}>2</Text>
                            </View>
                            <View style={styles.facility}>
                                <Icon name="bathtub" size={18} />
                                <Text style={styles.facilityText}>2</Text>
                            </View>
                            <View style={styles.facility}>
                                <Icon name="aspect-ratio" size={18} />
                                <Text style={styles.facilityText}>100m</Text>
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


        <View style={styles.header}>
            <View>
                <Text style={{ color: "gray" }}>Localização</Text>
                <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>Brasil</Text>
            </View>
            <Image source={require("../assets/imagens/Perfil.jpg")} style={styles.perfil} />
        </View>


        <ScrollView>
            <View style={styles.search}>
                <View style={styles.inputContainer}>
                    <Ionicons name="search" size={25} color={"gray"} />
                    <TextInput placeholder="Pesquise por carros" style={{ paddingLeft: 20 }} placeholderTextColor={"gray"}></TextInput>
                </View>
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>Bem-vindo à <Text style={{ color: "#c82323" }}>FastCar!</Text></Text>
                <Text style={styles.text}>Descubra, compre ou alugue seu carro dos sonhos com facilidade. Aqui, a paixão por automóveis se encontra com a conveniência moderna, proporcionando a você uma experiência única.</Text>
            </View>

            <ListOptions />

            <ListCategories />


            <FlatList
                snapToInterval={width - 20}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingLeft: 20, paddingVertical: 20 }}
                horizontal
                data={houses}
                renderItem={({ item }) => <Card house={item} />}
            />
        </ScrollView>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#171717",

    },

    content: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 5
    },

    title: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    },

    text: {
        color: "#f8f8ff",
        fontSize: 12,
        fontWeight: "300"
    },

    header: {
        paddingVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20
    },

    perfil: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },

    search: {
        paddingVertical: 15,
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 20
    },

    inputContainer: {
        height: 50,
        backgroundColor: "black",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        borderRadius: 10
    },

    optionListContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        paddingHorizontal: 20
    },

    optionCard: {
        height: 170,
        width: width / 2 - 30,
        elevation: 15,
        backgroundColor: "#1c1c1c"
    },

    optionsCardImage: {
        height: 110,
        width: '100%',
    },

    categoryListText: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 5,
        color: "gray",
    },
    activeCategoryListText: {
        color: "white",
        borderBottomWidth: 1,
        paddingBottom: 5,
    },
    categoryListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        paddingHorizontal: 40,
    },
    card: {
        height: 250,
        backgroundColor: "#171717",
        elevation: 10,
        width: width - 40,
        marginRight: 20,
        padding: 15,
        borderRadius: 20,
    },
    cardImage: {
        width: '100%',
        height: 120,
        borderRadius: 15,
    },
    facility: { flexDirection: 'row', marginRight: 15 },
    facilityText: { marginLeft: 5, color: "gray" },




})