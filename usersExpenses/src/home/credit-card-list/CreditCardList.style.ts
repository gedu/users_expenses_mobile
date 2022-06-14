import { StyleSheet } from 'react-native';
import { Colors, typography } from '../../theme';

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
    ...typography.bodyMedium,
    color: Colors.dimeGrey,
    marginEnd: 24,
  },
  cardLogo: {
    width: 20,
    height: 20,
  },
  balanceText: {
    ...typography.headlineMedium,
    marginTop: 8,
    color: Colors.white,
  },
});
