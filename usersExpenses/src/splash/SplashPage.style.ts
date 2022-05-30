import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Typography } from '../theme';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  title: {
    marginTop: height * 0.15,
    ...Typography.headlineLarge,
  },
  animationContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  animationItem: {
    width: width * 0.5,
    height: height * 0.5,
  },
});
