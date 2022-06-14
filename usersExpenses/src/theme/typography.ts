import { StyleSheet } from 'react-native';

const FontFamily = {
  light: 'Quicksand-Light',
  regular: 'Quicksand-Regular',
  bold: 'Quicksand-Bold',
};

export const Typography = StyleSheet.create({
  headlineLarge: {
    fontFamily: FontFamily.bold,
    fontSize: 32,
  },
});
