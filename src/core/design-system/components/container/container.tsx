import { StyledContainer } from './container.styles';
import { ContainerProps } from './container.types';

export const Container = (props: ContainerProps): JSX.Element => {
  return <StyledContainer {...props} />;
};
