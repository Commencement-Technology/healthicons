import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgObstetricsmonia = (passedProps: SvgProps) => {
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
        d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Zm6.515 26.283c4.686 4.686 12.284 4.686 16.97 0 4.687-4.687 4.687-12.285 0-16.971-4.364-4.364-11.253-4.664-15.965-.9 2.836-.293 4.746 3.27 2.544 5.472-1.076 1.076-.314 2.916 1.207 2.916h.638a3.472 3.472 0 0 1 3.355 2.577l1.273 4.774a6.857 6.857 0 0 0 1.825-1.149l-.04.003a1.5 1.5 0 0 1-1.57-1.132l-.99-3.96a1.5 1.5 0 1 1 2.91-.727l.683 2.73 1.955-.15a1.5 1.5 0 0 1 1.52 2.023c-.628 1.673-2.988 5.338-8.17 5.914a1.5 1.5 0 0 1-1.62-1.127l-.626-2.505-2.505.626a1.5 1.5 0 1 1-.728-2.91l3.96-.99a1.5 1.5 0 0 1 .971.083l-.298-1.117A1.972 1.972 0 0 0 20.91 24.3h-.637c-2.858 0-4.29-3.456-2.269-5.476 1.267-1.268-.024-3.382-1.73-2.834l-1.87.601c-3.54 4.702-3.169 11.411 1.112 15.692ZM14.1 33.697c5.468 5.467 14.332 5.467 19.8 0 5.467-5.468 5.467-14.332 0-19.8-5.468-5.467-14.332-5.467-19.8 0-5.467 5.468-5.467 14.332 0 19.8Zm19.295-9.405a2.8 2.8 0 1 1-3.96-3.96 2.8 2.8 0 0 1 3.96 3.96Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgObstetricsmonia;
