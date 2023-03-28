import styled from "styled-components";

export const Header = styled.div``;

export const BackGround = styled.div`
  width: 100%;
  height: 550px;
`;

export const BackGroundImage = styled.img`
  width: 100%;
  height: 550px;
`;

export const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 150px;
  height: 35px;
`;

export const Input = styled.input`
  outline: none;
  background: none;
  border: 2px solid ${({ theme }) => theme.color.roofTerracotta};
  margin-left: 2rem;
  width: 350px;
  height: 35px;
  border-radius: 1rem;
  color: ${({ theme }) => theme.color.white};
  font-size: 20px;
  padding: 1.2rem;
`;

export const ContentWrapper = styled.div`
  width: 80%;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
`;
