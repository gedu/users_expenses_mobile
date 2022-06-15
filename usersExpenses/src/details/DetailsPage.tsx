import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { CameraOptions, launchCamera } from 'react-native-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { backIcon, pictureIcon } from '../../assets/images';
import { UseDetailsStore, useDetails } from '../common/store/useDetails';
import { ReceiptPicture } from '../common/types/types';
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
  const { t } = useTranslation(['common', 'errors']);
  const currentExpense = useDetails(currentExpenseStore);
  const [receiptPic, setReceiptPic] = useState<ReceiptPicture | null>(null);
  const handleBack = () => {
    navigation.goBack();
  };

  const handleAddPicture = async () => {
    try {
      const pictureRes = await launchCamera(cameraOptions);
      //todo: handle error cases
      if (pictureRes.assets && pictureRes.assets.length > 0) {
        const { fileName, type, uri } = pictureRes.assets[0];
        if (type && uri) {
          setReceiptPic({
            name: fileName || 'receipt',
            type,
            uri,
          });
        }
      }
    } catch (error) {
      console.log('Launch Camera error: ', error);
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: t('errors:openCamera'),
      });
    }
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
              {t('common:add').toLocaleUpperCase()}
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.commentText}>
          {currentExpense.comment || t('common:noComments')}
        </Text>
        <View style={styles.headerContainer}>
          <Text style={styles.receiptTitle}>{t('common:receipt')}</Text>
          <TouchableOpacity onPress={handleAddPicture}>
            <Text style={styles.addActionText}>
              {t('common:add').toLocaleUpperCase()}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.receiptPictureContainer}>
          {receiptPic ? (
            <TouchableOpacity style={styles.receiptButton}>
              <Image
                style={styles.receiptPicture}
                resizeMode="cover"
                source={{ uri: receiptPic.uri }}
              />
            </TouchableOpacity>
          ) : (
            <Image style={styles.receiptEmptyIcon} source={pictureIcon} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};
