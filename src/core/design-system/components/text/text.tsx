import { StyledText } from './styles';
import { TextProps } from './types';

export const Text = (props: TextProps): JSX.Element => {
  return <StyledText {...props} />;
};
