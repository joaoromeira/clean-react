import { Text } from '@design-system';
import { useTranslation } from 'react-i18next';

export const Home = (): JSX.Element => {
  const { t } = useTranslation();

  return <Text>{t('title')}</Text>;
};
