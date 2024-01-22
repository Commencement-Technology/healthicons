import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChartDeathRateIncreasing = (
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
        d="M30.5 14a2.5 2.5 0 1 0 2.414 3.153 2.61 2.61 0 1 0 .026-1.201A2.5 2.5 0 0 0 30.5 14Zm-.5 2.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm5.465-.501a.608.608 0 1 0 0 1.217.608.608 0 0 0 0-1.217Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.462 21.835c-.462 0-1.847-.453-1.847-2.487 0-.805-.252-1.186-.558-1.646C24.59 17 24 16.112 24 13.243c0-9.657 18-9.657 18 0 0 2.87-.59 3.757-1.057 4.46-.305.46-.558.84-.558 1.645 0 2.035-1.808 2.487-1.846 2.487-.039 0-.616 1.356-.616 2.26C37.923 25 35.308 25 33 25s-4.923 0-4.923-.904c0-.905-.154-2.261-.616-2.261Zm.223-2.01.004.01.005.01c1.08.107 1.63.93 1.802 1.237.225.4.339.828.403 1.128.048.228.085.466.112.703.788.084 1.843.087 2.989.087 1.184 0 2.27-.003 3.066-.096a9.756 9.756 0 0 1 .516-1.62 4.89 4.89 0 0 1 .13-.285 2.102 2.102 0 0 1 .611-.754c.074-.056.333-.252.733-.351l.006-.003a.703.703 0 0 0 .16-.095.374.374 0 0 0 .103-.12c.018-.035.06-.128.06-.328 0-1.484.657-2.43.968-2.877.051-.074.093-.135.12-.181.174-.292.527-.931.527-3.047 0-1.702-.756-2.933-1.976-3.806C36.744 8.522 34.926 8 33 8c-1.926 0-3.745.522-5.024 1.437-1.22.873-1.976 2.104-1.976 3.806 0 2.116.353 2.755.526 3.047.028.046.07.107.121.18.31.447.968 1.394.968 2.878 0 .28.047.423.07.477Z"
        fill="#000"
      />
      <path
        d="M6 41a1 1 0 0 0 1 1h35v-2H8V18h.871c2.016 0 4.021.612 5.864 1.815 1.846 1.204 3.482 2.971 4.765 5.186 1.419 2.45 3.262 4.462 5.402 5.86C27.047 32.258 29.428 33 31.86 33h6.506l-3.073 3.075a1 1 0 0 0 1.414 1.414l4.78-4.782a1 1 0 0 0 0-1.414l-4.78-4.782a1 1 0 0 0-1.414 1.414L38.367 31H31.86c-2.016 0-4.022-.612-5.865-1.815-1.845-1.204-3.482-2.971-4.764-5.186-1.419-2.45-3.262-4.462-5.403-5.86C13.684 16.742 11.303 16 8.871 16H8V6H6v35Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgChartDeathRateIncreasing);
export default ForwardRef;
