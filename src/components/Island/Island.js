import styled from 'styled-components';

const Island = styled.section`
  /* Adapt the colors based on primary prop */
  background-color: ${({ secondary }) =>
    secondary ? 'var(--very-dark-cyan)' : 'var(--white)'};
  border-radius: ${({ secondary }) => (secondary ? '12px' : '18px')};
  padding: 32px;
`;

export default Island;
