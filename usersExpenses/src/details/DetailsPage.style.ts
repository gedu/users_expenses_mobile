import { Dimensions, StyleSheet } from 'react-native';
import { Colors, typography } from '../theme';

const { width } = Dimensions.get('window');

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
    height: width * 0.7,
    borderWidth: 1,
    borderColor: Colors.black50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  receiptEmptyIcon: {
    width: 64,
    height: 64,
    tintColor: Colors.black50,
  },
  receiptButton: {
    width: '100%',
    height: '100%',
  },
  receiptPicture: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
});
