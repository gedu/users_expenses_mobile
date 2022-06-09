import { StyleSheet } from 'react-native';
import { Colors } from '../theme';

export const styles = StyleSheet.create({
  root: { flex: 1 },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 24,
    color: Colors.graniteGrey,
  },
  balanceText: {
    textAlign: 'center',
    fontSize: 32,
    marginVertical: 32,
    fontWeight: 'bold',
    color: Colors.blueGreen,
  },
});
