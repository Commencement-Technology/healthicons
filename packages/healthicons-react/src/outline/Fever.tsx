import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgFever = (
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
        d="M32.326 8.037A17.922 17.922 0 0 0 24 6C14.059 6 6 14.059 6 24s8.059 18 18 18 18-8.059 18-18c0-2.26-.417-4.424-1.177-6.417a5.951 5.951 0 0 1-1.75 1.038c.6 1.681.927 3.492.927 5.379 0 8.837-7.163 16-16 16S8 32.837 8 24 15.163 8 24 8c2.722 0 5.286.68 7.53 1.88.217-.632.49-1.25.796-1.843Z"
      />
      <path d="M14.236 20.43c2.024.751 4.248.26 6.16-1.555.334.99-.55 3.071-2.732 3.393-2.182.322-3.575-.927-3.428-1.838Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.807 22.233c-.683-.438-1.183-1.145-1.064-1.883a.5.5 0 0 1 .668-.389c1.818.675 3.846.256 5.642-1.448a.5.5 0 0 1 .818.203c.231.689.024 1.618-.48 2.381a3.794 3.794 0 0 1-2.654 1.666c-1.198.177-2.216-.073-2.93-.53Zm.54-.842c.491.314 1.26.528 2.244.383a2.794 2.794 0 0 0 1.965-1.228c.125-.19.218-.379.283-.559-1.506 1.083-3.165 1.482-4.773 1.188.077.072.17.145.28.216Z"
      />
      <path d="M33.325 20.43c-2.024.751-4.248.26-6.16-1.555-.333.99.55 3.071 2.733 3.393 2.181.322 3.574-.927 3.427-1.838Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.754 22.233c.683-.438 1.184-1.145 1.065-1.883a.5.5 0 0 0-.668-.389c-1.818.675-3.846.256-5.642-1.448a.5.5 0 0 0-.818.203c-.232.689-.024 1.618.48 2.381a3.794 3.794 0 0 0 2.653 1.666c1.199.177 2.216-.073 2.93-.53Zm-.54-.842c-.49.314-1.26.528-2.243.383a2.794 2.794 0 0 1-1.966-1.228 2.651 2.651 0 0 1-.283-.559c1.506 1.083 3.166 1.482 4.773 1.188-.077.072-.17.145-.28.216ZM37 15a2 2 0 0 0 2-2c0-1.066-.654-2.37-1.59-3.6a14.17 14.17 0 0 0-.41-.512c-.135.16-.272.332-.41.512C35.655 10.63 35 11.934 35 13a2 2 0 0 0 2 2Zm0 2a4 4 0 0 0 4-4c0-3.5-4-7-4-7s-4 3.5-4 7a4 4 0 0 0 4 4ZM29.232 33c-1.24-2.614-3.272-4-5.232-4-1.96 0-3.992 1.386-5.232 4h10.464ZM24 27c3.23 0 6.03 2.438 7.407 6 .387 1.003-.42 2-1.495 2H18.088c-1.075 0-1.882-.997-1.495-2 1.377-3.562 4.177-6 7.407-6Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m15.678 27.265 6.5 6-1.356 1.47-6.5-6 1.356-1.47Z"
      />
      <path d="M17 28a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFever);
export default ForwardRef;
