import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBabyMale0609M = (passedProps: SvgProps) => {
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
      <Path d="M35.5 11.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM40.48 21.429c-1.984.491-3.778.86-5.48 1.107V25H25v-2.49c-1.698-.249-3.484-.61-5.459-1.076a2 2 0 1 1 .917-3.893c3.836.903 6.718 1.35 9.55 1.361 2.826.01 5.7-.413 9.512-1.356a2 2 0 1 1 .96 3.883ZM25 28.94V27h10v1.94c0 .634-.57 2.26-2.32 3.04-.2.089-.426.2-.628.301l-.12.06c-.248.122-.489.238-.732.341-.508.215-.903.318-1.2.318-.297 0-.693-.103-1.2-.318-.243-.103-.484-.219-.733-.342l-.119-.059c-.202-.1-.427-.212-.628-.301-1.75-.78-2.32-2.406-2.32-3.04ZM23.98 31.7c.479.807 1.273 1.62 2.455 2.156a3.513 3.513 0 0 0-.508.602c-.5.745-.93 1.665-.93 2.532 0 .792.325 1.474.57 1.99l.019.038c.272.57.444.954.444 1.36 0 .913-.785 1.622-1.711 1.622-.864 0-1.547-.575-2.056-1.688-.497-1.087-.688-2.429-.688-3.322 0-2.242.854-3.94 2.406-5.29ZM36.02 31.7c-.479.807-1.273 1.619-2.455 2.156.178.168.348.363.508.602.5.745.93 1.665.93 2.532 0 .792-.325 1.474-.57 1.99l-.019.038c-.272.57-.444.954-.444 1.36 0 .913.785 1.622 1.711 1.622.864 0 1.547-.575 2.056-1.688.497-1.087.688-2.429.688-3.322 0-2.242-.854-3.94-2.406-5.29Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 15a5 5 0 1 1-1.903-3.925L17.172 8H15a1 1 0 1 1 0-2h4.5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V9.5l-3.108 3.108c.388.71.608 1.526.608 2.392Zm-2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </Svg>
  );
};
export default SvgBabyMale0609M;
