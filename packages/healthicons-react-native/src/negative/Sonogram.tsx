import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSonogram = (passedProps: SvgProps) => {
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
      <G clipPath="url(#sonogram_svg__a)" fill="#000">
        <Path d="M29.589 26.645c2.55 0 4.617-2.01 4.617-4.492 0-1.829-1.124-3.403-2.737-4.103-1.18-.513-2.547-.35-3.74.13-1.872.755-2.757 2.046-2.757 3.973 0 .36.043.711.126 1.047a.159.159 0 0 1-.13.197.169.169 0 0 1-.186-.12l-.993-3.37c-.425-1.022-1.622-1.515-2.672-1.1-1.05.414-1.557 1.578-1.131 2.6l-.003-.006.005.014a41.558 41.558 0 0 1 .248.774 231 231 0 0 1 .495 1.635l.656 2.159a.184.184 0 0 1-.341.135c-.215-.43-.66-1.32-.81-1.597a16.75 16.75 0 0 0-.344-.608c-.047-.08-.11-.18-.178-.277a2.158 2.158 0 0 0-.375-.418 2.09 2.09 0 0 0-.597-.362 2.169 2.169 0 0 0-.836-.15 2.376 2.376 0 0 0-.362.034 3.094 3.094 0 0 0-.372.09 7.246 7.246 0 0 0-.53.189c-.341.134-.76.314-1.16.492-.355.156-.686.305-.971.433-.422.19-.744.335-.894.393-1.053.41-1.565 1.571-1.144 2.595.42 1.024 1.614 1.522 2.667 1.113.246-.096.765-.329 1.294-.566l.607-.272c.132.253.273.527.418.81 1.155 2.255 2.893 4.373 5.407 4.01 3.22-.46 4.657-2.923 5.577-4.498.213-.366.4-.684.573-.918.188.023.379.034.573.034Z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM9.583 32.512c-1.077-.33-1.619-1.512-1.215-2.563l6.408-16.687c.372-.968 1.42-1.484 2.431-1.258 2.188.488 4.46.745 6.792.745s4.605-.258 6.794-.746c1.011-.225 2.059.291 2.43 1.259l6.409 16.687c.403 1.051-.139 2.232-1.215 2.562a49.06 49.06 0 0 1-14.418 2.16 49.06 49.06 0 0 1-14.416-2.16ZM41 11.5v2a1 1 0 1 0 2 0V11a1.5 1.5 0 0 0-1.5-1.5H39a1 1 0 1 0 0 2h2Zm-32 0H7v2a1 1 0 1 1-2 0V11a1.5 1.5 0 0 1 1.5-1.5H9a1 1 0 1 1 0 2Zm32 25v-2a1 1 0 1 1 2 0V37a1.5 1.5 0 0 1-1.5 1.5H39a1 1 0 1 1 0-2h2Zm-32 0H7v-2a1 1 0 1 0-2 0V37a1.5 1.5 0 0 0 1.5 1.5H9a1 1 0 1 0 0-2Z"
        />
      </G>
      <Defs>
        <ClipPath id="sonogram_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgSonogram;
