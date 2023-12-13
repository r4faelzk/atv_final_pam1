import { Image, FlatList,TextInput, SafeAreaView, Dimensions, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const { width } = Dimensions.get("screen");


//ESTRUTURA DE DADOS DE CARROS
const carros = [
    {
        codigo_produto: 1,
        nome_produto: 'Ferrari F40',
        descricao_produto: 'Carro esportivo clássico',
        valor_produto: '1.500.000,00',
        imagem_produto: require('../assets/imagens/carros/ferrari_f40.jpg'),
    },
    {
        codigo_produto: 2,
        nome_produto: 'Porsche 911 Turbo',
        descricao_produto: 'Carro esportivo clássico',
        valor_produto: '1.200.000,00',
        imagem_produto: require('../assets/imagens/carros/porsche_911_turbo.jpg'),
    },
    {
        codigo_produto: 3,
        nome_produto: 'Lamborghini Countach',
        descricao_produto: 'Carro esportivo clássico',
        valor_produto: '1.800.000,00',
        imagem_produto: require('../assets/imagens/carros/lamborghini_countach.jpg'),
    },
    {
        codigo_produto: 4,
        nome_produto: 'Chevrolet Camaro SS',
        descricao_produto: 'Carro esportivo',
        valor_produto: '600.000,00',
        imagem_produto: require('../assets/imagens/carros/chevrolet_camaro_ss.jpg'),
    },
    {
        codigo_produto: 5,
        nome_produto: 'Ford Mustang Mach 1',
        descricao_produto: 'Carro esportivo clássico',
        valor_produto: '1.350.000,00',
        imagem_produto: require('../assets/imagens/carros/ford_mustang_mach_1.jpg'),
    },
    {
        codigo_produto: 6,
        nome_produto: 'Audi R8',
        descricao_produto: 'Carro esportivo',
        valor_produto: '1.100.000,00',
        imagem_produto: require('../assets/imagens/carros/audi_r8.jpg'),
    },

    {
        codigo_produto: 7,
        nome_produto: 'Bugatti Veyron',
        descricao_produto: 'Carro esportivo de alta performance',
        valor_produto: '2.500.000,00',
        imagem_produto: require('../assets/imagens/carros/bugatti_veyron.jpg'),
    },
    {
        codigo_produto: 8,
        nome_produto: 'McLaren P1',
        descricao_produto: 'Carro esportivo híbrido',
        valor_produto: '2.700.000,00',
        imagem_produto: require('../assets/imagens/carros/mclaren_p1.jpg'),
    },
    {
        codigo_produto: 9,
        nome_produto: 'Ferrari LaFerrari',
        descricao_produto: 'Carro esportivo híbrido',
        valor_produto: '2.800.000,00',
        imagem_produto: require('../assets/imagens/carros/ferrari_laferrari.jpg'),
    },
    {
        codigo_produto: 10,
        nome_produto: 'Tesla Roadster',
        descricao_produto: 'Carro esportivo elétrico',
        valor_produto: '1.500.000,00',
        imagem_produto: require('../assets/imagens/carros/tesla_roadster.jpg'),
    },
    {
        codigo_produto: 11,
        nome_produto: 'Koenigsegg Jesko',
        descricao_produto: 'Carro esportivo de alta performance',
        valor_produto: '3.000.000,00',
        imagem_produto: require('../assets/imagens/carros/koenigsegg_jesko.jpg'),
    },
    {
        codigo_produto: 12,
        nome_produto: 'Pagani Huayra',
        descricao_produto: 'Carro esportivo exclusivo',
        valor_produto: '2.900.000,00',
        imagem_produto: require('../assets/imagens/carros/pagani_huayra.jpg'),
    },
    {
        codigo_produto: 13,
        nome_produto: 'Lotus Evija',
        descricao_produto: 'Carro esportivo elétrico',
        valor_produto: '3.200.000,00',
        imagem_produto: require('../assets/imagens/carros/lotus_evija.jpg'),
    },
    {
        codigo_produto: 14,
        nome_produto: 'Aston Martin Vulcan',
        descricao_produto: 'Carro esportivo de pista',
        valor_produto: '3.500.000,00',
        imagem_produto: require('../assets/imagens/carros/aston_martin_vulcan.jpg'),
    },
    {
        codigo_produto: 15,
        nome_produto: 'Rolls-Royce Sweptail',
        descricao_produto: 'Carro de luxo personalizado',
        valor_produto: '13.000.000,00',
        imagem_produto: require('../assets/imagens/carros/rolls_royce_sweptail.jpg'),
    },

    {
        codigo_produto: 16,
        nome_produto: 'Maserati GranTurismo',
        descricao_produto: 'Carro esportivo de luxo',
        valor_produto: '1.800.000,00',
        imagem_produto: require('../assets/imagens/carros/maserati_granturismo.jpg'),
    },
    {
        codigo_produto: 17,
        nome_produto: 'Acura NSX',
        descricao_produto: 'Carro esportivo moderno',
        valor_produto: '1.300.000,00',
        imagem_produto: require('../assets/imagens/carros/acura_nsx.jpg'),
    },
    {
        codigo_produto: 18,
        nome_produto: 'BMW i8',
        descricao_produto: 'Carro esportivo híbrido',
        valor_produto: '1.600.000,00',
        imagem_produto: require('../assets/imagens/carros/bmw_i8.jpg'),
    },
    {
        codigo_produto: 19,
        nome_produto: 'Jaguar F-Type',
        descricao_produto: 'Carro esportivo elegante',
        valor_produto: '1.400.000,00',
        imagem_produto: require('../assets/imagens/carros/jaguar_f_type.jpg'),
    },
    {
        codigo_produto: 20,
        nome_produto: 'Alfa Romeo 4C',
        descricao_produto: 'Carro esportivo compacto',
        valor_produto: '1.200.000,00',
        imagem_produto: require('../assets/imagens/carros/alfa_romeo_4c.jpg'),
    },
    {
        codigo_produto: 21,
        nome_produto: 'Nissan GT-R',
        descricao_produto: 'Carro esportivo de alta performance',
        valor_produto: '1.500.000,00',
        imagem_produto: require('../assets/imagens/carros/nissan_gt_r.jpg'),
    },
];

//COMPONENTE DE ITEM DE RENDERIZAÇÃO
const carItem = ({ item }) => {
    return (
        <View style={styles.car_container}>

            <Image
                style={styles.car_image}
                source={item.imagem_produto}
            />


            <View style={styles.car_text_container}>

                <Text style={styles.car_data}>{item.nome_produto}</Text>

                <Text style={styles.car_descricao}>{item.descricao_produto}</Text>

                <Text style={styles.car_data}>{item.valor_produto}</Text>

                <TouchableOpacity style={styles.car_button_details} onPress={()=>{
                    navigation.navigate("DetailCars")
                }}>
                    <Text style={styles.car_button_text}>Detalhes</Text>
                </TouchableOpacity>


            </View>

        </View>
    )
}

export default function FeedCars({navigation}) {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.search}>
                <View style={styles.inputContainer}>
                    <Ionicons name="search" size={25} color={"gray"} />
                    <TextInput placeholder="Pesquise por carros" style={{ paddingLeft: 20 }} placeholderTextColor={"gray"}></TextInput>
                </View>
            </View>

            <FlatList
                data={carros}
                renderItem={carItem}
                ListEmptyComponent={<Text>A LISTA DE CARROS ESTÁ VAZIA</Text>}
                keyExtractor={carros => carros.codigo_produto}

            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#171717',
        alignItems: 'center',
        justifyContent: 'center',
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

    car_container: {
        flex: 1,
        flexDirection: 'collum',
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#1c1c1c",
        marginBottom: 10,
        backgroundColor: '#2c2c2c',
    },
    car_image: {
        width: "100%",
        height: 220,
        marginRight: 10,
        marginBottom: 10,
    },
    car_text_container: {
        width: width - 50,
        justifyContent: 'center',
    },
    car_data: {
        fontSize: 16,
        fontWeight: '600',
        width: '100%',
        textAlign: 'left',
        color: 'white',
    },
    car_descricao: {
        fontSize: 14,
        fontWeight: '400',
        width: '100%',
        textAlign: 'left',
        color: '#CCC',
        marginBottom: 10,
    },
    car_button_details: {
        alignItems: 'center',
        backgroundColor: '#c82323',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        width: '100%',
    },
    car_button_text: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
