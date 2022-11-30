import { Dimensions, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Button as ButtonPaper, Paragraph, Dialog, Portal, Provider, Text } from 'react-native-paper';
import { styles } from './styles';
//React navigation
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../pages/RootStackParams';
import { useNavigation } from '@react-navigation/native';
import { api } from '../../../../services/axios';
interface DialogProps {
  isOpen: boolean;
  closeModal: () => void;
  data: {
    horario: string;
    disciplina: string;
    monitor: string;
    dia: string[];
    idMonitoria: string;
  }
}

type AlunoProps = NativeStackNavigationProp<RootStackParamList, 'Aluno'>;

const ConfirmarReuniaoDialog = ({isOpen, closeModal, data}: DialogProps) => {
  const navigation = useNavigation<AlunoProps>();
  const handleConfirmacaoAgendamento = async () => {
    console.log(data)
    await api.post('/aluno/agendar/monitoria/', {
        horario: data.horario, 
        data: [ data.dia[0], data.dia[1], data.dia[2] ].join('/'),
        id_monitoria: data.idMonitoria
    }).then(() => {
      navigation.navigate("Aluno")
    })
  }

  return (
    <Provider>
      <View style={{height: Dimensions.get('window').height}}>
        <Portal>
          <Dialog visible={isOpen} dismissable>
            <Dialog.Title>Confirmação</Dialog.Title>
            <Dialog.Content>
              <Paragraph style={{fontSize: 21}}>
                Confirme os dados da sua solicitação de monitoria.
              </Paragraph>
              <Paragraph style={{fontSize: 21, marginVertical: 10}}>
                <Text style={{fontWeight: 'bold'}}>Monitor:</Text> {data.monitor}
              </Paragraph>
              <Paragraph style={{fontSize: 21, marginBottom: 10}}>
              <Text style={{fontWeight: 'bold'}}>Disciplina:</Text> {data.disciplina}
              </Paragraph>
              <Paragraph style={{fontSize: 21, marginBottom: 10}}>
              <Text style={{fontWeight: 'bold'}}>Horário:</Text>  {data.horario} do dia {[ data.dia[0], data.dia[1], data.dia[2] ].join('/')}
              </Paragraph>
              <View style={styles.buttonsContainer}>
                <Button title="Confirmar" onPress={handleConfirmacaoAgendamento}/>
              </View>
            </Dialog.Content>
            <Dialog.Actions>
              <ButtonPaper color={'white'} onPress={closeModal}>Sair</ButtonPaper>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </Provider>
  )
}

export default ConfirmarReuniaoDialog;