import styled from "styled-components";

export const Tile = styled.div`
  background-color: ${({ theme }) => theme.color.roofTerracotta};
  color: ${({ theme }) => theme.color.white};
  margin-top: 3rem;
  padding: 1.5px;
`;

export const Image = styled.img`
  width: 100%;
  height: 75%;
  transition: 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Title = styled.h3`
  width: 100%;
  text-align: center;
  padding: 1rem;
  font-size: 17px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  font-size: 25px;
`;
