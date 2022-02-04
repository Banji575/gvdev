import * as React from "react";
import styled from "styled-components";

enum enumRatio {
  "100%" = "100%",
  "1/2" = "50%",
  "3/4" = "75%",
}

interface IImageProps extends React.HtmlHTMLAttributes<HTMLImageElement> {
  src?: string;
  ratio?: keyof typeof enumRatio;
}

export const ImageWrapper: React.FC<IImageProps> = ({
  className = "",
  src = "",
  ratio = "100%",
}) => {
  const dataRatio = enumRatio;
  const Wrapper = styled.div`
    position: relative;
    width: 100%;
    padding-top: ${(props: IImageProps) => dataRatio[props.ratio]};
    > img {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      max-height: auto;
      width: 100%;
    }
  `;
  return (
    <Wrapper ratio={ratio}>
      <img src={src} alt="" className={className} />
    </Wrapper>
  );
};
