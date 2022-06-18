import styled from "styled-components";
import Image from "../components/image";

type CardProps = {
  src: string;
  caption?: string;
  galleryId?: string;
};

const Card = styled.div`
  background: #fff;
  padding: 0.5rem;
  cursor: pointer;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.05);

  &:hover {
    box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.1);
  }
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
  color: var(--color-text-muted);
`;

// NOTE: Next Image does not expect width or height props
// when layout="fill", but the image loader for ImageKit
// needs width to fetch a smaller version.
export default function ImageCard({
  src,
  caption = "No caption provided",
  galleryId,
}: CardProps) {
  // TODO: Add link to `/gallery/${galleryId}`
  return (
    <Card>
      <ImageWrapper>
        <Image
          src={src}
          alt={caption}
          width={340}
          layout="fill"
          objectFit="cover"
          objectPosition="center top"
          placeholder="empty"
          sizes="340px"
          priority
        />
      </ImageWrapper>
      <Caption>{caption}</Caption>
    </Card>
  );
}
