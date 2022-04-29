//React native
import { Image, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-elements';
//Styles
import { styles } from './styles'
//Components
import Input from '../../components/Login/Input/Input';
//React navigation
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../RootStackParams';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/AuthContext';

type LoginScreenProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const Login = () => {
  const { signIn } = useAuth();
  const navigation = useNavigation<LoginScreenProp>()

  return (
    <View style={styles.container}> 
      <SafeAreaView >
        <View>
          <Image style={styles.logo} resizeMode='contain' source={require('../../../assets/uplogo.png')} />
        </View>
        <Input title="Matrícula" placeHolder='Entre com sua matrícula' />
        <Input title="Senha" placeHolder='Entre com sua senha' />
        <Button style={{marginTop: 20}} title="Entrar" />
      </SafeAreaView>
    </View>
  )
}

export default Login