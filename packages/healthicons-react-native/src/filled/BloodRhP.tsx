import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBloodRhP = (passedProps: SvgProps) => {
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
      <Path d="M20.388 5.535a5.018 5.018 0 0 1 7.224 0l.528.548h5.19c2.573 0 4.67 2.074 4.67 4.646V15h-2v-4.271a2.658 2.658 0 0 0-2.67-2.646h-5.616a1 1 0 0 1-.72-.307l-.823-.855a3.018 3.018 0 0 0-4.342 0l-.823.855a1 1 0 0 1-.72.307H15c-1.663 0-3 1.338-3 2.974V28.97a68.776 68.776 0 0 1 3.7.06l.53.02c1.284.048 2.481.093 3.652.069 2.627-.056 5.042-.466 7.61-1.981 3.118-1.84 5.758-1.288 7.583-.226.338.197.647.41.925.626V23h2v10.026C38 35.78 35.755 38 33 38h-3v2h-5v4h-2v-4h-5v-2h-3c-2.755 0-5-2.22-5-4.974v-21.97c0-2.752 2.245-4.973 5-4.973h4.86l.528-.548Z" />
      <Path d="M25 14a1 1 0 0 1 1 1v3h3v-3a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0v-3h-3v3a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 14a1 1 0 0 0-1 1v8a1 1 0 1 0 2 0v-3h1.49l1.605 3.424a1 1 0 0 0 1.81-.848l-1.383-2.95C21.42 19.102 22 18.095 22 17c0-1.595-1.227-3-2.875-3H16Zm4 3c0 .614-.452 1-.875 1H17v-2h2.125c.423 0 .875.386.875 1Z"
      />
      <Path d="M32 19a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z" />
    </Svg>
  );
};
export default SvgBloodRhP;
