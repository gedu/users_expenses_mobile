import { Dimensions, StyleSheet } from 'react-native';
import { Colors, typography } from '../../theme';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 64,
  },
  card: {
    margin: 8,
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.teaGreen,
  },
  moneyBg: {
    borderRadius: 25,
    marginBottom: 16,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black50,
  },
  loadingMoreContainer: {
    justifyContent: 'center',
  },
  moneyIcon: {
    opacity: 0.8,
    width: 22,
    height: 22,
  },
  receiptIcon: {
    width: 20,
    height: 20,
    marginStart: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fullName: {
    ...typography.bodyLarge,
    color: Colors.black,
  },
  currencyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  expenseAmount: {
    ...typography.bodyMediumBold,
    color: Colors.russianViolet,
  },
  secondaryText: {
    ...typography.bodySmall,
    color: Colors.dimeGrey,
  },
  divider: {
    backgroundColor: Colors.teaGreenDark,
    height: 1,
    width: '70%',
    marginVertical: 8,
    alignSelf: 'center',
  },
  commentTitle: {
    ...typography.bodyXSmallBold,
    marginTop: 8,
  },
  commentText: {
    ...typography.bodySmall,
    color: Colors.dimeGrey,
  },
  emptySearchContainer: {
    alignItems: 'center',
  },
  emptySearchAnim: {
    width: width * 0.2,
    height: height * 0.2,
    marginTop: height * 0.02,
  },
});
