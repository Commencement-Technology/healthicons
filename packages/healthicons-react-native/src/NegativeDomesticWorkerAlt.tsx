import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeDomesticWorkerAlt = (
  passedProps: SvgProps,
  ref: Ref<SVGSVGElement>
) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M48 0H0v48h48V0ZM16.5 13a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm12.949 3.05A2.006 2.006 0 0 0 29 16h-9v12h-7V16h-1a6 6 0 0 0-1 11.917V40a2 2 0 1 0 4 0v-9h3v9a2 2 0 1 0 4 0V20h7c.477 0 .914-.167 1.258-.445l1.998 8.654a4 4 0 0 0-2.998 4.798l1.05 8.994 2.824-.652-1.03-4.914 1.958-.41 1.021 4.874 6.92-1.597-2.999-8.545a4 4 0 0 0-4.797-2.997L30.38 11.195a1 1 0 0 0-1.95.45l1.018 4.406ZM18 19v-3h-3v3h3Zm-7 1a2 2 0 1 0 0 4v-4Zm21.706 10.158 1.949-.45a2 2 0 0 1 2.398 1.5l-5.846 1.349a2 2 0 0 1 1.499-2.399Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeDomesticWorkerAlt);
export default ForwardRef;
