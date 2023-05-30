import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgIntestine = (
  passedProps: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        d="M26.2 4a3 3 0 0 1 3 3v4.877c0 .833-.286 1.64-.837 2.29-.499.59-1.09.905-1.51 1.076-.789.322-1.646.403-2.21.44-.605.038-1.283.043-1.893.047h-.073c-.665.005-1.298.01-1.919.043-1.332.07-2.148.255-2.568.485a.664.664 0 0 0-.14.095c.175.067.413.14.724.208 1.418.315 3.36.377 5.747.454l.577.019c2.412.079 5.326.194 7.647.898 1.191.36 2.504.953 3.54 2.013C37.406 21.09 38 22.575 38 24.262c0 1.79-.711 3.338-2.03 4.432-1.178.976-2.626 1.413-3.876 1.638-2.395.431-5.418.29-7.99.17l-.243-.011c-2.875-.134-5.233-.225-6.884.077-.378.069-.654.149-.848.225-.05.02-.093.039-.128.055.006.185.03.304.049.374a.393.393 0 0 0 .048.117c.005.008.063.096.33.213.674.298 1.862.436 3.599.394.79-.02 1.59-.07 2.408-.123l.08-.005c.81-.052 1.684-.108 2.46-.11.703 0 1.696.033 2.597.345.48.167 1.149.483 1.71 1.115.621.698.918 1.564.918 2.432V41a3 3 0 1 1-6 0v-3.27c-.383.017-.814.044-1.301.075l-.117.008c-.79.05-1.696.109-2.609.131-1.813.044-4.175-.025-6.163-.9-1.059-.466-2.114-1.203-2.887-2.351-.78-1.157-1.123-2.506-1.123-3.934 0-1.788.706-3.339 2.021-4.439 1.176-.983 2.625-1.425 3.877-1.654 2.41-.44 5.45-.299 8.032-.179l.21.01c2.876.134 5.236.228 6.89-.07.38-.068.656-.148.85-.223a2.04 2.04 0 0 0 .114-.048.38.38 0 0 0-.003-.02c-.065-.064-.318-.26-.986-.462-1.429-.433-3.515-.559-6.103-.644l-.7-.021c-2.198-.068-4.723-.146-6.726-.59-1.122-.248-2.434-.68-3.51-1.555-1.216-.99-1.966-2.42-1.966-4.146 0-1.245.283-2.43.916-3.475.63-1.04 1.5-1.76 2.394-2.249 1.68-.919 3.664-1.135 5.132-1.213.779-.04 1.546-.046 2.194-.05l.564-.005V7a3 3 0 0 1 3-3Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIntestine);
export default ForwardRef;
