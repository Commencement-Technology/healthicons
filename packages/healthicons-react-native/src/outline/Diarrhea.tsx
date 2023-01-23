import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDiarrhea = (passedProps: SvgProps) => {
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
        d="M27.71 13.847c1.959-.638 3.698-.319 4.986.33 1.31.662 1.863 2.01 2.072 3.124l1.128 6.018 2.268 1.26a3.059 3.059 0 0 1-2.853 5.41l-3.091-1.546a4.02 4.02 0 0 1-2.053-2.44l-.77-2.565c-.225.203-.46.463-.7.78a12.186 12.186 0 0 0-.973 1.557l2.983 2.983a1 1 0 0 1 .258.444l2.37 8.689a3.285 3.285 0 1 1-6.35 1.678c-.378-1.483-.882-3.474-1.285-5.082a301.316 301.316 0 0 1-.592-2.404c-3.906-2.533-5.447-5.059-6.003-6.17-.428-.858-.336-1.93.084-3.049.425-1.134 1.24-2.471 2.517-4.008 2.016-2.846 4.065-4.378 6.004-5.009Zm-.715 17.516a1 1 0 0 0-.492-.763c-3.807-2.386-5.182-4.73-5.609-5.582-.07-.142-.163-.57.167-1.452.322-.858.999-2.01 2.207-3.46a.998.998 0 0 0 .049-.064c1.858-2.632 3.595-3.832 5.012-4.293 1.404-.457 2.597-.224 3.467.215.49.246.844.839 1.006 1.706l1.215 6.48a1 1 0 0 0 .497.69l2.679 1.488a1.059 1.059 0 0 1-.988 1.872l-3.091-1.546a2.02 2.02 0 0 1-1.031-1.226l-1.125-3.75a1 1 0 0 0-1.2-.683c-1.145.286-2.03 1.188-2.656 2.017-.65.86-1.158 1.83-1.497 2.506a1 1 0 0 0 .188 1.154l3.312 3.313 2.3 8.432a1.285 1.285 0 1 1-2.482.66c-.377-1.484-.881-3.472-1.283-5.076-.2-.802-.376-1.506-.496-2.002a40.974 40.974 0 0 1-.15-.636ZM37.5 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0 2a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
        fill="#333"
      />
      <Path
        d="M22 42h-8.5C9.358 42 6 40.88 6 39.5S9.358 37 13.5 37c8 0 8.5 3.62 8.5 5Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.139 29.046a1 1 0 0 1 .464 1.336L16.4 34.935a1 1 0 0 1-1.8-.87l2.203-4.554a1 1 0 0 1 1.335-.465ZM21.433 32.099a1 1 0 0 1 .468 1.335l-1.223 2.544a1 1 0 1 1-1.803-.867l1.224-2.544a1 1 0 0 1 1.334-.468Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgDiarrhea;
