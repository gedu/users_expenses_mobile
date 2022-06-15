import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../DetailsPage.style';

type SectionHeaderProps = {
  onActionPress(): void;
  title: string;
};

export const SectionHeader = ({ title, onActionPress }: SectionHeaderProps) => {
  const { t } = useTranslation();
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.receiptTitle}>{title}</Text>
      <TouchableOpacity onPress={onActionPress}>
        <Text style={styles.addActionText}>{t('add').toLocaleUpperCase()}</Text>
      </TouchableOpacity>
    </View>
  );
};
