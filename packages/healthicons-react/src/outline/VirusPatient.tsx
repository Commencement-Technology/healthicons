import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVirusPatient = (
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
        d="M17 18c3.867 0 7-3.133 7-7s-3.133-7-7-7-7 3.133-7 7 3.133 7 7 7Zm5-7c0 2.763-2.237 5-5 5s-5-2.237-5-5 2.237-5 5-5 5 2.237 5 5Z"
      />
      <path d="M6 25.333c0-.472.258-.992.946-1.556.687-.564 1.692-1.073 2.888-1.498C12.222 21.429 15.108 21 17 21c1.892 0 4.778.428 7.166 1.279.336.12.656.245.959.377.62-.472 1.283-.89 1.982-1.247a14.534 14.534 0 0 0-2.27-1.014C22.227 19.465 19.113 19 17 19c-2.113 0-5.227.465-7.837 1.395-1.304.464-2.548 1.067-3.485 1.836C4.74 22.999 4 24.03 4 25.333V31h16.153c.106-.686.265-1.354.474-2H6v-3.667Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 23a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v2.07a6.965 6.965 0 0 1 3.192 1.324L38.586 26l-.293-.293a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-1.414 1.414L40 27.414l-1.394 1.394A6.965 6.965 0 0 1 39.93 32H42v-1a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0v-1h-2.07a6.956 6.956 0 0 1-.922 2.594L41 38.586l.293-.293a1 1 0 0 1 1.414 1.414l-2 2a1 1 0 0 1-1.414-1.414l.293-.293-1.848-1.847A6.975 6.975 0 0 1 34 39.929V42h1a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h1v-2.07a6.965 6.965 0 0 1-3.192-1.324L27.414 40l.293.293a1 1 0 0 1-1.414 1.414l-2-2a1 1 0 0 1 1.414-1.414l.293.293 1.394-1.394A6.965 6.965 0 0 1 26.07 34H24v1a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0v1h2.07a6.965 6.965 0 0 1 1.324-3.192L26 27.414l-.293.293a1 1 0 0 1-1.414-1.414l2-2a1 1 0 0 1 1.414 1.414l-.293.293 1.394 1.394A6.965 6.965 0 0 1 32 26.07V24h-1a1 1 0 0 1-1-1Zm-2 10a5 5 0 1 0 10 0 5 5 0 0 0-10 0Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgVirusPatient);
export default ForwardRef;
