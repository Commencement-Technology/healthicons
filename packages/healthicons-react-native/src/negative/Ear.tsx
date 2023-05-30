import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgEar = (passedProps: SvgProps) => {
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
      <G clipPath="url(#ear_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM24 7c-6.543 0-11.846 4.925-11.846 11H10c0-7.18 6.268-13 14-13s14 5.82 14 13c0 4.501-2.465 8.467-6.204 10.8-2.552 1.59-4.565 3.707-4.565 6.111V35c0 4.418-3.858 8-8.616 8C13.857 43 10 39.418 10 35v-2h2.154v2c0 3.314 2.893 6 6.461 6 3.569 0 6.462-2.686 6.462-6v-.089c0-3.457 2.83-6.096 5.518-7.772 3.17-1.976 5.25-5.332 5.25-9.139 0-6.075-5.303-11-11.845-11Zm-4.911 10.02C19.472 15.315 21.052 14 23 14c2.244 0 4 1.745 4 3.82h2c0-3.248-2.721-5.82-6-5.82s-6 2.572-6 5.82v.104c-.001.58-.002 1.211.284 1.815.232.488.616.896 1.12 1.318.414.547.863 1.245 1.096 1.943.348 1.043-.513 3.535-1.07 4.958a3.291 3.291 0 0 0-.119.213c-.154.299-.305.707-.436 1.058-.055.148-.106.286-.152.401-.19.475-.374.82-.595 1.049-.185.19-.415.321-.817.321-.531 0-.807-.12-.947-.216a.741.741 0 0 1-.282-.376 1.727 1.727 0 0 1-.068-.733l-.001.003v.002s0 .002-.985-.178l-.983-.179v.002l-.001.002-.001.005-.002.014a.93.93 0 0 0-.006.04 3.728 3.728 0 0 0-.035.507c0 .307.036.744.204 1.201.17.468.483.967 1.03 1.341.545.373 1.24.565 2.077.565.968 0 1.708-.368 2.252-.928.506-.521.807-1.174 1.017-1.7.096-.239.17-.439.233-.613.1-.27.176-.477.277-.674.015-.03.03-.056.042-.077l.3.018.098.007c.249.015.55.033.878.033.65 0 1.451-.068 2.25-.382.815-.32 1.595-.887 2.201-1.824.596-.922.99-2.153 1.137-3.762.003-.03.004-.06.004-.09 0-1.658-.634-2.918-1.598-3.827-.935-.881-2.136-1.393-3.247-1.697-1.12-.306-2.225-.422-3.038-.463l-.028-.002ZM20.19 28.92l.001-.002-.009.01a.084.084 0 0 0 .008-.008Z"
          fill="#333"
        />
      </G>
      <Defs>
        <ClipPath id="ear_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgEar;
