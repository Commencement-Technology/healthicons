import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAnimalBat = (passedProps: SvgProps) => {
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
        d="M19.89 12.006a1 1 0 0 1 1.104.884l1 9a1 1 0 0 1-1.988.22l-1-9a1 1 0 0 1 .884-1.104Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.388 11c.153 6.107 2.212 7.23 6.938 8l-.299-2.935-.413-.988c1.613-.674 2.971-1.07 4.38-1.077 1.413-.007 2.777.376 4.404 1.083l-.425.978-.3 2.939c4.727-.77 6.786-1.893 6.94-8C41.142 11 44 17.5 44 27c-7.333-1.875-11.5 2.5-11.5 6.4H27L24 39l-3-5.6h-5.5c0-3.9-4.167-8.275-11.5-6.4 0-9.5 2.857-16 9.388-16Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.11 12.006a1 1 0 0 0-1.104.884l-1 9a1 1 0 0 0 1.988.22l1-9a1 1 0 0 0-.884-1.104Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgAnimalBat;
