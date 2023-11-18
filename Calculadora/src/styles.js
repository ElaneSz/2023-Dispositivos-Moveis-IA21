import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8e44ad',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
    padding: 20,
    margin: 5,
    borderRadius: 5,
  },
  operationButton: {
    backgroundColor: '#e74c3c',
  },
  operationColumn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 10, // Ajuste conforme necessário
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  result: {
    marginTop: 10,
    fontSize: 24,
    color: '#fff',
  },
});
