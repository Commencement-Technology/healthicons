import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAnimalCow = (
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
        d="M0 0h48v48H0V0Zm29 29h2.81c1.024.996 2.132 1.844 3.562 2.414-.625.357-1.42.586-2.372.586-2.566 0-4-1.67-4-3Zm-2 0h-5v9h-3a1 1 0 0 1-.166-1.986l-.345-4.14c-1.85-1.583-3.503-4.73-5.07-8.768a2.085 2.085 0 0 1-.203-.13l-2.19-1.593A2 2 0 0 0 9.85 21H6.488a2 2 0 0 1-1.916-1.425l-.3-1A2 2 0 0 1 6.188 16H6.4l3.584-4.48a11.762 11.762 0 0 0-.747-.52H7.5a.5.5 0 0 1 0-1c3.254-.161 5.117.304 6.515 1.345a6.6 6.6 0 0 1 .951-.847c.9-.663 1.202-.674 1.88-.697.279-.01.62-.022 1.093-.082 1.625-.206.887 1.673-.383 2.608-.484.357-1.159.628-1.829.8.051.067.102.135.152.205 1.226.38 2.687.668 4.621.668h14.722c.093 0 .186.002.278.007V14c.056 0 2.137 0 2.213.002 2.017.034 3.656.438 4.773 1.511C43.617 16.6 44 18.166 44 20l-.387 5.42c.235.365.387.937.387 1.58 0 1.105-.448 2-1 2s-1-.895-1-2c0-.643.152-1.215.387-1.58L42 20c0-1.608-.343-2.51-.9-3.044-.308-.297-.745-.542-1.37-.71A6.12 6.12 0 0 1 41 20v18h-3a1 1 0 0 1-.166-1.986l-.31-3.73a6.128 6.128 0 0 1-2.335 1.373l.209 1.077-1.964.38-.216-1.117a7.11 7.11 0 0 1-2.023-.227l-.557 1.035-1.762-.947.477-.887c-.47-.3-.886-.658-1.232-1.06l-1.037.423-.758-1.85.832-.34A4.219 4.219 0 0 1 27 29Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAnimalCow);
export default ForwardRef;
