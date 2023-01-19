import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledHumanResoruces = (
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
        d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9Zm13 11a3 3 0 1 1-6 0 3 3 0 1 1 6 0Zm-7 7.727c0-.118.047-.276.256-.486.218-.22.564-.442 1.019-.641.914-.4 2.028-.6 2.725-.6.697 0 1.81.2 2.725.6.455.198.8.42 1.019.64.21.211.256.369.256.487V31h2v-3.273c0-.788-.37-1.425-.837-1.896-.459-.461-1.05-.807-1.637-1.064C18.358 24.257 16.971 24 16 24c-.972 0-2.358.257-3.526.767-.587.257-1.178.603-1.637 1.064-.467.471-.837 1.108-.837 1.896V31h2v-3.273Zm16.256-.486c-.21.21-.256.368-.256.486V31h-2v-3.273c0-.788.37-1.425.837-1.896.459-.461 1.05-.807 1.637-1.064C29.642 24.257 31.029 24 32 24c.971 0 2.358.257 3.526.767.587.257 1.178.603 1.637 1.064.468.471.837 1.108.837 1.896V31h-2v-3.273c0-.118-.047-.276-.256-.486-.218-.22-.564-.442-1.019-.641-.914-.4-2.028-.6-2.725-.6-.697 0-1.81.2-2.725.6-.455.198-.8.42-1.019.64ZM32 23a3 3 0 1 0 0-6 3 3 0 1 0 0 6Zm-5-5a3 3 0 1 1-6 0 3 3 0 1 1 6 0Zm-4.754 7.166c.07-.079.168-.143.451-.17a4.69 4.69 0 0 1 .554-.012l.202.005c.17.005.363.011.547.011.184 0 .377-.006.547-.01l.202-.006a4.72 4.72 0 0 1 .554.011c.283.028.38.092.451.171l1.492-1.332c-.525-.588-1.18-.774-1.748-.83-.344-.033-.77-.021-1.12-.012-.142.004-.272.008-.378.008-.106 0-.236-.004-.378-.008-.35-.01-.776-.02-1.12.013-.568.055-1.223.241-1.748.829l1.492 1.332Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledHumanResoruces);
export default ForwardRef;
