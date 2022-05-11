import { Text, TextInput, View } from "react-native"
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from './styles';

const CriarSolicitacao = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Formulário</Text>
      <View style={styles.form}>
        <View style={styles.fieldContainer}>
          <Text style={{fontSize: 16}}>Disciplina desejada</Text>
          <TextInput  style={styles.input} placeholder="Entre com a disciplina" placeholderTextColor='#555555' />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={{fontSize: 16}}>Tem um monitor para recomendar?</Text>
          <TextInput  style={styles.input} placeholder="Entre com o nome do monitor" placeholderTextColor='#555555' />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={{fontSize: 16}}>Deseja contar o motivo da solicitação?</Text>
          <TextInput  style={styles.input} placeholder="Entre com a descrição" placeholderTextColor='#555555' />
        </View>
      </View>
      <View style={{width: '100%'}}>
        <Button onPress={() => console.log('hehe')} style={styles.updateButton} title="Enviar solicitação" />
      </View>
    </SafeAreaView>
  )
}

export default CriarSolicitacao;