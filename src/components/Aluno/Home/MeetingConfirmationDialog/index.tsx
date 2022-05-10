import {useEffect, useState} from 'react';
import { Dimensions, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Button as ButtonPaper, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';
import { styles } from './styles';
//React navigation
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../pages/RootStackParams';

interface DialogProps {
  isOpen: boolean;
  closeModal: () => void;
}

const MeetingConfirmationDialog = ({isOpen, closeModal}: DialogProps) => {

  return (
    <Provider>
      <View style={{height: Dimensions.get('window').height}}>
        <Portal>
          <Dialog visible={isOpen} dismissable>
            <Dialog.Title>Confirmação</Dialog.Title>
            <Dialog.Content>
              <Paragraph>
                Confirme os dados da sua solicitação de monitoria.
              </Paragraph>
              <Paragraph>
                Monitor: João Pedro Pivoesan
              </Paragraph>
              <Paragraph>
                Disciplina: Sistemas Inteligentes Avançados
              </Paragraph>
              <Paragraph>
                Horário: 16:00 do dia 18/05/2022 - Bloco Vermelho
              </Paragraph>
              <View style={styles.buttonsContainer}>
                <Button title="Confirmar" />
              </View>
            </Dialog.Content>
            <Dialog.Actions>
              <ButtonPaper color={'black'} onPress={closeModal}>Sair</ButtonPaper>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </Provider>
  )
}

export default MeetingConfirmationDialog;