import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDairy = (passedProps: SvgProps) => {
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
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.675 6 18 21.623v18.899c0 .913.68 1.478 1.306 1.478h10.388c.627 0 1.306-.565 1.306-1.478V21.623L27.325 6h-5.65Zm-2.37 1.34s-.53.044-.99-.234c-.352-.212-.662-.613-.662-1.367C17.653 4 18.479 4 20.958 4h7.084c2.479 0 3.305 0 3.305 1.74 0 .753-.31 1.154-.662 1.367-.46.277-.99.232-.99.232L33 21.391v19.13C33 42.444 31.52 44 29.694 44H19.306C17.48 44 16 42.443 16 40.522v-19.13l3.306-14.053Z"
      />
      <Path d="M24 23.814c-2.333-2.186-7 0-7 0L20.5 6h8L31 16.526l1 7.895L31 26s-4.667 0-7-2.186Z" />
      <Path d="M19 5h11l-1 2h-9l-1-2Z" />
    </Svg>
  );
};
export default SvgDairy;