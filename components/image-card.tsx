import styled from 'styled-components';
import Link from 'next/link';
import Image from '../components/image';

type CardProps = {
  src: string;
  folder: string;
  caption?: string;
  galleryId?: string;
};

const Card = styled.div`
  background: #fff;
  cursor: pointer;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.16);
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
  padding: 0.5rem;
  text-transform: uppercase;
  color: var(--color-text-muted);
`;

// NOTE: Next Image does not expect width or height props
// when layout="fill", but the image loader for ImageKit
// needs width to fetch a smaller version.
export default function ImageCard({
  src,
  folder,
  caption = 'No caption provided',
}: CardProps) {
  // TODO: Add link to `/gallery/${galleryId}`
  return (
    <Card>
      <Link href={`/gallery/${folder}`}>
        <a>
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
        </a>
      </Link>
    </Card>
  );
}
