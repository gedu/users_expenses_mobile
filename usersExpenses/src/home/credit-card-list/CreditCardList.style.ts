import { StyleSheet } from 'react-native';
import { Colors } from '../../theme';

export const styles = StyleSheet.create({
  card: {
    margin: 8,
    padding: 8,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: Colors.russianViolet,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cardNumber: {
    color: Colors.graniteGrey,
    marginEnd: 24,
  },
  cardLogo: {
    width: 20,
    height: 20,
  },
  balanceText: {
    marginTop: 8,
    fontSize: 24,
    color: Colors.white,
  },
});
