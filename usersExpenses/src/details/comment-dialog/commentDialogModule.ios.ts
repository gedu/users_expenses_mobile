import React from 'react';

export const CommentDialogModule = {
  showDialog: () => {
    return new Promise((_, reject) => {
      reject('Not ready');
    });
  },
};
