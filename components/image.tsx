import Image, { ImageProps as NextImageProps } from "next/image";

const IMAGE_KIT_URL = "https://ik.imagekit.io/mfimages";

type ImageKitProps = {
  src: string;
  width?: number;
  quality?: number;
};

type ImageProps = {
  alt: string;
} & NextImageProps;

// Custom loader to fetch images from ImageKit
const imageKitLoader = ({ src, width, quality }: ImageKitProps) => {
  if (src[0] === "/") src = src.slice(1);
  const params = [`w-${width}`];
  if (quality) {
    params.push(`q-${quality}`);
  }
  const paramsString = params.join(",");

  return `${IMAGE_KIT_URL}/${src}?tr=${paramsString}`;
};

const ImageKit = (props: ImageProps) => {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image {...props} loader={imageKitLoader} />;
};

export default ImageKit;
