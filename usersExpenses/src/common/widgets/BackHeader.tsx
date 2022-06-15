import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { backIcon } from '../../../assets/images';
import { styles } from './Widget.styles';

export const BackHeader = () => {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity style={styles.backButton} onPress={handleBack}>
      <Image style={styles.iconImage} source={backIcon} />
    </TouchableOpacity>
  );
};
