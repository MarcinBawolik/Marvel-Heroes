import { Paragraph, SubHeader, Wrapper } from "./styled";

export const Error = () => (
  <Wrapper>
    <SubHeader>Ooops! Something went wrong...</SubHeader>
    <Paragraph>Sorry, failed to load Heroes.</Paragraph>
  </Wrapper>
);
