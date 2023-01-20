import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgConeTestOnWalls = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
      ref={ref}
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.709 38.513A2 2 0 0 0 19 36.643v-2.4l12.986-3.895c.52 1.626 1.992 2.799 3.728 2.799 2.17 0 3.929-1.832 3.929-4.091 0-.215-.016-.425-.046-.63C41.03 27.585 42 25.983 42 24.146c0-1.836-.969-3.438-2.403-4.28a4.29 4.29 0 0 0 .046-.629c0-2.259-1.759-4.09-3.929-4.09-1.64 0-3.045 1.046-3.633 2.533L19 13.756v-2.399a2 2 0 0 0-1.291-1.87L9.386 6.334A2.5 2.5 0 0 0 6 8.672v30.656a2.5 2.5 0 0 0 3.386 2.338l8.323-3.153ZM8.677 8.205A.5.5 0 0 0 8 8.672v30.656a.5.5 0 0 0 .677.467L17 36.643v-1.8l-3.387 1.017c-.2.092-.404.14-.613.14-2.21 0-4-5.373-4-12s1.79-12 4-12c.208 0 .412.047.61.139L17 13.156v-1.799L8.677 8.205Zm5.254 23.648c-.318.953-.653 1.588-.931 1.948-.278-.36-.613-.995-.931-1.948C11.429 29.935 11 27.159 11 24s.43-5.935 1.069-7.853c.318-.953.653-1.588.931-1.948.278.36.613.995.931 1.948C14.571 18.065 15 20.841 15 24s-.43 5.935-1.069 7.853Zm17.65-3.895c-.354-.9-.58-2.273-.58-3.811 0-1.732.286-3.254.72-4.128C30.35 20.204 29 21.726 29 24c0 2.197 1.26 3.692 2.581 3.958ZM15.575 14.816 29.3 18.934C27.871 20.037 27 21.978 27 24c0 2.021.872 3.963 2.3 5.066l-13.725 4.117C16.446 30.982 17 27.685 17 24c0-3.685-.554-6.983-1.425-9.184Zm17.971 6.028.357-.601-.096-.692a2.289 2.289 0 0 1-.021-.314c0-1.231.939-2.09 1.928-2.09.99 0 1.929.859 1.929 2.09 0 .116-.008.228-.025.336l-.198 1.336 1.165.683c.824.483 1.415 1.429 1.415 2.555 0 1.125-.591 2.07-1.415 2.554l-1.165.683.198 1.336c.017.108.025.22.025.336 0 1.231-.939 2.09-1.929 2.09-.99 0-1.928-.859-1.928-2.09 0-.108.007-.213.021-.314l.096-.692-.357-.601c-.217-.367-.546-1.558-.546-3.303 0-1.744.329-2.935.546-3.302Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgConeTestOnWalls);
export default ForwardRef;
