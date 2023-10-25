import { StyleSheet, Text, SafeAreaView, Image, View, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CreateUser({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topo}>
        <Image style={styles.login} source={require("../assets/imagens/registration.png")}/>
      </View>

      <Text style={styles.texto}>Novo usuário?</Text>

      <View style={styles.containerTextInput}>
        <Ionicons name='mail' size={25} color={'#3480EB'} />
        <TextInput style={styles.textInput} placeholder='E-mail' keyboardType='email-address' />
      </View>

      <View style={styles.containerTextInput}>
        <Ionicons name='key' size={25} color={'#3480EB'} />
        <TextInput style={styles.textInput} placeholder='Senha' secureTextEntry={true} />
      </View>

      <View style={styles.containerTextInput}>
        <Ionicons name='key' size={25} color={'#3480EB'} />
        <TextInput style={styles.textInput} placeholder='Confirmar senha' secureTextEntry={true} />
      </View>

      <TouchableOpacity style={styles.btnLogin}>
        <Text style={styles.txtLogin}>
          CADASTRAR
        </Text>
      </TouchableOpacity>

      <View style={styles.containerLoginBack}>
        <TouchableOpacity onPress={() => {
          navigation.navigate("Login");
        }}>
          <Text style={styles.btnRegister}>Já tem uma conta? Entre</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 16
  },
  topo: {
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 15
  },
  login: {
    width: 324,
    height: 287
  },
  texto: {
    fontSize: 28,
    fontWeight: '500',
    color: '#333',
    marginBottom: 30,
  },
  containerTextInput: {
    flexDirection: 'row',
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 15,
    alignItems: 'center'
  },
  textInput: {
    padding: 10
  },
  btnLogin: {
    backgroundColor: '#3480EB',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30
  },
  txtLogin: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFF'
  },
  // loginAlternative: {
  //   textAlign: 'center',
  //   color: '#666',
  //   marginBottom: 30
  // },
  containerLoginBack: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
    gap: 10
  },
  btnLoginAlternative: {
    borderColor: '#DDD',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10
  },
  btnRegister: {
    color: '#3480EB',
    fontWeight: '600',
    fontSize: 14
  }
});