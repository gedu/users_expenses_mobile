import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';
import React from 'react';
import {
  Image,
  ListRenderItem,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { moneyIcon } from '../../../assets/images';
import { UseDetailsStore, useDetails } from '../../common/store/useDetails';
import { Expense } from '../../common/types/types';
import { NavigationProps } from '../../routes';
import { styles } from './ExpensesList.style';

type CommentFieldProps = {
  comment: string;
};

type ExpensesItemProps = {
  expense: Expense;
};

const dayMonthYearFormat = 'DD/MM/YYYY';
const cacheCurrentStore = (store: UseDetailsStore) => store.cacheCurrent;

const CommentField = ({ comment }: CommentFieldProps) => {
  if (comment.length === 0) {
    return null;
  }

  return (
    <View>
      <View style={styles.divider} />
      <Text style={styles.commentTitle}>Comment</Text>
      <Text style={styles.commentText}>{comment}</Text>
    </View>
  );
};

export const ExpensesItem = ({ expense }: ExpensesItemProps) => {
  const cacheCurrent = useDetails(cacheCurrentStore);
  const navigation = useNavigation<NavigationProps['Home']>();
  const fullName = `${expense.user.first} ${expense.user.last}`;
  const handleExpensePress = () => {
    cacheCurrent(expense);
    navigation.navigate('Details');
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handleExpensePress}>
      <View style={styles.moneyBg}>
        <Image style={styles.moneyIcon} source={moneyIcon} />
      </View>
      <View style={styles.cardHeader}>
        <Text style={styles.fullName}>{fullName}</Text>
        <Text style={styles.expenseAmount}>{expense.amount.value}</Text>
      </View>
      <View style={styles.cardHeader}>
        <Text style={styles.secondaryText}>{expense.merchant}</Text>
        <Text style={styles.secondaryText}>
          {dayjs(expense.date).format(dayMonthYearFormat)}
        </Text>
      </View>
      <CommentField comment={expense.comment} />
    </TouchableOpacity>
  );
};
