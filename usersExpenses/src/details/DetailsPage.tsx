import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, StatusBar, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { StoreResponse } from '../common/api/model/netState';
import { UseDetailsStore } from '../common/store/createDetailsSlice';
import { useStore } from '../common/store/useStore';
import { formatCurrency } from '../common/utils/currency';
import { BackHeader } from '../common/widgets/BackHeader';
import { NavigationProps } from '../routes';
import { Colors } from '../theme';
import { styles } from './DetailsPage.style';
import CommentDialogModule from './comment-dialog/commentDialogModule.android';
import { ReceiptPictureSection } from './receipt-picture-section/ReceiptPictureSection';
import { SectionHeader } from './section-header/SectionHeader';

type DetailsPageProps = {
  navigation: NavigationProps['Details'];
};

const currentExpenseStore = (store: UseDetailsStore) => store.currentExpense!;
const uploadCommentStore = (store: UseDetailsStore) => store.uploadComment!;

export const DetailsPage = ({ navigation }: DetailsPageProps) => {
  const { t } = useTranslation(['common', 'errors']);
  const currentExpense = useStore(currentExpenseStore);
  const uploadComment = useStore(uploadCommentStore);
  const [commentUploadState, setCommentUploadState] = useState<StoreResponse>({
    state: 'idle',
  });

  const handleAddComment = async () => {
    try {
      const inputResponse = await CommentDialogModule.showDialog(
        currentExpense.comment || '',
      );
      console.log(inputResponse);
      uploadComment(inputResponse, setCommentUploadState);
    } catch (error) {
      console.log('Comment canceled: ', error);
    }
  };

  useEffect(() => {
    if (commentUploadState.state === 'error') {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: t('errors:error.unspecific'),
      });
    }
  }, [commentUploadState, t]);

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

        <ReceiptPictureSection navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};
