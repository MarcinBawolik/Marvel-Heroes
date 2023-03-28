import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 95px auto 140px auto;
  display: grid;
  grid-gap: 32px;
  justify-items: center;
  text-align: center;
`;

export const SubHeader = styled.h3`
  color: ${({ theme }) => theme.color.white};
  font-weight: 700;
  font-size: 24px;
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-weight: 400;
  font-size: 20px;
`;
