import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineTemple = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M19 14.048h10v4h-2v-1a1 1 0 1 0-2 0v1h-2v-1a1 1 0 1 0-2 0v1h-2v-4Zm-2 6v-8h14v8H17Zm0 5h14v4h-2v-1a1 1 0 1 0-2 0v1h-2v-1a1 1 0 1 0-2 0v1h-2v-1a1 1 0 1 0-2 0v1h-2v-4Zm-2 6v-8h18v8H15Zm12 11v-2h-6v2h6Zm2 0v-2a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v2h-2v-6h14v6h-2Zm-18 2v-10h26v10H11Zm22-2v-6h2v6h-2Zm-18 0v-6h-2v6h2Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M15.428 13.707C14.703 13.316 14 12.49 14 10.762c.683.732 1.424 1.018 2.183.99 2.472-.093 5.14-3.518 6.632-5.77C23.55 4.872 24 4.048 24 4.048s.45.824 1.185 1.934c1.492 2.252 4.16 5.677 6.632 5.77.76.028 1.5-.258 2.183-.99 0 1.729-.703 2.554-1.428 2.945-.773.417-1.572.34-1.572.34H17s-.799.077-1.572-.34Zm12.357-1.66h-7.57a15.548 15.548 0 0 0 1.77-1.694A26.62 26.62 0 0 0 24 7.795a26.62 26.62 0 0 0 2.016 2.558 15.548 15.548 0 0 0 1.769 1.695Zm4.765 17.001H15s-1.404 4.096-3.676 4.629c-.698.164-1.478-.009-2.324-.74 0 1.66 1.025 2.434 1.982 2.795a5.118 5.118 0 0 0 1.618.316h22.8s.782 0 1.617-.315c.956-.36 1.983-1.135 1.983-2.796-.828.715-1.616.896-2.339.75-2.421-.488-4.111-4.64-4.111-4.64Zm.903 5a9.157 9.157 0 0 1-.549-.59c-.706-.827-1.25-1.736-1.61-2.41H16.33c-.314.664-.78 1.534-1.396 2.333a8.457 8.457 0 0 1-.57.667h19.09Zm-2.803-16H17s-1.8 3.938-3.882 4.594c-.693.218-1.418.072-2.118-.705 0 1.662.8 2.436 1.544 2.797.649.314 1.256.314 1.256.314h20.4s.607 0 1.256-.314C36.2 24.374 37 23.599 37 21.937c-.684.76-1.414.917-2.125.719-2.199-.612-4.225-4.608-4.225-4.608Zm1.175 5c-.193-.184-.37-.368-.53-.544-.733-.806-1.337-1.696-1.747-2.358l-.06-.098H18.214l-.017.03c-.375.662-.932 1.558-1.62 2.372a9.951 9.951 0 0 1-.546.598h15.794Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineTemple);
export default ForwardRef;
