import dayjs from 'dayjs';
import React from 'react';
import { Image, ListRenderItem, Text, View } from 'react-native';
import { moneyIcon } from '../../../assets/images';
import { Expense } from '../../common/types/types';
import { styles } from './ExpensesList.style';

type CommentFieldProps = {
  comment: string;
};

const dayMonthYearFormat = 'DD/MM/YYYY';

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

export const ExpensesItem: ListRenderItem<Expense> = ({ item }) => {
  const fullName = `${item.user.first} ${item.user.last}`;
  return (
    <View style={styles.card}>
      <View style={styles.moneyBg}>
        <Image style={styles.moneyIcon} source={moneyIcon} />
      </View>
      <View style={styles.cardHeader}>
        <Text style={styles.fullName}>{fullName}</Text>
        <Text style={styles.expenseAmount}>{item.amount.value}</Text>
      </View>
      <View style={styles.cardHeader}>
        <Text style={styles.secondaryText}>{item.merchant}</Text>
        <Text style={styles.secondaryText}>
          {dayjs(item.date).format(dayMonthYearFormat)}
        </Text>
      </View>
      <CommentField comment={item.comment} />
    </View>
  );
};
