import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeCriticalCare = (
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
        d="M48 0H0v48h48V0ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M13 13a1 1 0 0 0-1 1v15.96a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V14a1 1 0 0 0-1-1H13Zm6.504 8.679h-5.658v1.987h6.833l1.619-2.847 1.891 6.548 4.43-5.633h4.53a1 1 0 0 0 1.005-.993 1 1 0 0 0-1.005-.994h-5.513l-2.602 3.31-2.127-7.363-3.403 5.985Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M13 20.679h5.922L22.72 14H13v6.679Zm0 3.987v5.293h22v-8.45a2.008 2.008 0 0 1-1.85 1.225h-4.046L23.77 29.52l-1.775-6.145-.734 1.292H13Zm9.298-3.847 1.891 6.548 4.43-5.633h4.53a1 1 0 0 0 1.005-.993 1 1 0 0 0-1.005-.994h-5.513l-2.602 3.31-2.127-7.363-3.403 5.985h-5.658v1.987h6.833l1.619-2.847Zm3.155.086 1.697-2.158h6c.827 0 1.546.502 1.85 1.225V14H23.459l1.994 6.905ZM12 14a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v15.96a1 1 0 0 1-1 1H13a1 1 0 0 1-1-1V14Zm17.538 21.102H18.462v-2h11.076v2Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M23 35v-6.286h2V35h-2Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeCriticalCare);
export default ForwardRef;
