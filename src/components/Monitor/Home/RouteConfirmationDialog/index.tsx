import {useEffect, useState} from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { Button as ButtonPaper, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';
import { styles } from './styles';
//React navigation
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../pages/RootStackParams';
import { useNavigation } from '@react-navigation/native';

type AuthContextProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;


interface DialogProps {
  isOpen: boolean;
  closeModal: () => void;
}

const RouteConfirmationDialog = ({isOpen, closeModal}: DialogProps) => {
  const navigation = useNavigation<AuthContextProps>();
  const handleRedirect = (path: string) => {
    if(path === 'Monitor') navigation.navigate('Monitor')
    if(path === 'Aluno') navigation.navigate('Aluno')
    closeModal();
  }

  return (
    <Provider>
      <View>
        <Portal>
          <Dialog visible={isOpen} dismissable>
            <Dialog.Title>Confirmação</Dialog.Title>
            <Dialog.Content>
              <Paragraph>
                Olá! Verificamos que você além de aluno também é monitor. Deseja acessar a plataforma
                de alunos ou de monitores?
              </Paragraph>
              <View style={styles.buttonsContainer}>
                <Button onPress={() => handleRedirect('Monitor')} style={{marginBottom: 10}} title="Monitor" />
                <Button onPress={() => handleRedirect('Aluno')} title="Aluno" />
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

export default RouteConfirmationDialog;