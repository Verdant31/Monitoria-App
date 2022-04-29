//React native
import { Image, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-elements';
//Styles
import { styles } from './styles'

interface InputProps {
  title: string;
  placeHolder: string;
}

const Input = ({title, placeHolder}: InputProps) => {
  return (
    <View>
      <Text style={styles.inputLabel}>{title}</Text>
      <TextInput 
        style={styles.inputField}
        placeholder={placeHolder}
        placeholderTextColor='#555555'
      />
    </View>
  )
}

export default Input