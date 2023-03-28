import { Tile, Image, Title } from "./styled";

export const Success = ({ heroes }) => (
  <>
    {heroes.map(({ id, name, thumbnail }) => (
      <Tile key={id}>
        <Image src={`${thumbnail.path}.${thumbnail.extension}`} alt="" />
        <Title>{name}</Title>
      </Tile>
    ))}
  </>
);
