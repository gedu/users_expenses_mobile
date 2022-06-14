import { StyleSheet } from 'react-native';
import { Colors, typography } from '../theme';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  title: {
    ...typography.headlineSmall,
    textAlign: 'center',
    marginTop: 24,
    color: Colors.dimeGrey,
  },
  balanceText: {
    ...typography.headlineLarge,
    textAlign: 'center',
    marginVertical: 32,
    color: Colors.blueGreen,
  },
});
