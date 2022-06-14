import { StyleSheet } from 'react-native';

const FontFamily = {
  light: 'Quicksand-Light',
  regular: 'Quicksand-Regular',
  bold: 'Quicksand-Bold',
};

export const typography = StyleSheet.create({
  headlineBig: {
    fontFamily: FontFamily.bold,
    fontSize: 46,
  },
  headlineLarge: {
    fontFamily: FontFamily.bold,
    fontSize: 32,
  },
  headlineLargeLight: {
    fontFamily: FontFamily.light,
    fontSize: 32,
  },
  headlineMedium: {
    fontFamily: FontFamily.bold,
    fontSize: 24,
  },
  headlineSmall: {
    fontFamily: FontFamily.light,
    fontSize: 18,
  },
  bodyLarge: {
    fontFamily: FontFamily.regular,
    fontSize: 20,
  },
  bodyMediumBold: {
    fontFamily: FontFamily.bold,
    fontSize: 18,
  },
  bodyMedium: {
    fontFamily: FontFamily.regular,
    fontSize: 18,
  },
  bodySmall: {
    fontFamily: FontFamily.light,
    fontSize: 14,
  },
  bodyXSmallBold: {
    fontFamily: FontFamily.bold,
    fontSize: 12,
  },
});
