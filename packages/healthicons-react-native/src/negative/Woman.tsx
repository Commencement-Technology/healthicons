import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgWoman = (passedProps: SvgProps) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 48 48"
      fill="none"
      color="currentColor"
      {...props}
    >
      <G clipPath="url(#woman_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM24 13a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-8.691 22.078C16.164 32.045 18.5 23.53 18.5 21v-1.663c-.067.069-.13.146-.191.233-.282.399-.532 1.01-.806 1.975l-.022.077c-.139.492-.191.676-.24.862-.03.111-.058.223-.104.403-.129.505-.393 1.546-1.203 4.622a2 2 0 0 1-3.868-1.018c.77-2.926 1.044-4 1.184-4.55v-.001c.145-.566.149-.582.405-1.485.588-2.078 1.573-4.63 4.591-5.394.2-.05.391-.065.448-.07h.006c.094-.007.195-.012.293-.016.196-.007.44-.011.702-.014.528-.004 1.188 0 1.827.005a281.512 281.512 0 0 1 2.301.03l.158.003h.039l.157-.003a366.077 366.077 0 0 1 2.301-.03c.639-.006 1.3-.009 1.827-.005.262.003.506.007.702.014.098.004.199.009.293.016h.006c.057.005.248.02.448.07 3.018.764 4.003 3.316 4.591 5.394.256.903.26.92.405 1.485.14.552.414 1.625 1.184 4.551a2 2 0 0 1-3.868 1.018c-.81-3.076-1.074-4.117-1.203-4.622-.046-.18-.074-.292-.104-.403-.049-.186-.101-.37-.24-.861l-.022-.078c-.274-.966-.524-1.576-.806-1.976a1.88 1.88 0 0 0-.191-.232v1.666c.003 2.185 2.357 10.987 3.202 14.078a.996.996 0 0 1-.816 1.25c-5.987.876-9.78.906-15.768.005a.997.997 0 0 1-.809-1.258ZM18.5 38.57v3.818a1.5 1.5 0 0 0 2.947.394l1.04-3.814a38.837 38.837 0 0 1-3.987-.398Zm7.01.392 1.043 3.82a1.5 1.5 0 0 0 2.947-.394v-3.831c-1.41.207-2.715.343-3.99.405Z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="woman_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgWoman;
