import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledBreedingSites = (
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
        d="M29.955 35.03c5.583-1.343 9.134-6.61 7.932-11.763-1.203-5.153-6.704-8.242-12.287-6.899-5.583 1.344-9.134 6.61-7.931 11.763 1.202 5.153 6.703 8.242 12.286 6.899Zm2.073-4.537c1.304 0 2.361-1.073 2.361-2.397 0-1.324-1.057-2.397-2.361-2.397-1.304 0-2.361 1.073-2.361 2.397 0 1.324 1.057 2.397 2.36 2.397Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        d="M17.389 17.156c0-1.685 1.345-3.051 3.005-3.051s3.005 1.366 3.005 3.05c0 1.686-1.345 3.052-3.005 3.052s-3.005-1.366-3.005-3.051Z"
      />
      <path
        fill="#333"
        d="M13.096 16.284c0-1.685 1.345-3.051 3.005-3.051s3.005 1.366 3.005 3.05c0 1.686-1.345 3.052-3.005 3.052s-3.005-1.366-3.005-3.051Z"
      />
      <path
        fill="#333"
        d="M9.662 18.9c0-1.686 1.345-3.052 3.005-3.052s3.005 1.366 3.005 3.051-1.346 3.051-3.005 3.051c-1.66 0-3.005-1.366-3.005-3.05Z"
      />
      <path
        fill="#333"
        d="M7.945 23.258c0-1.685 1.345-3.051 3.005-3.051s3.005 1.366 3.005 3.051-1.346 3.051-3.005 3.051c-1.66 0-3.005-1.366-3.005-3.05Z"
      />
      <path
        fill="#333"
        d="M8.803 27.617c0-1.685 1.345-3.051 3.005-3.051s3.005 1.366 3.005 3.05c0 1.686-1.345 3.052-3.005 3.052s-3.005-1.366-3.005-3.051Z"
      />
      <path
        fill="#333"
        d="M11.379 31.975c0-1.685 1.345-3.05 3.005-3.05s3.005 1.365 3.005 3.05c0 1.685-1.345 3.051-3.005 3.051s-3.005-1.366-3.005-3.05Z"
      />
      <path fill="#333" d="M13 36.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z" />
      <path
        fill="#333"
        d="M13.096 40.257c0-.963.769-1.744 1.717-1.744.949 0 1.717.78 1.717 1.744 0 .962-.768 1.743-1.717 1.743-.948 0-1.717-.78-1.717-1.743Zm3.005-10.461c-.858-1.308-2.146-9.153 3.434-8.718 5.581.436 1.288-.435 1.288-.435l-.429-3.052-3.864-1.307-4.293 3.051-.858 6.974s5.58 4.794 4.722 3.487Z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="m31.704 17.327.002-.007.009-.037.041-.16a14.835 14.835 0 0 1 .974-2.565c.754-1.527 1.88-3.076 3.446-3.77a.99.99 0 0 0 .509-1.314 1.01 1.01 0 0 0-1.33-.498c-2.217.983-3.612 3.05-4.435 4.718a16.822 16.822 0 0 0-1.109 2.924 9.08 9.08 0 0 0-.065.255l-.004.017-.002.007.982.216-.982-.215a.99.99 0 0 0 .762 1.185 1.01 1.01 0 0 0 1.202-.756Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M6.645 6.065a1 1 0 0 1 1.29.58c.545 1.435 1.797 2.15 3.138 2.15 1.35 0 2.768-.733 3.535-2.247a1 1 0 0 1 1.737-.083c1.057 1.668 2.312 2.33 3.405 2.33s2.348-.662 3.405-2.33a1 1 0 0 1 1.737.083c.8 1.578 2.018 2.247 3.18 2.247 1.184 0 2.546-.694 3.583-2.33a1 1 0 0 1 1.69 0c1.057 1.668 2.312 2.33 3.405 2.33s2.348-.662 3.405-2.33a1 1 0 0 1 1.69 1.07c-1.304 2.058-3.119 3.26-5.095 3.26-1.582 0-3.06-.77-4.256-2.133-1.242 1.379-2.812 2.133-4.421 2.133-1.576 0-3.046-.724-4.134-2.057-1.184 1.315-2.637 2.056-4.189 2.056-1.559 0-3.017-.747-4.204-2.073a5.908 5.908 0 0 1-4.473 2.073c-2.083 0-4.137-1.148-5.008-3.439a1 1 0 0 1 .58-1.29Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledBreedingSites);
export default ForwardRef;
