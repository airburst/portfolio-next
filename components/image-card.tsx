import styled from "styled-components";
import Image from "../components/image";

type CardProps = {
  src: string;
  caption?: string;
};

const Card = styled.div`
  background: #fff;
  padding: 0.5rem;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.05);
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 340px;
  height: 240px;
`;

const Caption = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
  padding-top: 0.5rem;
  text-transform: uppercase;
  color: #646464;
`;

export default function ImageCard({
  src,
  caption = "No caption provided",
}: CardProps) {
  return (
    <Card>
      <ImageWrapper>
        <Image
          src={src}
          alt={caption}
          layout="fill"
          objectFit="cover"
          objectPosition="center top"
        />
      </ImageWrapper>
      <Caption>{caption}</Caption>
    </Card>
  );
}
