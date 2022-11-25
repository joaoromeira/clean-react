import { StyledButton } from './button.styles';
import { ButtonProps } from './button.types';

export const Button = (props: ButtonProps): JSX.Element => {
  return <StyledButton {...props} />;
};
