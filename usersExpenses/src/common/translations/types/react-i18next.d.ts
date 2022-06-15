import 'react-i18next';

import common from '../en/common';
import errors from '../en/errors';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';

    resources: {
      common: typeof common;
      errors: typeof errors;
    };
  }
}
