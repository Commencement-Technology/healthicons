import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBreedingSites = (
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
        d="M32.028 29.822c1.304 0 2.36-1.043 2.36-2.329 0-1.286-1.056-2.328-2.36-2.328-1.304 0-2.361 1.042-2.361 2.328 0 1.287 1.057 2.33 2.36 2.33Zm0-2c.225 0 .36-.173.36-.329 0-.155-.135-.328-.36-.328-.226 0-.361.173-.361.328 0 .156.135.33.36.33Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.935 6.645a1 1 0 0 0-1.87.71c.871 2.291 2.925 3.44 5.008 3.44 1.63 0 3.293-.7 4.473-2.074 1.187 1.326 2.645 2.073 4.204 2.073 1.552 0 3.005-.74 4.189-2.056 1.088 1.333 2.558 2.057 4.134 2.057 1.61 0 3.18-.754 4.42-2.133.424.482.883.89 1.369 1.216-1.377 1.076-2.322 2.559-2.942 3.816-.42.852-.713 1.645-.9 2.224l-.007.02a11.383 11.383 0 0 0-4.413.162c-.536.126-1.053.286-1.55.478-.106-2.012-1.792-3.591-3.828-3.591-.454 0-.89.078-1.296.222a4.015 4.015 0 0 0-2.825-1.154 4.006 4.006 0 0 0-3.743 2.552c-2.057.156-3.696 1.854-3.696 3.952 0 .313.036.617.106.91a3.949 3.949 0 0 0-1.824 3.324 3.93 3.93 0 0 0 1.141 2.77 3.919 3.919 0 0 0-.282 1.464c0 1.712 1.091 3.157 2.61 3.717a3.939 3.939 0 0 0 1.4 3.557 4.268 4.268 0 0 0-.146 1.11c0 .62.131 1.213.371 1.739a3.291 3.291 0 0 0-.371 1.522c0 1.851 1.518 3.329 3.36 3.329 1.844 0 3.362-1.478 3.362-3.33 0-.547-.134-1.065-.371-1.521.24-.526.37-1.12.37-1.739 0-.77-.203-1.501-.567-2.114.36-.595.568-1.291.568-2.035a3.947 3.947 0 0 0-1.683-3.23 9.664 9.664 0 0 1-.298-1.486 12.178 12.178 0 0 1-.075-2.514c.072-.843.253-1.494.508-1.89a.954.954 0 0 1 .347-.346c.103-.054.252-.096.487-.074.223.02.438.028.645.024-.856 1.78-1.13 3.79-.651 5.781 1.202 5.006 6.703 8.006 12.286 6.702 5.583-1.305 9.134-6.42 7.932-11.427-.724-3.013-3.006-5.3-5.926-6.358a14.83 14.83 0 0 1 .769-1.885c.754-1.528 1.88-3.077 3.446-3.771a.933.933 0 0 0 .046-.022c.175.019.35.028.528.028 1.976 0 3.79-1.2 5.095-3.259a1 1 0 1 0-1.69-1.07c-1.057 1.668-2.312 2.33-3.405 2.33s-2.348-.662-3.405-2.33a1 1 0 0 0-1.69 0c-1.037 1.636-2.4 2.33-3.582 2.33-1.163 0-2.381-.669-3.181-2.247a1 1 0 0 0-1.737-.083c-1.057 1.668-2.312 2.33-3.405 2.33s-2.348-.662-3.405-2.33a1 1 0 0 0-1.737.083c-.767 1.514-2.185 2.247-3.535 2.247-1.341 0-2.593-.715-3.138-2.15Zm22.567 11.438a1.016 1.016 0 0 1-.174-.055 9.275 9.275 0 0 0-4.26.017c-4.71 1.1-7.35 5.286-6.452 9.027.899 3.74 5.162 6.313 9.872 5.212 4.71-1.1 7.35-5.286 6.451-9.027-.592-2.466-2.647-4.424-5.328-5.157a1.036 1.036 0 0 1-.11-.017ZM14.113 15.76c.127-.952.96-1.706 1.988-1.706.724 0 1.354.374 1.707.933l.544.86.85-.559c.291-.19.64-.302 1.02-.302.971 0 1.747.731 1.827 1.639-.251.654-.625 1.138-1.114 1.49l-.147.107-.1.15c-.484.725-1.321 1.497-2.828 1.357a2.833 2.833 0 0 0-1.602.295 2.94 2.94 0 0 0-1.099 1.034c-.515.799-.736 1.833-.818 2.803-.085.993-.033 2.036.084 2.94.115.89.303 1.72.527 2.266l.131.32.302.171a1.956 1.956 0 0 1 1.004 1.703c0 .517-.203.988-.542 1.342l-.668.7.676.69c.308.315.534.817.534 1.417 0 .477-.143.896-.36 1.206l-.438.628.492.587a1.3 1.3 0 0 1 .306.84c0 .72-.596 1.329-1.361 1.329s-1.361-.608-1.361-1.33c0-.318.113-.609.306-.84l.491-.586-.438-.627a2.11 2.11 0 0 1-.36-1.207c0-.389.096-.74.25-1.026l.49-.91-.926-.46a1.96 1.96 0 0 1-1.101-1.753c0-.302.069-.585.19-.839l.66-1.366-1.515-.068c-1.075-.048-1.911-.92-1.911-1.962 0-.422.135-.812.367-1.133l.63-.872-.916-.565a1.953 1.953 0 0 1-.94-1.664c0-.863.572-1.61 1.384-1.868l1.16-.37-.588-1.065a1.919 1.919 0 0 1-.238-.93c0-1.073.884-1.965 2.005-1.965.105 0 .207.008.307.023l1.005.15.134-1.007Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBreedingSites);
export default ForwardRef;
