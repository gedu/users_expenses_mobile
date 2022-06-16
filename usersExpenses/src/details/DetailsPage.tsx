import dayjs from 'dayjs';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Image,
  PermissionsAndroid,
  Platform,
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
import { StoreResponse } from '../common/api/model/netState';
import { UseDetailsStore } from '../common/store/createDetailsSlice';
import { useStore } from '../common/store/useStore';
import { ReceiptPicture } from '../common/types/types';
import { formatCurrency } from '../common/utils/currency';
import { BackHeader } from '../common/widgets/BackHeader';
import { NavigationProps } from '../routes';
import { Colors } from '../theme';
import { styles } from './DetailsPage.style';
import CommentDialogModule from './comment-dialog/commentDialogModule';
import { SectionHeader } from './section-header/SectionHeader';

type DetailsPageProps = {
  navigation: NavigationProps['Details'];
};

const currentExpenseStore = (store: UseDetailsStore) => store.currentExpense!;
const uploadPictureStore = (store: UseDetailsStore) => store.uploadPicture!;

const fileNameFormat = 'MMDDYYHHmm';
const cameraOptions: CameraOptions = {
  mediaType: 'photo',
  quality: 1,
  maxHeight: 512,
  maxWidth: 512,
  includeBase64: Platform.OS === 'ios',
  saveToPhotos: false,
};

export const DetailsPage = ({ navigation }: DetailsPageProps) => {
  const { t } = useTranslation(['common', 'errors']);
  const currentExpense = useStore(currentExpenseStore);
  const uploadPicture = useStore(uploadPictureStore);
  const [receiptPic, setReceiptPic] = useState<ReceiptPicture | null>(null);
  const [pictureUploadState, setPictureUploadState] = useState<StoreResponse>({
    state: 'idle',
  });

  const handlePicturePress = () => {
    if (receiptPic?.uri) {
      navigation.navigate('Picture', { uri: receiptPic.uri });
    }
  };

  const handleAddComment = () => {
    CommentDialogModule.showDialog('', (input: string, error?: string) => {
      console.log('INPUT: ', input, error);
    });
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
          setReceiptPic(picData);
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
          onActionPress={handleAddComment}
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
              onPress={handlePicturePress}
              disabled={pictureUploadState.state === 'loading'}>
              <Image
                style={[
                  styles.receiptPicture,
                  { opacity: pictureUploadState.state === 'loading' ? 0.5 : 1 },
                ]}
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
