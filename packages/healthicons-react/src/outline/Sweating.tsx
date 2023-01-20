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
      <path
        d="M24 40c4.146 0 7.925-1.577 10.767-4.165.642.38 1.365.63 2.136.715A17.946 17.946 0 0 1 24 42a17.916 17.916 0 0 1-9.795-2.896 5.673 5.673 0 0 0 1.194-1.61A15.925 15.925 0 0 0 24 40ZM42 24c0 .88-.063 1.746-.185 2.593a18.614 18.614 0 0 0-1.817-2.828C39.873 15.037 32.758 8 24 8 15.163 8 8 15.163 8 24c0 1.141.12 2.254.347 3.328a20.942 20.942 0 0 0-1.51 2.114A17.991 17.991 0 0 1 6 24c0-9.941 8.059-18 18-18s18 8.059 18 18Z"
        fill="#333"
      />
      <path
        d="M14.807 22.233c-.683-.438-1.183-1.145-1.064-1.883a.5.5 0 0 1 .668-.389c1.818.675 3.846.256 5.642-1.448a.5.5 0 0 1 .818.203c.231.689.024 1.618-.48 2.382a3.794 3.794 0 0 1-2.654 1.665c-1.198.177-2.216-.073-2.93-.53ZM32.754 22.233c.683-.438 1.184-1.145 1.065-1.883a.5.5 0 0 0-.668-.389c-1.818.675-3.846.256-5.642-1.448a.5.5 0 0 0-.818.203c-.232.689-.024 1.618.48 2.382a3.794 3.794 0 0 0 2.653 1.665c1.199.177 2.216-.073 2.93-.53ZM37.5 34c1.933 0 3.5-1.465 3.5-3.273C41 27.864 37.5 25 37.5 25S34 27.864 34 30.727C34 32.535 35.567 34 37.5 34ZM14 34.727C14 36.535 12.433 38 10.5 38S7 36.535 7 34.727C7 31.864 10.5 29 10.5 29s3.5 2.864 3.5 5.727Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.407 33C30.03 29.438 27.23 27 24 27c-3.23 0-6.03 2.438-7.407 6-.387 1.003.42 2 1.495 2h11.824c1.075 0 1.882-.997 1.495-2ZM24 29c1.96 0 3.992 1.386 5.232 4H18.768c1.24-2.614 3.272-4 5.232-4Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSweating);
export default ForwardRef;
