import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Image,
  PermissionsAndroid,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';
import { CameraOptions, launchCamera } from 'react-native-image-picker';
import Toast from 'react-native-toast-message';
import { pictureIcon } from '../../../assets/images';
import { StoreResponse } from '../../common/api/model/netState';
import { UseDetailsStore } from '../../common/store/createDetailsSlice';
import { useStore } from '../../common/store/useStore';
import { parsePicUrl } from '../../common/utils/picture.utils';
import { NavigationProps } from '../../routes';
import { styles } from '../DetailsPage.style';
import { SectionHeader } from '../section-header/SectionHeader';

type ReceiptPictureSectionProps = {
  navigation: NavigationProps['Details'];
};

const uploadPictureStore = (store: UseDetailsStore) => store.uploadPicture!;
const currentReceiptStore = (store: UseDetailsStore) =>
  store.currentExpense!.receipts;

const fileNameFormat = 'MMDDYYHHmm';
const cameraOptions: CameraOptions = {
  mediaType: 'photo',
  quality: 1,
  maxHeight: 512,
  maxWidth: 512,
  includeBase64: Platform.OS === 'ios',
  saveToPhotos: false,
};

export const ReceiptPictureSection = ({
  navigation,
}: ReceiptPictureSectionProps) => {
  const { t } = useTranslation(['common', 'errors']);
  const uploadPicture = useStore(uploadPictureStore);
  const receiptPictures = useStore(currentReceiptStore);
  const [receiptPicUrl, setReceiptPic] = useState(parsePicUrl(receiptPictures));
  const [pictureUploadState, setPictureUploadState] = useState<StoreResponse>({
    state: 'idle',
  });

  useEffect(() => {
    setReceiptPic(parsePicUrl(receiptPictures));
  }, [receiptPictures]);

  const handlePicturePress = () => {
    if (receiptPicUrl) {
      navigation.navigate('Picture', { uri: receiptPicUrl });
    }
  };

  const handleAddPicture = async () => {
    try {
      let canLaunchCamera = true;
      if (Platform.OS === 'android') {
        const hasStoragePermission = await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        );

        if (!hasStoragePermission) {
          const permissionResults = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          );
          canLaunchCamera = permissionResults === 'granted';
        }
      }
      if (!canLaunchCamera) {
        return;
      }

      const pictureRes = await launchCamera(cameraOptions);
      //todo: handle error cases
      if (pictureRes.assets && pictureRes.assets.length > 0) {
        const { type, uri, base64 } = pictureRes.assets[0];
        if (type && uri) {
          const picData = {
            name: dayjs().format(fileNameFormat) + '.jpg',
            type,
            uri,
            data: base64,
          };
          uploadPicture(picData, setPictureUploadState);
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
    <>
      <SectionHeader
        title={t('common:receipt')}
        onActionPress={handleAddPicture}
      />
      <View style={styles.receiptPictureContainer}>
        {receiptPicUrl ? (
          <TouchableOpacity
            style={styles.receiptButton}
            onPress={handlePicturePress}
            disabled={pictureUploadState.state === 'loading'}>
            <Image
              style={[
                styles.receiptPicture,
                { opacity: pictureUploadState.state === 'loading' ? 0.5 : 1 },
              ]}
              resizeMode="cover"
              source={{ uri: receiptPicUrl }}
            />
          </TouchableOpacity>
        ) : (
          <Image style={styles.receiptEmptyIcon} source={pictureIcon} />
        )}
      </View>
    </>
  );
};
