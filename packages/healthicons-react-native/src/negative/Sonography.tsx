import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSonography = (passedProps: SvgProps) => {
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
      <G clipPath="url(#sonography_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM6 9.5a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-30Zm7 2h-2v2a1 1 0 1 1-2 0V11a1.5 1.5 0 0 1 1.5-1.5H13a1 1 0 1 1 0 2Zm24 0v2a1 1 0 1 0 2 0V11a1.5 1.5 0 0 0-1.5-1.5H35a1 1 0 1 0 0 2h2ZM10.302 28.941c-.403 1.051.139 2.233 1.217 2.557A43.264 43.264 0 0 0 24 33.332c4.33 0 8.518-.642 12.481-1.834 1.078-.324 1.62-1.506 1.217-2.557L32.21 14.654c-.371-.967-1.419-1.483-2.432-1.265-1.864.4-3.798.611-5.779.611-1.981 0-3.914-.21-5.779-.611-1.013-.218-2.06.298-2.432 1.265l-5.487 14.287ZM30.784 18.81c-1.07-.517-2.375-.377-3.514.118-.768.334-1.315.77-1.673 1.31-.357.542-.538 1.207-.538 2.021 0 .309.037.609.108.896a.395.395 0 0 1-.328.487.404.404 0 0 1-.443-.286l-.902-3.063c-.339-.795-1.28-1.184-2.111-.856-.833.329-1.226 1.245-.894 2.045l.005.01.231.726c.133.428.293.962.453 1.494l.598 1.97a.418.418 0 0 1-.774.308 81.25 81.25 0 0 0-.735-1.45 15.274 15.274 0 0 0-.308-.546 3.832 3.832 0 0 0-.152-.237 1.718 1.718 0 0 0-.302-.337 1.66 1.66 0 0 0-.474-.287 1.73 1.73 0 0 0-.666-.12c-.126.002-.23.017-.292.028a2.598 2.598 0 0 0-.31.075 6.367 6.367 0 0 0-.465.166c-.306.12-.684.283-1.05.445-.322.142-.623.278-.884.395l-.013.006c-.375.168-.671.302-.815.357-.834.325-1.232 1.24-.903 2.04.33.805 1.274 1.204 2.112.878.218-.084.683-.293 1.17-.512.188-.084.377-.17.555-.248l.214-.096.109.209c.12.232.25.482.382.741 1.018 1.988 3.03 3.321 5.194 3.008h.003c1.8-.235 2.79-1.448 3.63-2.579l1.383-1.864.145.017c.161.02.326.03.493.03 2.195 0 3.963-1.73 3.963-3.85 0-1.508-.894-2.818-2.202-3.45ZM37 37.5v-2a1 1 0 1 1 2 0V38a1.5 1.5 0 0 1-1.5 1.5H35a1 1 0 1 1 0-2h2Zm-24 0h-2v-2a1 1 0 1 0-2 0V38a1.5 1.5 0 0 0 1.5 1.5H13a1 1 0 1 0 0-2Z"
          fill="#333"
        />
      </G>
      <Defs>
        <ClipPath id="sonography_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgSonography;
