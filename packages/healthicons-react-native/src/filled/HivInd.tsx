import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHivInd = (passedProps: SvgProps) => {
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
        d="M29.591 4.675C28.79 4.217 27.891 4 26.924 4h-5.248c-1.824 0-3.669.85-4.779 2.387a6.068 6.068 0 0 0-.108.141l-2.337 3.03-.811 1.081-.002.002a9.414 9.414 0 0 0 .002 11.339l.006.008 9.777 12.402L30 42.775a2 2 0 0 0 2.912.252l4.066-3.662a2 2 0 0 0 .241-2.713l-7.43-9.563-4.792-6.058-5.423-7.004a4.062 4.062 0 0 1 2.012-.518h5.247c.663 0 1.343.193 1.941.518l-3.335 4.308 1.133 1.464 4.44 5.612a3.035 3.035 0 0 1-.028-.411v-3A3 3 0 0 1 28 19c0-3.292 2.65-5.941 5.907-5.999l.077-.001h.032l.077.001c.765.014 1.497.17 2.168.444a9.334 9.334 0 0 0-1.482-2.895l-.812-1.084-.009-.01-2.331-3.023-.011-.015.012-.009c-.575-.804-1.352-1.343-2.037-1.734Zm-8.005 6.834c-1.123 0-2.267.3-3.241.924a4.206 4.206 0 0 1-.736-2.366c0-.815.257-1.632.774-2.331l.115-.15.01-.014C19.21 6.59 20.434 6 21.677 6h5.248c.66 0 1.21.145 1.675.411.551.315 1.02.66 1.348 1.088l-.015.011.1.13a4.034 4.034 0 0 1-.022 4.792c-.934-.57-2.045-.923-3.177-.923h-5.247Z"
        fill="#333"
      />
      <Path
        d="M36 19a2.008 2.008 0 0 0-2-2c-1.111.009-2 .906-2 2a1 1 0 1 1-2 0 4.008 4.008 0 0 1 3.984-4h.064C36.23 15.035 38 16.808 38 19a4.004 4.004 0 0 1-3.016 3.875V25a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1C35.102 21 36 20.1 36 19ZM21.456 35.932l-4.889-6.204-5.73 7.332a2 2 0 0 0 .368 2.826l4.379 3.317a2 2 0 0 0 2.781-.36l4.256-5.426-1.16-1.48-.005-.005ZM35 28a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgHivInd;