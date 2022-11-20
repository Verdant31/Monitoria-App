import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#003B71',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#f2f2f2',
    paddingTop:40,
  },
  form: {
    backgroundColor: '#f2f2f2',
    marginTop: 30,
    width: '80%',
    borderRadius: 5,
    padding: 18,
  },
  fieldContainer: {
    marginBottom: 20
  },
  input: {
    borderWidth: 2,
    paddingLeft: 12,
    height: 35,
    marginTop: 12,
    width: '90%',
    borderColor: '#003B71'
  },
  updateButton: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 40
  }
})