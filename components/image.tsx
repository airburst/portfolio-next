import Image, { ImageProps as NextImageProps } from "next/image";

type ImageKitProps = {
  src: string;
  width?: number;
  quality?: number;
};

type ImageProps = {
  alt: string;
} & NextImageProps;

const imageKitLoader = ({ src, width, quality }: ImageKitProps) => {
  if (src[0] === "/") src = src.slice(1);
  const params = [`w-${width}`];
  if (quality) {
    params.push(`q-${quality}`);
  }
  const paramsString = params.join(",");
  // FIXME: Move imagekit path to constant
  let urlEndpoint = "https://ik.imagekit.io/mfimages/";
  if (urlEndpoint[urlEndpoint.length - 1] === "/")
    urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
  return `${urlEndpoint}/${src}?tr=${paramsString}`;
};

const ImageKit = (props: ImageProps) => {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image {...props} loader={imageKitLoader} />;
};

export default ImageKit;
