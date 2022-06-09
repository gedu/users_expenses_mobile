import { StyleSheet } from 'react-native';
import { Colors } from '../../theme';

export const styles = StyleSheet.create({
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
  moneyIcon: {
    opacity: 0.8,
    width: 22,
    height: 22,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fullName: {
    color: Colors.black,
    fontSize: 20,
  },
  expenseAmount: {
    color: Colors.russianViolet,
    fontWeight: 'bold',
    fontSize: 18,
  },
  secondaryText: {
    color: Colors.graniteGrey,
    fontSize: 14,
  },
  divider: {
    backgroundColor: Colors.teaGreenDark,
    height: 1,
    width: '70%',
    marginVertical: 8,
    alignSelf: 'center',
  },
  commentTitle: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: 'bold',
  },
  commentText: {
    color: Colors.graniteGrey,
  },
  balanceText: {
    marginTop: 8,
    fontSize: 24,
    color: Colors.white,
  },
});
