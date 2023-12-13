import { Image, FlatList, TextInput, SafeAreaView, Dimensions, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const { width } = Dimensions.get("screen");

const categoriaCarros = [
  {
    codigo_categoria: 1,
    nome_categoria: 'Clássicos',
    observacoes_categoria: 'Carros esportivos clássicos e atemporais',
    imagem_categoria: require('../assets/imagens/carros/ferrari_f40.jpg'),
  },
  {
    codigo_categoria: 2,
    nome_categoria: 'Esportivos',
    observacoes_categoria: 'Carros esportivos modernos e potentes',
    imagem_categoria: require('../assets/imagens/carros/audi_r8.jpg'),
  },
  {
    codigo_categoria: 3,
    nome_categoria: 'Híbridos e Elétricos',
    observacoes_categoria: 'Carros esportivos com tecnologia híbrida ou elétrica',
    imagem_categoria: require('../assets/imagens/carros/tesla_roadster.jpg'),
  },
  {
    codigo_categoria: 4,
    nome_categoria: 'SUVs',
    observacoes_categoria: 'Carros utilitários esportivos para famílias',
    imagem_categoria: require('../assets/imagens/carros/porsche_cayenne.jpg'),
  },
  {
    codigo_categoria: 5,
    nome_categoria: 'Conversíveis',
    observacoes_categoria: 'Carros com teto conversível para uma experiência ao ar livre',
    imagem_categoria: require('../assets/imagens/carros/mazda-mx5.jpg'),
  },


];

const categoriaItem = ({ item }) => {
  return (
    <View style={styles.categoriaContainer}>

      <Image
        style={styles.imageContainer}
        source={item.imagem_categoria}
      />

      <View style={styles.categoria_text}>

        <Text style={styles.categoria_data}>{item.nome_categoria}</Text>

        <Text style={styles.categoria_descricao}>{item.observacoes_categoria}</Text>


        <TouchableOpacity style={styles.car_button_details}>
          <Text style={styles.car_button_text}>Detalhes</Text>
        </TouchableOpacity>


      </View>
    </View>
  )
}

export default function DetailCars({navigation}) {
  return (
    <SafeAreaView style={styles.container}>

        <View style={styles.search}>
            <View style={styles.inputContainer}>
                <Ionicons name="search" size={25} color={"gray"} />
                <TextInput placeholder="Pesquise por carros" style={{ paddingLeft: 20 }} placeholderTextColor={"gray"}></TextInput>
            </View>
        </View>

        <FlatList
            data={categoriaCarros}
            renderItem={categoriaItem}
            ListEmptyComponent={<Text>A LISTA DE CARROS ESTÁ VAZIA</Text>}
            keyExtractor={categoriaCarros => categoriaCarros.codigo_categoria}

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

  categoriaContainer: {
      flex: 1,
      flexDirection: 'collum',
      padding: 10,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: 'gray',
      marginBottom: 10,
      backgroundColor: '#2c2c2c',
  },
  imageContainer: {
      width: "100%",
      height: 220,
      marginRight: 10,
      marginBottom: 10,
  },
  categoria_text: {
      width: width - 50,
      justifyContent: 'center',
  },
  categoria_data: {
      fontSize: 16,
      fontWeight: '600',
      width: '100%',
      textAlign: 'left',
      color: 'white',
  },
  categoria_descricao: {
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
