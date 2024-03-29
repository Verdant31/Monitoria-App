//React native
import { Image, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-elements';
//Styles
import { styles } from './styles'
//Components
import { useAuth } from '../../contexts/AuthContext';
import { useState } from 'react';
//React navigation
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../RootStackParams';
import { useNavigation } from '@react-navigation/native';
import ConfirmacaoDeRotaDialog from '../../components/Login/ConfirmacaoDeRotaDialog';

type AuthContextProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;


const Login = () => {
  const [ matricula, setMatricula ] = useState<string>('')
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ senha, setSenha ] = useState<string>('')
  const [ hasError, setHasError ] = useState(false);
  const navigation = useNavigation<AuthContextProps>();
  const { signIn } = useAuth();

  const closeModal = () => setIsModalOpen(false)
  const handleLogin = async () => {
    const { isMonitor, rightCredentials } =  await signIn(matricula, senha);
    setMatricula('');
    setSenha('');
    if(!rightCredentials) {
      setHasError(true)
    }else {
      if(!isMonitor) navigation.navigate('Aluno');
      if(isMonitor) setIsModalOpen(true);
    }
  }

  return (
    <>
      <View style={styles.container}> 
        <SafeAreaView >
          <View>
            <Image style={styles.logo} resizeMode='contain' source={require('../../../assets/logo.png')} />
          </View>
          <View style={{marginTop: -40}}>
            <Text style={styles.inputLabel}>Matricula</Text>
            <TextInput value={matricula} onChangeText={setMatricula} style={styles.inputField} placeholder="Entre com sua matrícula" placeholderTextColor='#555555' />
            <Text style={styles.inputLabel}>Senha</Text>
            <TextInput secureTextEntry value={senha} onChangeText={setSenha} style={styles.inputField} placeholder="Entre com sua senha" placeholderTextColor='#555555' />
          </View>
          {hasError && (
            <View>
              <Text style={styles.errorMessage}>Usuário ou senha incorretos.</Text>
            </View>
          )}
          <Button onPress={() => handleLogin()} style={{marginTop: 20}} title="Entrar" />
        </SafeAreaView>
      </View>
      <ConfirmacaoDeRotaDialog isOpen={isModalOpen} closeModal={closeModal} />
    </>
  )
}

export default Login