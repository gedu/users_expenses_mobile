import { Dimensions, StyleSheet } from 'react-native';
import { typography } from '../../theme';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorImg: {
    alignSelf: 'center',
    width: width * 0.4,
    height: height * 0.4,
  },
  errorTitle: {
    ...typography.bodyMediumBold,
  },
});
