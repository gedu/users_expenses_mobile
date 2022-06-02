import 'react-i18next';

import common from '../en/common';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';

    resources: {
      common: typeof common;
    };
  }
}
