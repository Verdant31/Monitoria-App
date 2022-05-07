import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#003B71',
    alignItems: 'center'
  },
  title: {
    fontSize: 26,
    color: '#f2f2f2',
    fontWeight: '600',
  },
  optionsContainer: {
    width: 250,
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between'
  },
  option: {
    fontSize: 16,
    fontWeight: '500',
    color: '#f2f2f2'
  }
})