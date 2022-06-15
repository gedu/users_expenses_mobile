import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../theme';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  backButton: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  iconImage: {
    width: 36,
    height: 36,
    tintColor: Colors.black50,
  },
});
