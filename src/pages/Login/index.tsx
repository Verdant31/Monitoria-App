//React native
import { Image, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-elements';
//Styles
import { styles } from './styles'
//Components
import { useAuth } from '../../contexts/AuthContext';
import { useState } from 'react';

const Login = () => {
  const [ matricula, setMatricula ] = useState<string>('')
  const [ senha, setSenha ] = useState<string>('')

  const { signIn } = useAuth();
  return (
    <View style={styles.container}> 
      <SafeAreaView >
        <View>
          <Image style={styles.logo} resizeMode='contain' source={require('../../../assets/uplogo.png')} />
        </View>
        <View>
          <Text style={styles.inputLabel}>Matricula</Text>
          <TextInput onChangeText={setMatricula} style={styles.inputField} placeholder="Entre com sua matrícula" placeholderTextColor='#555555' />
          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput onChangeText={setSenha} style={styles.inputField} placeholder="Entre com sua senha" placeholderTextColor='#555555' />
        </View>
        <Button onPress={() => signIn(matricula, senha)} style={{marginTop: 20}} title="Entrar" />
      </SafeAreaView>
    </View>
  )
}

export default Login