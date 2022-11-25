import { useTranslation } from 'react-i18next';

import { Text } from '../../../../../core/design-system';

export const Home = (): JSX.Element => {
  const { t } = useTranslation();

  return <Text>{t('title')}</Text>;
};
