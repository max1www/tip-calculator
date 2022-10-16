import styled from 'styled-components';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background-color: ${({ secondary }) =>
    secondary ? 'var(--very-dark-cyan)' : 'var(--strong-cyan)'};
  color: ${({ secondary }) =>
    secondary ? 'var(--very-light-grayish-cyan)' : 'var(--very-dark-cyan)'};
  padding: 12px;
  font-size: 16px;
  border: 0;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: hsl(185, 41%, 84%);
    ${({ secondary }) => (secondary ? 'color: var(--very-dark-cyan)' : '')}
  }

  &:disabled {
    background-color: hsl(184, 14%, 56%);
    opacity: 0.5;
  }
`;

export default Button;
