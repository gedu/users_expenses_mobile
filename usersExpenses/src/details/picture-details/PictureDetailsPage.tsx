import React from 'react';
import { Image, View } from 'react-native';
import { BackHeader } from '../../common/widgets/BackHeader';
import { NavigationProps } from '../../routes';
import { styles } from './PictureDetailsPage.style';

type PictureDetailsPageProps = {
  route: NavigationProps['Picture']['route'];
};

export const PictureDetailsPage = ({ route }: PictureDetailsPageProps) => {
  const { uri } = route.params;
  return (
    <View style={styles.fill}>
      <BackHeader />
      <Image style={styles.fill} source={{ uri }} />
    </View>
  );
};
