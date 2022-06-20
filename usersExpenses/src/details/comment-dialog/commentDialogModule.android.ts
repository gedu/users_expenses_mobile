import { NativeModules } from 'react-native';
const { CommentDialogModule } = NativeModules;

type CommentDialogModule = {
  showDialog(currentText: string): Promise<string>;
};

export default CommentDialogModule as CommentDialogModule;
