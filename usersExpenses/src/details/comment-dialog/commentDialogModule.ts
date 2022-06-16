import { NativeModules } from 'react-native';
const { CommentDialogModule } = NativeModules;

type CommentDialogModule = {
  showDialog(
    currentText: string,
    response: (input: string, cancel: boolean) => void,
  ): void;
};

export default CommentDialogModule as CommentDialogModule;
