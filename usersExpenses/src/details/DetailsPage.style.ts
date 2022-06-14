import { Dimensions, StyleSheet } from 'react-native';
import { Colors, typography } from '../theme';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.teaGreen,
    flex: 1,
  },
  backButton: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  iconImage: {
    width: 36,
    height: 36,
    tintColor: Colors.black50,
  },
  content: {
    margin: 16,
  },
  title: {
    ...typography.headlineBig,
  },
  amount: {
    ...typography.headlineLargeLight,
    alignSelf: 'center',
    marginVertical: 18,
    color: Colors.black,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addActionText: {
    ...typography.bodyMediumBold,
    padding: 8,
    color: Colors.amber,
  },
  commentTitle: {
    ...typography.bodyMediumBold,
  },
  commentText: {
    ...typography.bodySmall,
    marginTop: 8,
  },
  receiptTitle: {
    ...typography.bodyMediumBold,
    marginTop: 24,
  },
  receiptPictureContainer: {
    height: height * 0.3,
    minHeight: height * 0.2,
    borderWidth: 1,
    borderColor: Colors.black50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginTop: 24,
  },
  receiptImage: {
    width: 64,
    height: 64,
    tintColor: Colors.black50,
  },
});
