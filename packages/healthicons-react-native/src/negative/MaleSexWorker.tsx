import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMaleSexWorker = (passedProps: SvgProps) => {
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
      fill="currentColor"
      color="currentColor"
      {...props}
    >
      <G clipPath="url(#male-sex-worker_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM18 9.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm1.78 11.622c-.038-.393-.082-.77-.131-1.122H19v20.5a1.5 1.5 0 0 1-2.995.12L15.155 30h-1.31l-.85 10.62A1.5 1.5 0 0 1 10 40.5V20h-.649c-.05.352-.093.729-.132 1.122C9.001 23.367 9 25.8 9 26.5a1.5 1.5 0 0 1-3 0v-.007c0-.707 0-3.264.233-5.662.116-1.19.297-2.43.597-3.406.148-.479.355-1.002.671-1.436.317-.434.909-.989 1.81-.989H19.69c.901 0 1.493.555 1.81.99.316.433.523.956.67 1.435.3.976.482 2.217.598 3.406.233 2.398.233 4.955.233 5.662v.007a1.5 1.5 0 0 1-3 0c0-.7 0-3.133-.22-5.378ZM27 12a4 4 0 0 1 4-4h1V6h2v2h1a4 4 0 0 1 4 4h-2a2 2 0 0 0-2-2h-1v4h1a4 4 0 0 1 0 8h-1v2h-2v-2h-1a4 4 0 0 1-4-4h2a2 2 0 0 0 2 2h1v-4h-1a4 4 0 0 1-4-4Zm5-2h-1a2 2 0 1 0 0 4h1v-4Zm2 10h1a2 2 0 1 0 0-4h-1v4ZM24 35c0-1.306.835-2.417 2-2.83V26h2v1h10v-1h2v6.17c1.165.413 2 1.524 2 2.83v7h-2v-3H26v3h-2v-7Zm14-6h-2v3h2v-3Zm-4 0h-2v3h2v-3Zm-4 0h-2v3h2v-3Zm-3 5a1 1 0 0 0-1 1v2h14v-2a1 1 0 0 0-1-1H27Z"
        />
      </G>
      <Defs>
        <ClipPath id="male-sex-worker_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgMaleSexWorker;
