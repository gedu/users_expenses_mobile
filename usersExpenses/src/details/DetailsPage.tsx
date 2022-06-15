import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { CameraOptions, launchCamera } from 'react-native-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { pictureIcon } from '../../assets/images';
import { UseDetailsStore, useDetails } from '../common/store/useDetails';
import { ReceiptPicture } from '../common/types/types';
import { formatCurrency } from '../common/utils/currency';
import { BackHeader } from '../common/widgets/BackHeader';
import { NavigationProps } from '../routes';
import { Colors } from '../theme';
import { styles } from './DetailsPage.style';
import { SectionHeader } from './section-header/SectionHeader';

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

  const handlePicturePress = () => {
    if (receiptPic?.uri) {
      navigation.navigate('Picture', { uri: receiptPic.uri });
    }
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
      <BackHeader />

      <ScrollView style={styles.content}>
        <Text style={styles.title}>{currentExpense.user.first}</Text>
        <Text style={styles.title}>{currentExpense.user.last}</Text>
        <Text style={styles.amount}>
          {formatCurrency(currentExpense.amount)}
        </Text>
        <SectionHeader
          title={t('common:comments')}
          onActionPress={handleAddPicture}
        />
        <Text style={styles.commentText}>
          {currentExpense.comment || t('common:noComments')}
        </Text>

        <SectionHeader
          title={t('common:receipt')}
          onActionPress={handleAddPicture}
        />
        <View style={styles.receiptPictureContainer}>
          {receiptPic ? (
            <TouchableOpacity
              style={styles.receiptButton}
              onPress={handlePicturePress}>
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
      </ScrollView>
    </SafeAreaView>
  );
};
