import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineExerciseWalking = (
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
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M18.574 31.453a1 1 0 0 1 .948.245l3.249 3.116a1 1 0 0 1 .266 1.005l-.709 2.394a3 3 0 0 1-1.026 1.51l-4.643 3.636a3 3 0 1 1-3.7-4.723l3.889-3.046 1.023-3.455a1 1 0 0 1 .703-.682Zm.748 2.824-.648 2.187a1 1 0 0 1-.342.503l-4.14 3.244a1 1 0 0 0 1.233 1.574l4.643-3.637a1 1 0 0 0 .343-.503l.536-1.81-1.624-1.558ZM28 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 2a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M21.737 14.364c1.428-.53 2.962-.5 4.339.213 1.31.677 2.197 1.823 2.755 3.021.21.449.402.867.583 1.259.44.954.8 1.737 1.145 2.42.486.967.842 1.534 1.156 1.9.27.313.501.472.799.588.35.138.923.263 1.942.294a2.794 2.794 0 0 1-.167 5.585c-1.357-.04-2.634-.214-3.809-.673-1.228-.48-2.197-1.213-3.005-2.155a9.415 9.415 0 0 1-.28-.342l-.403 2.104 4.367 4.309c.279.274.496.604.639.968l2.484 6.33a2.794 2.794 0 1 1-5.202 2.041l-2.268-5.777-7.859-7.755a2.794 2.794 0 0 1-.814-2.303l.325-2.87c-.892 1.153-1.642 2.54-2.166 4.18a2.794 2.794 0 1 1-5.324-1.699c1.768-5.538 5.767-9.709 10.73-11.625l.006-.003.027-.01Zm.7 1.874-.016.006c-4.383 1.693-7.954 5.391-9.541 10.366a.794.794 0 1 0 1.513.483c.994-3.113 2.725-5.468 4.76-7.13a1 1 0 0 1 1.626.886l-.652 5.767a.794.794 0 0 0 .231.654l8.01 7.904c.1.098.178.216.229.346l2.345 5.976a.794.794 0 1 0 1.478-.58l-2.484-6.33a.794.794 0 0 0-.181-.276l-4.748-4.684a1 1 0 0 1-.28-.9l.981-5.125a1 1 0 0 1 1.868-.277c.45.857.9 1.59 1.416 2.19.616.717 1.321 1.244 2.216 1.594.88.344 1.905.5 3.14.537a.794.794 0 1 0 .048-1.587c-1.14-.034-1.964-.177-2.61-.43-.63-.246-1.126-.61-1.588-1.149-.476-.553-.918-1.294-1.425-2.302a82.791 82.791 0 0 1-1.17-2.47l-.005-.012c-.18-.392-.372-.808-.58-1.253-.43-.922-1.05-1.67-1.86-2.089-.828-.428-1.77-.468-2.722-.115Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineExerciseWalking);
export default ForwardRef;
