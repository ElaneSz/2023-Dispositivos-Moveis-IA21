import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0ddee',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
    flex: .12
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7e2d7e',
    padding: 20,
    margin: 5,
    borderRadius: 50,
  },
  operationButton: {
    backgroundColor: '#be7abb',
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
    fontSize: 30,
  }
});
