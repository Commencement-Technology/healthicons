import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgLowVision = (
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.293 9.293a1 1 0 0 1 1.414 0l4.44 4.44A23.503 23.503 0 0 1 24 12c8.866 0 15.434 4.97 18.874 8.864a4.709 4.709 0 0 1 0 6.272 27.59 27.59 0 0 1-8.077 6.247l3.91 3.91a1 1 0 0 1-1.414 1.414l-4.44-4.44A23.503 23.503 0 0 1 24 36c-8.866 0-15.434-4.97-18.874-8.864a4.709 4.709 0 0 1 0-6.272 27.59 27.59 0 0 1 8.077-6.247l-3.91-3.91a1 1 0 0 1 0-1.414ZM10.026 19c.899-.702 1.892-1.38 2.972-2H15.586l2 2h-7.56Zm-2.25 1.975c-.417.41-.8.817-1.15 1.213a2.79 2.79 0 0 0-.503.812h15.463l-2-2H8c-.077 0-.153-.009-.225-.025Zm-1.15 4.837A2.79 2.79 0 0 1 6.122 25h17.463l2 2H8c-.077 0-.153.009-.225.025-.416-.41-.8-.817-1.15-1.213Zm3.4 3.188c.899.702 1.892 1.38 2.972 2H29.586l-2-2h-17.56ZM24 34c-2.33 0-4.49-.377-6.464-1h12.928c-1.973.623-4.135 1-6.464 1Zm4.89-6.523 2.853 2.852c3.227-3.938 2.991-9.76-.694-13.422-3.67-3.648-9.46-3.86-13.378-.65l2.852 2.852A5.973 5.973 0 0 1 24 18c.926 0 1.803.21 2.587.585a2 2 0 1 0 2.828 2.828c.375.784.585 1.66.585 2.587 0 1.296-.41 2.496-1.11 3.477Zm4.273 4.272.138.138c3.508-1.653 6.25-4.01 8.074-6.075a2.709 2.709 0 0 0 0-3.624c-1.9-2.15-4.792-4.615-8.509-6.275 4.075 4.46 4.178 11.257.297 15.836Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgLowVision);
export default ForwardRef;