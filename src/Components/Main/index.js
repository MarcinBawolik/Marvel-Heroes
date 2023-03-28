import {
  Header,
  BackGround,
  BackGroundImage,
  Input,
  Logo,
  Wrapper,
  ContentWrapper,
} from "./styled";
import bg from "../../images/bg.png";
import logo from "../..//images/logo.png";
import { Content } from "../Content";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchHeroes,
  selectHeroes,
  selectHeroesStatus,
} from "../../marvelHeroesSlice";

export const Main = () => {
  const dispatch = useDispatch();

  const heroesStatus = useSelector(selectHeroesStatus);
  const heroes = useSelector(selectHeroes);

  useEffect(() => {
    dispatch(fetchHeroes());
  }, [dispatch]);
  return (
    <>
      <Header>
        <BackGround>
          <BackGroundImage src={bg} alt="" />
        </BackGround>
        <Wrapper>
          <Logo src={logo} alt="" />
          <Input type="search" placeholder="Search Here" />
        </Wrapper>
      </Header>
      <ContentWrapper>
        <Content status={heroesStatus} heroes={heroes} />
      </ContentWrapper>
    </>
  );
};
