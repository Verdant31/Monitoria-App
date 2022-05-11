import { StyleSheet } from "react-native";

export const styles = (height?: any) => StyleSheet.create({
  solicitationCard: {
    height: height,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    padding: 13,
    marginBottom: 30
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {

  }
})