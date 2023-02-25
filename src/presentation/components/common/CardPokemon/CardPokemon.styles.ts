import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border: solid transparent; /* !importanté */
  border-width: 2px;
  border-image-slice: 1;
  border-radius: 10%;
  border-image-source: linear-gradient(to right, red, orange);

  h3 {
    color: white;
  }
`;
