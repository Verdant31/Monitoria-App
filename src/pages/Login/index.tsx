//React native
import { Image, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-elements';
//Styles
import { styles } from './styles'
//Components
import Input from '../../components/Login/Input/Input';
import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
  const { signIn } = useAuth();
  const handleSignIn = () => {
    signIn('0113', '321')
  }
  return (
    <View style={styles.container}> 
      <SafeAreaView >
        <View>
          <Image style={styles.logo} resizeMode='contain' source={require('../../../assets/uplogo.png')} />
        </View>
        <Input title="Matrícula" placeHolder='Entre com sua matrícula' />
        <Input title="Senha" placeHolder='Entre com sua senha' />
        <Button onPress={() => handleSignIn()} style={{marginTop: 20}} title="Entrar" />
      </SafeAreaView>
    </View>
  )
}

export default Login