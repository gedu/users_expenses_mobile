import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { CameraOptions, launchCamera } from 'react-native-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { backIcon, pictureIcon } from '../../assets/images';
import { UseDetailsStore, useDetails } from '../common/store/useDetails';
import { formatCurrency } from '../common/utils/currency';
import { NavigationProps } from '../routes';
import { Colors } from '../theme';
import { styles } from './DetailsPage.style';

type DetailsPageProps = {
  navigation: NavigationProps['Details'];
};

const currentExpenseStore = (store: UseDetailsStore) => store.currentExpense!;
const cameraOptions: CameraOptions = {
  mediaType: 'photo',
  quality: 1,
  maxHeight: 512,
  maxWidth: 512,
};

export const DetailsPage = ({ navigation }: DetailsPageProps) => {
  const { t } = useTranslation();
  const currentExpense = useDetails(currentExpenseStore);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleAddPicture = async () => {
    const pictureRes = await launchCamera(cameraOptions);
    console.log('PIC: ', pictureRes);
  };

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar backgroundColor={Colors.teaGreen} />
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Image style={styles.iconImage} source={backIcon} />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>{currentExpense.user.first}</Text>
        <Text style={styles.title}>{currentExpense.user.last}</Text>
        <Text style={styles.amount}>
          {formatCurrency(currentExpense.amount)}
        </Text>
        <View style={styles.headerContainer}>
          <Text style={styles.commentTitle}>Comments</Text>
          <TouchableOpacity>
            <Text style={styles.addActionText}>
              {t('add').toLocaleUpperCase()}
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.commentText}>
          {currentExpense.comment || t('noComments')}
        </Text>
        <View style={styles.headerContainer}>
          <Text style={styles.receiptTitle}>{t('receipt')}</Text>
          <TouchableOpacity onPress={handleAddPicture}>
            <Text style={styles.addActionText}>
              {t('add').toLocaleUpperCase()}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.receiptPictureContainer}>
          <Image style={styles.receiptImage} source={pictureIcon} />
        </View>
      </View>
    </SafeAreaView>
  );
};
