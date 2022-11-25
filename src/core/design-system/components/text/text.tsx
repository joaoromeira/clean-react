import { StyledText } from './text.styles';
import { TextProps } from './text.types';

export const Text = (props: TextProps): JSX.Element => {
  return <StyledText {...props} />;
};
