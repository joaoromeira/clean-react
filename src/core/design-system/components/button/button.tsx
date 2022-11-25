import { StyledButton } from './styles';
import { ButtonProps } from './types';

export const Button = (props: ButtonProps): JSX.Element => {
  return <StyledButton {...props} />;
};
