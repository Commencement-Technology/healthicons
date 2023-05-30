import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSweating = (
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
      <g clipPath="url(#sweating_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm34.767 35.835A15.942 15.942 0 0 1 24 40c-3.166 0-6.117-.92-8.6-2.506a5.673 5.673 0 0 1-1.195 1.61A17.916 17.916 0 0 0 24 42c5.06 0 9.633-2.088 12.903-5.45a5.353 5.353 0 0 1-2.136-.715Zm7.048-9.242c.122-.847.185-1.712.185-2.593 0-9.941-8.059-18-18-18S6 14.059 6 24c0 1.897.293 3.725.837 5.442a20.942 20.942 0 0 1 1.51-2.114A16.066 16.066 0 0 1 8 24c0-8.837 7.163-16 16-16 8.758 0 15.873 7.037 15.998 15.765a18.614 18.614 0 0 1 1.817 2.828ZM37.5 34c1.933 0 3.5-1.465 3.5-3.273C41 27.864 37.5 25 37.5 25S34 27.864 34 30.727C34 32.535 35.567 34 37.5 34Zm-23.5.727C14 36.535 12.433 38 10.5 38S7 36.535 7 34.727C7 31.864 10.5 29 10.5 29s3.5 2.864 3.5 5.727ZM24 27c3.23 0 6.03 2.438 7.407 6 .387 1.003-.42 2-1.495 2H18.088c-1.075 0-1.882-.997-1.495-2 1.376-3.562 4.177-6 7.407-6Zm-9.304-4.762c-.684-.438-1.184-1.145-1.065-1.883a.5.5 0 0 1 .668-.39c1.818.676 3.846.257 5.642-1.448a.5.5 0 0 1 .818.204c.232.688.024 1.618-.48 2.381a3.794 3.794 0 0 1-2.654 1.666c-1.198.177-2.216-.073-2.93-.53Zm17.947 0c.682-.438 1.183-1.145 1.064-1.883a.5.5 0 0 0-.668-.39c-1.818.676-3.846.257-5.642-1.448a.5.5 0 0 0-.818.204c-.232.688-.024 1.618.48 2.381a3.794 3.794 0 0 0 2.654 1.666c1.198.177 2.216-.073 2.93-.53Z"
          fill="#333"
        />
      </g>
      <defs>
        <clipPath id="sweating_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSweating);
export default ForwardRef;
