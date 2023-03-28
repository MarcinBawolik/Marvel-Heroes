import { Paragraph, Spinner, Wrapper } from "./styled";

export const Loading = () => (
  <Wrapper>
    <Paragraph>Please wait, Heroes are being loaded...</Paragraph>
    <Spinner />
  </Wrapper>
);
