import Image, { ImageProps } from "next/image";
import styled from "styled-components";

type ImageShape = "circle" | "square";
type ShapeImageProps = ImageProps & { shape?: ImageShape };

const ImageWithSpahe = styled(Image)<{ shape?: ImageShape }>`
  border-radious: ${({ shape }) => (shape === "circle" ? "50%" : "0")};
`;

/**
 * シェイプイメージ
 */
const ShapeImage = (props: ShapeImageProps) => {
  const { shape, ...imageProps } = props;

  return <ImageWithSpahe shape={shape} {...imageProps} />;
};

export default ShapeImage;
